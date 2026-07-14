import type { SVGProps } from "react";

export function ExperienceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="22" cy="22" r="6" />
      <circle cx="38" cy="22" r="6" />
      <path d="M14 42C14 36 18 32 22 32C26 32 30 36 30 42" />
      <path d="M30 42C30 36 34 32 38 32C42 32 46 36 46 42" />
    </svg>
  );
}