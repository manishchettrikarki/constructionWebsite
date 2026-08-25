import type { NextConfig } from "next";

/**
 * Photos uploaded through the admin panel live in Supabase Storage, so
 * next/image has to be told that host is allowed. Derived from the same
 * env var the Supabase clients use, so it follows the project automatically.
 */
const supabaseHostname = (() => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) return null;
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
})();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      ...(supabaseHostname
        ? ([
            {
              protocol: "https" as const,
              hostname: supabaseHostname,
              port: "",
              pathname: "/storage/v1/object/public/**",
            },
          ])
        : []),
    ],
  },
};

export default nextConfig;
