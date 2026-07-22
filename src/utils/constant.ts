import {
  BuildingIcon,
  HammerIcon,
  SheldCheckIcon,
  WorkforceIcon,
  WrenchIcon,
  ExperienceIcon,
  ExcellenceIcon,
  InnovationIcon,
  PartnershipIcon,
  ProjectIcon,
} from "@/icons";

// 
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
  { label: "Contact", href: "/contact" },
];

// Services List
export const services: IServieceListItem[] = [
  {
    number: "01",
    title: "Engineering Consultancy",
    description:
      "Comprehensive engineering consultancy services covering planning, feasibility studies, detailed design, and project supervision.",
  },
  {
    number: "02",
    title: "Transportation Engineering",
    description:
      "Engineering solutions for highways, roads, bridges, airports, and transportation infrastructure.",
  },
  {
    number: "03",
    title: "Hydropower & Energy",
    description:
      "Feasibility studies, engineering design, and technical consulting for hydropower and renewable energy projects.",
  },
  {
    number: "04",
    title: "Water Supply & Urban Development",
    description:
      "Planning, design, and management of water supply systems, sanitation, and urban infrastructure projects.",
  },
  {
    number: "05",
    title: "Environmental Services",
    description:
      "EIA, IEE, environmental assessments, geological investigations, and sustainable development consulting.",
  },
  {
    number: "06",
    title: "Survey, GIS & Project Management",
    description:
      "DGPS surveys, GIS mapping, topographic surveys, project management, monitoring, and capacity building services.",
  },
];

// Projects List
export const projects: IProjectListItem[] = [
  {
    img: null,
    title: "Kathmandu-Terai/Madhesh Expressway",
    loc: "Kathmandu, Nepal",
  },
  {
    img: null,
    title: "Dudhuwa Khola Bridge DPR",
    loc: "Banke, Nepal",
  },
  {
    img: null,
    title: "Central Infectious Disease Hospital",
    loc: "Teku, Kathmandu",
  },
  {
    img: null,
    title: "Pokhara Wastewater Master Plan",
    loc: "Pokhara Metropolitan City",
  },
];

// Features List
export const features: IFeatureListItem[] = [
  {
    title: "Experienced Engineers",
    description:
      "A multidisciplinary team of engineers, architects, surveyors, environmental experts, and GIS professionals.",
    icon: WorkforceIcon,
  },
  {
    title: "Integrated Engineering Solutions",
    description:
      "From feasibility studies to design, supervision, and project management under one consultancy.",
    icon: BuildingIcon,
  },
  {
    title: "Quality & Professional Ethics",
    description:
      "Delivering engineering solutions that meet national and international standards with integrity.",
    icon: SheldCheckIcon,
  },
  {
    title: "Advanced Survey & GIS",
    description:
      "Modern DGPS surveys, GIS mapping, topographic surveys, and digital engineering solutions.",
    icon: HammerIcon,
  },
  {
    title: "Sustainable Development",
    description:
      "Engineering projects focused on environmental responsibility and long-term community development.",
    icon: WrenchIcon,
  },
];

// FAQ list
export const faqs: IFAQItem[] = [
  {
    question: "What engineering services does Kallisto provide?",
    answer:
      "We provide planning, feasibility studies, engineering design, project supervision, GIS mapping, environmental assessments, and project management services.",
  },
  {
    question: "Which sectors do you specialize in?",
    answer:
      "Our expertise includes transportation, hydropower, water supply, sanitation, irrigation, urban development, buildings, environmental studies, and infrastructure planning.",
  },
  {
    question: "Do you provide Environmental Impact Assessment (EIA) services?",
    answer:
      "Yes. We conduct Environmental Impact Assessments (EIA), Initial Environmental Examinations (IEE), geological investigations, and environmental consulting.",
  },
  {
    question: "Do you work with government and international organizations?",
    answer:
      "Yes. Our clients include Government of Nepal agencies, municipalities, ADB, JICA, GIZ, and private sector organizations.",
  },
  {
    question: "Can you manage projects from survey to completion?",
    answer:
      "Absolutely. We offer complete project lifecycle support including survey, planning, design, supervision, monitoring, and project management.",
  },
];

// Gallery items
export const galleryItems = [
  "Kathmandu-Terai/Madhesh Expressway",
  "Dudhuwa Khola Bridge",
  "Central Infectious Disease Hospital",
  "Pokhara Wastewater Master Plan",
];

// Page Hero Content
export const PAGE_HEROES = {
  about: {
    subtitle: "Engineering Excellence",
    title: "About Us",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "About" }],
  },
  services: {
    subtitle: "Professional Engineering Services",
    title: "Services",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Services" }],
  },
  singleService: {
    subtitle: "Engineering Solutions",
    title: "Environmental Services",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Environmental Services" },
    ],
  },
  projects: {
    subtitle: "Engineering Projects",
    title: "Our Projects",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Projects" }],
  },
  contact: {
    subtitle: "Let's Build Together",
    title: "Contact Us",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Contact" }],
  },
};

