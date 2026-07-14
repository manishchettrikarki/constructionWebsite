import type { SVGProps } from "react";

/**
 * A vector construction worker — hard hat, face, hi-vis vest with
 * reflective bands, tool belt, trousers and boots — reaching up
 * toward the rope while riding a small guarded scaffold platform.
 * Used by the scroll lift animation.
 */
export function LiftPersonIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 112"
            id="lift-person"
            {...props}
        >
            {/* scaffold guard rail */}
            <rect x="4" y="90" width="52" height="2.4" fill="#4b3d2f" />
            <rect x="4" y="90" width="2.4" height="14" fill="#4b3d2f" />
            <rect x="53.6" y="90" width="2.4" height="14" fill="#4b3d2f" />

            {/* platform */}
            <rect
                x="0"
                y="104"
                width="60"
                height="7"
                rx="2"
                fill="#8a7256"
                stroke="#4b3d2f"
                strokeWidth="1.4"
            />

            {/* hard hat */}
            <path d="M16 19Q16 4 30 4Q44 4 44 19Z" fill="#ffcc33" stroke="#c99a1f" strokeWidth="1" />
            <ellipse cx="30" cy="19.5" rx="15" ry="3.2" fill="#e0ac1e" />
            <path d="M19 19Q30 23.5 41 19" fill="none" stroke="#c99a1f" strokeWidth="0.8" opacity="0.6" />

            {/* head */}
            <circle cx="30" cy="27" r="9" fill="#f2c29a" />
            <path d="M24 31Q30 35 36 31" fill="none" stroke="#d9a874" strokeWidth="1" opacity="0.5" />

            {/* neck */}
            <rect x="26" y="34" width="8" height="5" fill="#f2c29a" />

            {/* left arm — relaxed at the side */}
            <path d="M16 40Q10 47 11 57" fill="none" stroke="#ff7a1a" strokeWidth="9" strokeLinecap="round" />
            <circle cx="11" cy="59" r="4.4" fill="#f2c29a" />

            {/* right arm — reaching up toward the rope */}
            <path d="M44 40Q52 31 48 16" fill="none" stroke="#ff7a1a" strokeWidth="9" strokeLinecap="round" />
            <circle cx="48" cy="15" r="4.4" fill="#f2c29a" />

            {/* torso / hi-vis vest */}
            <path
                d="M14 40Q14 36 20 36L40 36Q46 36 46 40L44 70Q44 74 40 74L20 74Q16 74 16 70Z"
                fill="#ff7a1a"
                stroke="#e0640a"
                strokeWidth="1"
            />
            <path d="M26 36L30 42L34 36" fill="none" stroke="#2b2b2b" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M20 40L38 68" stroke="#e0640a" strokeWidth="1.4" opacity="0.55" strokeLinecap="round" />
            <rect x="16" y="47" width="28" height="4" fill="#fff6d8" />
            <rect x="16" y="58" width="28" height="4" fill="#fff6d8" />
            <rect x="19" y="65" width="8" height="6" rx="1.2" fill="#e0640a" opacity="0.55" />

            {/* tool belt */}
            <rect x="15" y="73" width="30" height="5" rx="2" fill="#2b2b2b" />
            <rect x="36" y="74.5" width="7" height="7" rx="1.4" fill="#4b3d2f" />

            {/* legs */}
            <path d="M19 78L17 100L27 100L27 78Z" fill="#22314f" />
            <path d="M33 78L33 100L43 100L41 78Z" fill="#22314f" />
            <path d="M20 82L20 98" stroke="#1a2540" strokeWidth="1" opacity="0.5" />
            <path d="M40 82L40 98" stroke="#1a2540" strokeWidth="1" opacity="0.5" />

            {/* boots */}
            <path d="M16 100Q16 104 20 104L27 104L27 100Z" fill="#1a1a1a" />
            <path d="M33 100L33 104L40 104Q44 104 44 100Z" fill="#1a1a1a" />
        </svg>
    );
}