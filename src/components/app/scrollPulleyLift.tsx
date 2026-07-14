"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { LiftPersonIcon, LiftWeightIcon, PulleyWheelIcon } from "@/icons";

// Rendered width (px) of the pulley icon. Its internal rope-tail stubs
// sit at x=16 / x=32 of a 48-wide, 44-tall viewBox — the numbers below
// are derived from that so the external rope lines up exactly with the
// tails drawn inside the icon, instead of floating apart from it.
const PULLEY_ICON_WIDTH = 30;
const PULLEY_ICON_HEIGHT = (PULLEY_ICON_WIDTH * 44) / 48;
const ROPE_OFFSET_PX = (PULLEY_ICON_WIDTH * 8) / 48; // distance of each strand from center

// The "up" extreme is a fixed pixel clearance below the pulley — using
// px (not %) here guarantees the weight/worker can never climb past the
// pulley graphic, even on short viewports where a small percentage
// could resolve to fewer pixels than the pulley itself is tall.
const TOP_CLEARANCE_PX = PULLEY_ICON_HEIGHT + 8;

// The "down" extreme is a percentage of viewport height, leaving a
// margin from the very bottom of the screen.
const BOTTOM_PCT = 90;

// The weight visually "gets heavier" (bigger) the further down it
// travels, growing from WEIGHT_MIN_PX up to WEIGHT_MAX_PX.
const WEIGHT_MIN_PX = 13;
const WEIGHT_MAX_PX = 28;

const PERSON_WIDTH_PX = 24;

// Combines a px offset and a % offset into a single CSS calc() string.
const mixedOffset = (px: number, pct: number) => `calc(${px}px + ${pct}%)`;

/**
 * A small, fixed, always-visible pulley animation pinned to the right
 * edge of the viewport, sitting above every other page element.
 *
 * A rope wraps over a pulley mounted at the very top of the page. A
 * weight hangs on the left strand and a construction worker rides a
 * small guarded platform on the right strand. As the page is
 * scrolled, the weight descends — growing larger/heavier the lower it
 * gets — while the worker's platform is hoisted up toward the pulley,
 * exactly like a counterweighted lift. The worker's travel is clamped
 * with a fixed pixel clearance so it can never rise above the pulley.
 */
export function ScrollPulleyLift() {
    const progress = useScrollProgress();

    // Weight: starts just below the pulley (px-anchored), ends near the
    // bottom of the viewport (%-anchored).
    const weightPxPart = TOP_CLEARANCE_PX * (1 - progress);
    const weightPctPart = BOTTOM_PCT * progress;

    // Worker: starts near the bottom (%-anchored), ends just below the
    // pulley (px-anchored) — never able to overshoot past it.
    const personPxPart = TOP_CLEARANCE_PX * progress;
    const personPctPart = BOTTOM_PCT * (1 - progress);

    const weightSize = WEIGHT_MIN_PX + progress * (WEIGHT_MAX_PX - WEIGHT_MIN_PX);

    const weightTop = mixedOffset(weightPxPart, weightPctPart);
    const personTop = mixedOffset(personPxPart, personPctPart);

    const weightRopeHeight = mixedOffset(
        weightPxPart - PULLEY_ICON_HEIGHT,
        weightPctPart
    );
    const personRopeHeight = mixedOffset(
        personPxPart - PULLEY_ICON_HEIGHT,
        personPctPart
    );

    const leftStrand = `calc(50% - ${ROPE_OFFSET_PX}px)`;
    const rightStrand = `calc(50% + ${ROPE_OFFSET_PX}px)`;
    const ropeTop = `${PULLEY_ICON_HEIGHT}px`;

    return (
        <div
            aria-hidden="true"
            role="presentation"
            className="pointer-events-none select-none fixed top-0 right-1 h-screen w-7 sm:w-8 z-[999999]"
        >
            <div className="relative h-full w-full">
                {/* Pulley, mounted at the top — rope wrap is drawn into the icon itself */}
                <PulleyWheelIcon
                    className="absolute left-1/2 -translate-x-1/2 top-0 h-auto drop-shadow-md"
                    style={{ width: PULLEY_ICON_WIDTH }}
                />

                {/* Left strand — rope + counterweight */}
                <span
                    className="absolute w-[1.5px] -translate-x-1/2 bg-[repeating-linear-gradient(180deg,#8a7256_0px,#8a7256_3px,#6b5a45_3px,#6b5a45_6px)]"
                    style={{ left: leftStrand, top: ropeTop, height: weightRopeHeight }}
                />
                <LiftWeightIcon
                    className="absolute -translate-x-1/2 h-auto drop-shadow-md transition-[top,width,height] duration-100 ease-linear"
                    style={{ left: leftStrand, top: weightTop, width: weightSize }}
                />

                {/* Right strand — rope + construction worker on a lift platform */}
                <span
                    className="absolute w-[1.5px] -translate-x-1/2 bg-[repeating-linear-gradient(180deg,#8a7256_0px,#8a7256_3px,#6b5a45_3px,#6b5a45_6px)]"
                    style={{ left: rightStrand, top: ropeTop, height: personRopeHeight }}
                />
                <LiftPersonIcon
                    className="absolute -translate-x-1/2 h-auto drop-shadow-md transition-[top] duration-100 ease-linear"
                    style={{ left: rightStrand, top: personTop, width: PERSON_WIDTH_PX }}
                />
            </div>
        </div>
    );
}