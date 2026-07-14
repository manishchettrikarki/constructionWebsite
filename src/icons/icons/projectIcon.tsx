import type { SVGProps } from "react";

export function ProjectIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="10" y="10" width="40" height="40" rx="4" />
      <path d="M20 20H40M20 30H40M20 40H32" />
    </svg>
  );
}