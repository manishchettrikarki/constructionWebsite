import { Subtitle } from "@/components/reusable/subtitle";
import { TEAM_MEMBERS } from "@/contents/aboutPage";


export function AboutTeamSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-14">
                    <Subtitle>Our team</Subtitle>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
                        Meet the <span className="text-[#ffc631]">Professionals</span>{" "}
                        Behind Every Project
                    </h2>
                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        A 14-member multidisciplinary team of licensed engineers,
                        registered surveyors, sociologists, environmental experts and GIS
                        specialists, working together across every stage of a project.
                    </p>
                </div>

                {/* Team grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {TEAM_MEMBERS.map((member) => (
                        <div
                            key={member.name}
                            className="bg-gray-50 border border-gray-100 hover:border-[#ffc631]/40 hover:shadow-md rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300"
                        >
                            {/* <div className="w-16 h-16 rounded-full bg-[#1a1a2e] text-[#ffc631] flex items-center justify-center font-bold text-lg shrink-0">
                                {getInitials(member.name)}
                            </div> */}

                            <div>
                                <p className="text-[#1a1a2e] font-bold text-sm leading-snug">
                                    {member.name}
                                </p>
                                <p className="text-[#ffc631] text-xs font-semibold mt-1">
                                    {member.position}
                                </p>
                            </div>

                            <div className="w-full pt-3 border-t border-gray-200 flex flex-col gap-1">
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    {member.qualification}
                                </p>
                                <p className="text-gray-400 text-xs">
                                    {member.experience} experience
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}