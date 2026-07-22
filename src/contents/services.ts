import { ControlIcon, DesignIcon, ProjectCheckIcon } from "@/icons";

// Types
export interface Stat {
    suffix: string;
    value: number;
    label: string;
    separator?: boolean;
}

export interface Achievement {
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface ServicesContent {
    subtitle: string;
    title: string;
    highlight: string;
    description: string;
}

export interface ExpertsContent {
    subtitle: string;
    title: string;
    highlight: string;
    description: string;
    imageAlt: string;
    imageFallback: string;
}

// Data
export const STATS: Stat[] = [
    { suffix: "+", value: 31, label: "Years of Combined\nIndustry Experience" },
    {
        suffix: "+",
        value: 30,
        label: "Completed Projects\nSuccessfully Delivered",
    },
    { suffix: "+", value: 13, label: "Expert Team Members\nAcross Disciplines" },
    {
        suffix: "",
        value: 5,
        label: "Years of Excellence\nSince Establishment",
        separator: true,
    },
];

export const SERVICES_CONTENT: ServicesContent = {
    subtitle: "Our Impact",
    title: "Delivering Engineering Excellence Across Nepal",
    highlight: "Engineering",
    description:
        "Since our establishment in 2074 BS, Kallisto Engineering Consultancy has been committed to providing professional services across transportation, hydropower, water supply, environmental studies, and infrastructure development. Our multidisciplinary team delivers innovative solutions that meet national and international standards.",
};

export const ACHIEVEMENTS: Achievement[] = [
    {
        label: "30+ Successfully Completed Projects",
        icon: ProjectCheckIcon,
    },
    {
        label: "Expertise in EIA, IEE & Environmental Studies",
        icon: DesignIcon,
    },
    {
        label: "Licensed Professional Engineers & Registered Surveyors",
        icon: ControlIcon,
    },
];

export const EXPERTS_CONTENT: ExpertsContent = {
    subtitle: "The choice is yours, time is ours",
    title: "Solving Problems With the Help of Experts",
    highlight: "Experts",
    description:
        "Our multidisciplinary team at Kallisto Engineering Consultancy consists of licensed professional engineers, registered surveyors, environmentalists, sociologists, and GIS experts. With combined experience spanning decades, we deliver practical, innovative, and sustainable solutions across all engineering sectors.",
    imageAlt: "Kallisto Engineering Experts at work",
    imageFallback: "/fallback.jpg",
};

export const SERVICES = [
  {
    n: "01",
    title: "Transportation",
    desc: "Comprehensive transportation engineering services including planning, feasibility studies, detailed design, traffic engineering, construction supervision, and project management.",
    href: "/services/transportation",
  },
  {
    n: "02",
    title: "Highways & Roads",
    desc: "Planning, survey, geometric design, pavement engineering, rehabilitation, upgrading, and construction supervision for highways, rural roads, and urban road networks.",
    href: "/services/highways-roads",
  },
  {
    n: "03",
    title: "Bridges",
    desc: "Feasibility studies, structural analysis and design, inspection, rehabilitation, and construction supervision for reinforced concrete, steel, suspension, and composite bridges.",
    href: "/services/bridges",
  },
  {
    n: "04",
    title: "Airports",
    desc: "Airport planning, runway and taxiway design, terminal infrastructure, drainage systems, and aviation support facilities meeting international standards.",
    href: "/services/airports",
  },
  {
    n: "05",
    title: "Railways & Metro",
    desc: "Engineering solutions for railway and metro projects including route planning, alignment studies, station planning, structural design, and infrastructure development.",
    href: "/services/railways-metro",
  },
  {
    n: "06",
    title: "Hydropower & Energy",
    desc: "Feasibility studies, engineering design, environmental assessments, construction supervision, and project management for hydropower and renewable energy projects.",
    href: "/services/hydropower-energy",
  },
  {
    n: "07",
    title: "Water Supply & Sanitation",
    desc: "Water source investigations, treatment systems, transmission and distribution networks, sewerage systems, and sanitation infrastructure.",
    href: "/services/water-supply-sanitation",
  },
  {
    n: "08",
    title: "Wastewater & Solid Waste Management",
    desc: "Sustainable wastewater treatment, sewerage systems, drainage, landfill design, recycling facilities, and integrated solid waste management solutions.",
    href: "/services/wastewater-solid-waste",
  },
  {
    n: "09",
    title: "Urban Planning & Infrastructure",
    desc: "Land use planning, master plans, GIS-based planning, smart city concepts, and sustainable urban infrastructure development.",
    href: "/services/urban-planning-infrastructure",
  },
  {
    n: "10",
    title: "Building & Architecture",
    desc: "Architectural design, structural engineering, interior planning, BIM, and construction supervision for residential, commercial, institutional, and industrial buildings.",
    href: "/services/building-architecture",
  },
  {
    n: "11",
    title: "Water Resources & Natural Resources",
    desc: "Integrated water resources management, river basin planning, irrigation systems, watershed management, and climate resilience solutions.",
    href: "/services/water-resources",
  },
  {
    n: "12",
    title: "Irrigation",
    desc: "Feasibility studies, hydraulic design, canal systems, lift irrigation, command area development, and modernization of irrigation infrastructure.",
    href: "/services/irrigation",
  },
  {
    n: "13",
    title: "Agriculture",
    desc: "Agricultural infrastructure, irrigation planning, rural development, climate-smart agriculture, and sustainable resource management.",
    href: "/services/agriculture",
  },
  {
    n: "14",
    title: "River Basin Planning & Development",
    desc: "River basin studies, watershed management, river training works, sediment management, and integrated water resource development planning.",
    href: "/services/river-basin-planning",
  },
  {
    n: "15",
    title: "Flood Forecasting & Management",
    desc: "Flood risk assessment, hydrological and hydraulic modeling, early warning systems, disaster risk reduction, and climate resilience strategies.",
    href: "/services/flood-forecasting-management",
  },
];