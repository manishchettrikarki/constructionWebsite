import { Subtitle } from "@/components/reusable/subtitle";
import { ArrowLink } from "@/components/reusable/arrowLink";

const services = [
  {
    n: "01",
    title: "Process Engineering",
    desc: "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.",
  },
  {
    n: "02",
    title: "Construction Services",
    desc: "Donec adipiscing tristique risus nec feugiat in. Porttitor massa id neque aliquam vestibulum morbi.",
  },
  {
    n: "03",
    title: "Civil Engineering",
    desc: "Morbi tincidunt ornare massa eget egestas purus viverra blandit elementum cursus risus.",
  },
  {
    n: "04",
    title: "Electrical Engineering",
    desc: "Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nam aliquam sem et tortor.",
  },
  {
    n: "05",
    title: "Chemistry and Metallurgy",
    desc: "Mollis nunc sed id semper. Sodales ut etiam sit amet nisl purus. Sed odio morbi quis commodo odio.",
  },
  {
    n: "06",
    title: "Specialty Services",
    desc: "Tellus elementum sagittis vitae et. Amet justo donec enim diam vulputate ut consequat id porta nibh.",
  },
];

export function ServicesListSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <Subtitle>What we do</Subtitle>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
            Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-gray-100">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 border-b border-r border-gray-100 group hover:bg-[#1a1a2e] transition-colors duration-300"
            >
              <span className="text-5xl font-extrabold text-gray-100 group-hover:text-white/10 transition-colors select-none">
                {s.n}
              </span>
              <h3 className="text-lg font-bold text-[#1a1a2e] group-hover:text-white mt-3 mb-3 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed mb-5 transition-colors">
                {s.desc}
              </p>
              <ArrowLink href="/services/single-service">Details</ArrowLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
