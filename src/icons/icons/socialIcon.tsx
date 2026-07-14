import type { SVGProps } from "react";

export function SocialIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="12" cy="12" r="9" />
        </svg>
    );
}