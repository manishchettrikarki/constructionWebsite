"use client";

import { useEffect, useState } from "react";

/**
 * Tracks how far the page has been scrolled as a value between 0 and 1.
 * 0  -> top of the page
 * 1  -> bottom of the page
 *
 * Uses requestAnimationFrame to throttle updates so it stays smooth
 * even on long pages with frequent scroll events.
 */
export function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frame = 0;

        const calculate = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const next = docHeight > 0 ? scrollTop / docHeight : 0;
            setProgress(Math.min(1, Math.max(0, next)));
        };

        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(calculate);
        };

        calculate();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return progress;
}