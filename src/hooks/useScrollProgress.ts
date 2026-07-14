"use client";

import { useEffect, useState } from "react";

// How long (ms) after the last scroll event before we consider the
// page "idle" again.
const SCROLL_IDLE_DELAY_MS = 250;

/**
 * Tracks how far the page has been scrolled as a value between 0 and 1,
 * plus whether the page is actively being scrolled right now.
 *
 * progress: 0 -> top of the page, 1 -> bottom of the page.
 * isScrolling: true while scroll events are actively firing, flips back
 * to false SCROLL_IDLE_DELAY_MS after the last one.
 *
 * Uses requestAnimationFrame to throttle the progress calculation so it
 * stays smooth even on long pages with frequent scroll events.
 */
export function useScrollProgress() {
    const [progress, setProgress] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let frame = 0;
        let idleTimeout: ReturnType<typeof setTimeout>;

        const calculate = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const next = docHeight > 0 ? scrollTop / docHeight : 0;
            setProgress(Math.min(1, Math.max(0, next)));
        };

        const onScroll = () => {
            setIsScrolling(true);
            clearTimeout(idleTimeout);
            idleTimeout = setTimeout(
                () => setIsScrolling(false),
                SCROLL_IDLE_DELAY_MS
            );

            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(calculate);
        };

        calculate();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            cancelAnimationFrame(frame);
            clearTimeout(idleTimeout);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return { progress, isScrolling };
}