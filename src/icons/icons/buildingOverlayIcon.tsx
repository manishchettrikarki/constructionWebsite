import type { SVGProps } from "react";

export function BuildingOverlayIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={0.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M8 11h2v5H8zm6 0h2v5h-2z" />
        </svg>
    );
}