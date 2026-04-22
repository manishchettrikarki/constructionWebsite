import {
  BuildingIcon,
  HammerIcon,
  SheldCheckIcon,
  WorkforceIcon,
  WrenchIcon,
} from "@/icons";
import {
  IFAQItem,
  IFeatureListItem,
  INavItemList,
  IProjectListItem,
  IServieceListItem,
} from "@/types/types";

// Navigation Items
export const navItems: INavItemList[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contacts", href: "/contact" },
];

// Services List
export const services: IServieceListItem[] = [
  {
    number: "01",
    title: "Process Engineering",
    description:
      "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
  },
  {
    number: "02",
    title: "Construction Services",
    description:
      "Donec adipiscing tristique risus nec feugiat in. Porttitor massa id neque aliquam vestibulum morbi",
  },
  {
    number: "03",
    title: "Civil Engineering",
    description:
      "Morbi tincidunt ornare massa eget egestas purus viverra blandit elementum cursus risus.",
  },
  {
    number: "04",
    title: "Electrical Engineering",
    description:
      "Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nam aliquam sem et tortor",
  },
  {
    number: "05",
    title: "Chemistry and Metallurgy",
    description:
      "Mollis nunc sed id semper. Sodales ut etiam sit amet nisl purus. Sed odio morbi quis commodo odio",
  },
  {
    number: "06",
    title: "Specialty Services",
    description:
      "Tellus elementum sagittis vitae et. Amet justo donec enim diam vulputate ut consequat id porta nibh",
  },
];

// Projects List
export const projects: IProjectListItem[] = [
  {
    img: null,
    title: "Jazzy Elite Construction Shopping",
    loc: "100 Sunrise Ct Hamel, Minnesota",
  },
  {
    img: null,
    title: "Fresh Concept Construction Renovation",
    loc: "Rocky Highway Port Juana",
  },
  {
    img: null,
    title: "Installation a Supply System",
    loc: "Wuckert Junctions Hermannberg",
  },
  {
    img: null,
    title: "Reconstruction of Old Factory Building",
    loc: "Stoltenberg Underpass Blockbury",
  },
];

// Features List
export const features: IFeatureListItem[] = [
  {
    title: "Structural Engineering",
    description:
      "Advanced structural solutions for residential and commercial projects across Kathmandu.",
    icon: BuildingIcon,
  },
  {
    title: "Construction Management",
    description:
      "Efficient planning and execution ensuring timely and cost-effective delivery.",
    icon: HammerIcon,
  },
  {
    title: "Quality Assurance",
    description:
      "Strict quality control aligned with Nepal building standards.",
    icon: SheldCheckIcon,
  },
  {
    title: "Skilled Workforce",
    description:
      "Experienced engineers and technicians dedicated to excellence.",
    icon: WorkforceIcon,
  },
  {
    title: "Maintenance & Support",
    description: "Reliable post-construction support and maintenance services.",
    icon: WrenchIcon,
  },
];

// FAQ list
export const faqs: IFAQItem[] = [
  {
    question: "Do you provide services outside Kathmandu?",
    answer:
      "Yes, XYZ Construction operates across Kathmandu Valley and extends services to major cities like Pokhara, Chitwan, and Butwal depending on project scale.",
  },
  {
    question: "What types of projects do you handle?",
    answer:
      "We specialize in residential buildings, commercial complexes, renovation works, and structural design projects tailored to Nepal’s building codes.",
  },
  {
    question: "How long does a typical house construction take?",
    answer:
      "A standard residential house in Kathmandu usually takes 8–14 months depending on design complexity, site conditions, and approvals.",
  },
  {
    question: "Do you assist with municipality approvals?",
    answer:
      "Yes, we handle all necessary approvals including Kathmandu Metropolitan permits, structural drawings, and compliance documentation.",
  },
  {
    question: "Can I get a cost estimate before starting?",
    answer:
      "Absolutely. We provide detailed cost estimation and BOQ (Bill of Quantities) after understanding your requirements and site conditions.",
  },
];

// Gallery items
export const galleryItems = [
  "Fresh Concept Construction Renovation",
  "Fresh Concept Construction Renovation",
  "Fresh Concept Construction Renovation",
  "Fresh Concept Construction Renovation",
];

// Page Hero Content
export const PAGE_HEROES = {
  about: {
    subtitle: "Building communities",
    title: "About",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "About" }],
  },
  services: {
    subtitle: "Building communities",
    title: "Services",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Services" }],
  },
  singleService: {
    subtitle: "Single service",
    title: "Electrical Engineering",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Electrical Engineering" },
    ],
  },
  projects: {
    subtitle: "Building communities",
    title: "Our Projects",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Our Projects" }],
  },
  contact: {
    subtitle: "Build relationships",
    title: "Contacts",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Contacts" }],
  },
};

// Service List
export const SERVICES = [
  {
    n: "01",
    title: "Process Engineering",
    desc: "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.",
    href: "/services/single-service",
  },
  {
    n: "02",
    title: "Construction Services",
    desc: "Donec adipiscing tristique risus nec feugiat in. Porttitor massa id neque aliquam vestibulum morbi.",
    href: "/services/single-service",
  },
  {
    n: "03",
    title: "Civil Engineering",
    desc: "Morbi tincidunt ornare massa eget egestas purus viverra blandit elementum cursus risus.",
    href: "/services/single-service",
  },
  {
    n: "04",
    title: "Electrical Engineering",
    desc: "Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nam aliquam sem et tortor.",
    href: "/services/single-service",
  },
  {
    n: "05",
    title: "Chemistry and Metallurgy",
    desc: "Mollis nunc sed id semper. Sodales ut etiam sit amet nisl purus. Sed odio morbi quis commodo odio.",
    href: "/services/single-service",
  },
  {
    n: "06",
    title: "Specialty Services",
    desc: "Tellus elementum sagittis vitae et. Amet justo donec enim diam vulputate ut consequat id porta nibh.",
    href: "/services/single-service",
  },
];
