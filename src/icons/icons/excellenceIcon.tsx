import type { SVGProps } from "react";

export function ExcellenceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="30" cy="30" r="18" />
      <path d="M22 30L28 36L38 24" />
    </svg>
  );
}