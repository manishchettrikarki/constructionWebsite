"use client";

import Image from "next/image";
import { useRef, useState, type ChangeEvent } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_IMAGE_BYTES,
  PROJECT_IMAGE_BUCKET,
  buildImageObjectPath,
} from "@/lib/supabase/storage";

/**
 * Turns Supabase Storage's terse errors into something an admin can act
 * on. The two that actually happen in practice are a missing bucket and
 * a missing/incorrect upload policy — both are one-time setup steps, not
 * something wrong with the file being uploaded.
 */
function describeUploadError(message: string): string {
  const text = message.toLowerCase();

  if (text.includes("bucket not found")) {
    return `The "${PROJECT_IMAGE_BUCKET}" storage bucket doesn't exist yet. Run supabase/schema.sql in the Supabase SQL Editor, or create the bucket under Storage → New bucket (public).`;
  }

  if (
    text.includes("row-level security") ||
    text.includes("violates") ||
    text.includes("unauthorized")
  ) {
    return `Storage rejected the upload — the "${PROJECT_IMAGE_BUCKET}" bucket is missing its upload policy for signed-in users. See the storage section of supabase/schema.sql.`;
  }

  return `Upload failed: ${message}`;
}

/**
 * Image picker for the project form.
 *
 * The file goes straight from the browser to Supabase Storage using the
 * admin's own session — not through a Server Action, which would cap the
 * upload at Next's 1 MB request-body limit. Only the resulting public URL
 * is submitted with the form, in a hidden input.
 */
export function ImageUploadField({
  name = "image",
  defaultValue = "",
}: {
  name?: string;
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showManual, setShowManual] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);

    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      setError("Please choose a JPG, PNG, WebP or AVIF image.");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_IMAGE_BYTES) {
      setError(
        `That image is ${(file.size / 1024 / 1024).toFixed(1)} MB — the limit is 5 MB. Please resize it and try again.`,
      );
      e.target.value = "";
      return;
    }

    setUploading(true);

    const supabase = createClient();
    const objectPath = buildImageObjectPath(file.name);

    const { error: uploadError } = await supabase.storage
      .from(PROJECT_IMAGE_BUCKET)
      .upload(objectPath, file, { cacheControl: "31536000", upsert: false });

    if (uploadError) {
      setUploading(false);
      setError(describeUploadError(uploadError.message));
      e.target.value = "";
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from(PROJECT_IMAGE_BUCKET).getPublicUrl(objectPath);

    setValue(publicUrl);
    setUploading(false);
    e.target.value = "";
  };

  const clear = () => {
    setValue("");
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Submitted value — a public Storage URL, or a /images/... path */}
      <input type="hidden" name={name} value={value} />

      <div className="flex items-start gap-4">
        {/* Preview */}
        <div className="relative w-32 h-24 shrink-0 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
          {value ? (
            <Image
              src={value}
              alt="Project image preview"
              fill
              unoptimized
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400 text-center px-2">
              No image yet
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 min-w-0">
          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPTED_IMAGE_TYPES.join(",")}
            onChange={handleFile}
            disabled={uploading}
            className="block w-full text-sm text-gray-500
              file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0
              file:text-sm file:font-bold file:bg-[#1a1a2e] file:text-white
              hover:file:bg-[#ffc631] hover:file:text-[#1a1a2e]
              file:cursor-pointer file:transition-colors
              disabled:opacity-60"
          />

          <p className="text-xs text-gray-400">
            {uploading
              ? "Uploading…"
              : "JPG, PNG, WebP or AVIF — up to 5 MB. Landscape photos look best."}
          </p>

          {value && !uploading && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={clear}
                className="text-xs font-semibold text-red-500 hover:text-red-700 transition-colors"
              >
                Remove image
              </button>
              <span className="text-xs text-gray-300">·</span>
              <button
                type="button"
                onClick={() => setShowManual((s) => !s)}
                className="text-xs font-semibold text-gray-400 hover:text-[#1a1a2e] transition-colors"
              >
                {showManual ? "Hide path" : "Enter a path instead"}
              </button>
            </div>
          )}

          {!value && !uploading && (
            <button
              type="button"
              onClick={() => setShowManual((s) => !s)}
              className="self-start text-xs font-semibold text-gray-400 hover:text-[#1a1a2e] transition-colors"
            >
              {showManual ? "Hide path" : "Enter a path instead"}
            </button>
          )}
        </div>
      </div>

      {error && (
        <p className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      {/* Escape hatch for the images already shipped in /public/images */}
      {showManual && (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="/images/projects/bridge.jpg"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#ffc631] transition-colors bg-white"
        />
      )}
    </div>
  );
}
