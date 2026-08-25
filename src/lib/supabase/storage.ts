/** Supabase Storage bucket that holds admin-uploaded project photos. */
export const PROJECT_IMAGE_BUCKET = "project-images";

/** Reject anything that isn't a real image, or is too big to serve well. */
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5 MB
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
];

const PUBLIC_URL_MARKER = `/storage/v1/object/public/${PROJECT_IMAGE_BUCKET}/`;

/**
 * Given the value stored in projects.image, returns the object path inside
 * our bucket — or null when the value is a static /images/... path or an
 * image hosted somewhere else, i.e. something we must not delete.
 */
export function storagePathFromPublicUrl(value: string): string | null {
  const at = value.indexOf(PUBLIC_URL_MARKER);
  if (at === -1) return null;

  const path = value.slice(at + PUBLIC_URL_MARKER.length).split("?")[0];
  if (!path) return null;

  try {
    return decodeURIComponent(path);
  } catch {
    return path;
  }
}

/** Builds a collision-proof object key for a freshly uploaded file. */
export function buildImageObjectPath(fileName: string): string {
  const ext = (fileName.split(".").pop() || "jpg")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 5);

  return `projects/${crypto.randomUUID()}.${ext || "jpg"}`;
}
