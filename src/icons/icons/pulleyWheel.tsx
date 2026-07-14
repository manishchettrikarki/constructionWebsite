import type { SVGProps } from "react";

/**
 * Pulley wheel with a ceiling mount bracket and the rope wrapped over
 * the top of the wheel, used by the scroll lift animation. Ends in two
 * short tail stubs (at x=16 and x=32 of the 48-wide viewBox) that the
 * external rope strands should line up with.
 */
export function PulleyWheelIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 44"
            id="pulley-wheel"
            {...props}
        >
            {/* ceiling mount */}
            <rect x="8" y="0" width="32" height="3" rx="1.5" fill="#4b3d2f" />
            <rect x="21" y="3" width="6" height="5" fill="#6b5a45" />

            {/* pulley housing */}
            <rect
                x="10"
                y="8"
                width="28"
                height="24"
                rx="6"
                fill="#8a7256"
                stroke="#4b3d2f"
                strokeWidth="1.5"
            />

            {/* rope wrapping over the top of the wheel */}
            <path
                d="M16 17 A9 9 0 0 1 32 17"
                fill="none"
                stroke="#7a6448"
                strokeWidth="2.4"
                strokeLinecap="round"
            />
            {/* rope tail stubs — external rope strands should align to x=16 / x=32 */}
            <path
                d="M16 17V44M32 17V44"
                stroke="#7a6448"
                strokeWidth="2.4"
                strokeLinecap="round"
            />

            {/* wheel */}
            <circle
                cx="24"
                cy="20"
                r="9"
                fill="#d8c9a8"
                stroke="#4b3d2f"
                strokeWidth="1.5"
            />
            <circle cx="24" cy="20" r="3" fill="#4b3d2f" />
        </svg>
    );
}