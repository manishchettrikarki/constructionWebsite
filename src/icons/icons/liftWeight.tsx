import type { SVGProps } from "react";

/**
 * A kettlebell-style counterweight hanging on the left side of the
 * rope, used by the scroll lift animation. Rendered at a size driven
 * by scroll progress by the parent (via width/height style), so it
 * visually gets "heavier" the further the page is scrolled.
 */
export function LiftWeightIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 34"
            id="lift-weight"
            {...props}
        >
            {/* handle */}
            <path
                d="M9 11a7 7 0 0 1 14 0"
                fill="none"
                stroke="#2b2b2b"
                strokeWidth="3.2"
                strokeLinecap="round"
            />

            {/* body */}
            <ellipse
                cx="16"
                cy="23"
                rx="12"
                ry="10.5"
                fill="#2b2b2b"
                stroke="#111"
                strokeWidth="1"
            />

            {/* shine */}
            <ellipse cx="11.5" cy="18.5" rx="2.6" ry="1.8" fill="#5a5a5a" opacity="0.7" />

            {/* painted weight band */}
            <rect x="5.5" y="25" width="21" height="4" rx="1.4" fill="#c0392b" />
        </svg>
    );
}