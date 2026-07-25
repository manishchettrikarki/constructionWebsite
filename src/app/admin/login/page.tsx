"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { footerContent } from "@/contents/footer";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectedFrom = searchParams.get("redirectedFrom") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      setError("Incorrect email or password. Please try again.");
      return;
    }

    router.push(redirectedFrom);
    router.refresh();
  };

  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-8">
        <div className="w-14 h-14 mx-auto rounded-full bg-[#ffc631] text-[#1a1a2e] font-black text-lg flex items-center justify-center mb-4">
          <img
            src={footerContent.brand.logo}
            alt={footerContent.brand.name}
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-white text-xl font-extrabold">Admin Login</h1>
        <p className="text-gray-400 text-sm mt-1">
          Kallisto Engineering Consultancy Pvt. Ltd.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-xl"
      >
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#ffc631] transition-colors"
            placeholder="you@kallistoengineering.com"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#ffc631] transition-colors"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 bg-[#1a1a2e] hover:bg-[#ffc631] hover:text-[#1a1a2e] text-white font-bold py-3 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>

      <p className="text-center text-gray-500 text-xs mt-6">
        Admin accounts are created manually in the Supabase Dashboard —
        there is no public sign-up.
      </p>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a2e] px-4">
      <Suspense fallback={<LoginFormFallback />}>
        <LoginForm />
      </Suspense>
    </div>
  );
}

function LoginFormFallback() {
  return (
    <div className="w-full max-w-sm animate-pulse">
      <div className="text-center mb-8">
        <div className="w-14 h-14 mx-auto rounded-full bg-white/10 mb-4" />
        <div className="h-5 w-32 mx-auto rounded bg-white/10 mb-2" />
        <div className="h-3 w-48 mx-auto rounded bg-white/10" />
      </div>
      <div className="bg-white/5 rounded-2xl p-8 h-64" />
    </div>
  );
}