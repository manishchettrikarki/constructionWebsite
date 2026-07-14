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