"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ConstructionScrollBar() {
    const loadRef = useRef<HTMLDivElement>(null);
    const workerRef = useRef<HTMLDivElement>(null);
    const leftRopeRef = useRef<HTMLDivElement>(null);
    const rightRopeRef = useRef<HTMLDivElement>(null);
    const pulleyRef = useRef<HTMLDivElement>(null);


    useEffect(() => {

        const handleScroll = () => {

            const maxScroll =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const progress =
                window.scrollY / maxScroll;


            const distance =
                window.innerHeight - 220;


            gsap.to(loadRef.current, {
                y: progress * distance,
                duration: 0.3,
            });


            gsap.to(workerRef.current, {
                y: -(progress * distance),
                duration: 0.3,
            });


            gsap.to(leftRopeRef.current, {
                height: 120 + progress * distance,
                duration: 0.3,
            });


            gsap.to(rightRopeRef.current, {
                height: 120 - progress * 80,
                duration: 0.3,
            });


            gsap.to(pulleyRef.current, {
                rotate: progress * 360,
                duration: 0.3,
            });

        };


        window.addEventListener(
            "scroll",
            handleScroll
        );


        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };

    }, []);



    return (

        <div
            className="
        fixed
        right-4
        top-0
        h-screen
        w-[55px]
        z-[9999]
        pointer-events-none
      "
        >

            <div className="relative h-full w-full">


                {/* Pulley */}
                <div
                    ref={pulleyRef}
                    className="
            absolute
            top-6
            left-1/2
            -translate-x-1/2
            w-10
            h-10
            rounded-full
            border-[5px]
            border-neutral-700
            bg-white
          "
                >

                </div>



                {/* Left rope */}
                <div
                    ref={leftRopeRef}
                    className="
            absolute
            top-[46px]
            left-[14px]
            w-[3px]
            h-[120px]
            bg-yellow-900
          "
                />



                {/* Right rope */}
                <div
                    ref={rightRopeRef}
                    className="
            absolute
            top-[46px]
            right-[14px]
            w-[3px]
            h-[120px]
            bg-yellow-900
          "
                />



                {/* Weight */}
                <div
                    ref={loadRef}
                    className="
            absolute
            top-[160px]
            left-0
            w-8
            h-8
            bg-gray-600
            rounded
            shadow
          "
                />



                {/* Worker + platform */}
                <div
                    ref={workerRef}
                    className="
            absolute
            top-[160px]
            right-0
            w-10
          "
                >

                    {/* Platform */}
                    <div
                        className="
              w-12
              h-2
              bg-black
              -ml-1
            "
                    />

                    {/* Head */}
                    <div
                        className="
              w-5
              h-5
              rounded-full
              bg-orange-300
              mx-auto
            "
                    />

                    {/* Body */}
                    <div
                        className="
              w-7
              h-8
              bg-blue-600
              mx-auto
            "
                    />

                </div>


            </div>

        </div>

    );
}