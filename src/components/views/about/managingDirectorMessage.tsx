"use client";

import { Subtitle } from "@/components/reusable/subtitle";
import { MANAGING_DIRECTOR_MESSAGE } from "@/contents/aboutPage";

export function ManagingDirectorSection() {
    const { sectionTitle, subtitle, title, message, person } =
        MANAGING_DIRECTOR_MESSAGE;

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <div>
                        <Subtitle>{sectionTitle}</Subtitle>

                        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#1a1a2e]">
                            {title.normal}{" "}
                            <span className="text-[#ffc631]">{title.highlight}</span>
                        </h2>

                        <p className="mt-2 text-sm font-semibold text-[#ffc631] uppercase tracking-wider">
                            {subtitle}
                        </p>

                        <div className="mt-8 space-y-6 text-gray-600 leading-8">
                            {message.map((paragraph: string) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-10">
                            {/* <img
                                src={person.signature}
                                alt={person.name}
                                className="h-12 object-contain"
                            /> */}

                            <h3 className="mt-4 text-xl font-bold text-[#1a1a2e]">
                                {person.name}
                            </h3>

                            <p className="text-[#ffc631] font-medium">
                                {person.designation}
                            </p>

                            <p className="text-gray-500">
                                {person.company}
                            </p>
                        </div>
                    </div>

                    {/* Right */}
                    <div>
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src={person.image}
                                alt={person.alt}
                                className="w-full h-[650px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}