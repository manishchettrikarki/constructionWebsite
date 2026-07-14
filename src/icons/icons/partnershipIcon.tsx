import type { SVGProps } from "react";

export function PartnershipIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 30L25 37L42 20" />
      <path d="M10 30C10 19 19 10 30 10C41 10 50 19 50 30C50 41 41 50 30 50C19 50 10 41 10 30Z" />
    </svg>
  );
}