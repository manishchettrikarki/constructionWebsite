export type ProjectCategory =
    | "Environmental Studies"
    | "Roads & Bridges"
    | "Water Resources"
    | "GIS Mapping"
    | "Buildings & Infrastructure"
    | "International Projects";

export interface Project {
    title: string;
    location: string;
    excerpt: string;
    img: string;
    href: string;
    category: ProjectCategory;
}

export const PROJECTS: Project[] = [
    {
        title: "Kathmandu-Terai/Madhesh Expressway",
        location: "Kathmandu, Nepal",
        excerpt:
            "DGPS Survey and Detail Topographic Survey of the intersection area for Nepal's major expressway project, executed for the Government of Nepal and Nepalese Army.",
        img: "/images/projects/terai-madhesh-road.jpg",
        href: "/projects/single-project",
        category: "Roads & Bridges",
    },
    {
        title: "Rapti and Duduwa River Sand & Gravel Collection",
        location: "Dudhuvu Rural Municipality, Nepal",
        excerpt:
            "Initial Environment Examination (IEE) and Geological Investigation for collection of Sand and Gravel from Rapti and Duduwa River.",
        img: "/images/projects/construction-material.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Dudhuwa Khola Bridge (70m)",
        location: "Dudhuvu Rural Municipality, Nepal",
        excerpt:
            "Feasibility Study, Detailed Engineering Survey, Geological Investigation, Hydrological Analysis, and Detailed Design with Cost Estimation for the 70m bridge.",
        img: "/images/projects/bridge.jpg",
        href: "/projects/single-project",
        category: "Roads & Bridges",
    },
    {
        title: "SASEC Road Improvement Project",
        location: "Butwal-Jitpur Section, Nepal",
        excerpt:
            "Detail Topographic Survey and Geological Investigation of different bridges for the ADB-funded SASEC Road Improvement Project (50 km section).",
        img: "/images/projects/road-improvement.jpg",
        href: "/projects/single-project",
        category: "Roads & Bridges",
    },
    {
        title: "Hotel Jungle Vista - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) for Hotel Jungle Vista, conducted for the Regional Hotel Association Nepal, Sauraha.",
        img: "/images/projects/hotel-jungle-vista.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Eden Jungle Resort - IEE",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Initial Environment Examination (IEE) of Eden Jungle Resort for the Regional Hotel Association Nepal.",
        img: "/images/projects/eden-resort.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Chitwan Forest Resort - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) of Chitwan Forest Resort for the Regional Hotel Association Nepal.",
        img: "/images/projects/chitwan-resort.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Chitwan Park Cottage - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) of Chitwan Park Cottage for the Regional Hotel Association Nepal.",
        img: "/images/projects/park-cottage.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Wild Adventure Resort - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) of Wild Adventure Resort for the Regional Hotel Association Nepal.",
        img: "/images/projects/wild-adventure.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Safari Park Hotel and Lodge - IEE",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Initial Environment Examination (IEE) of Safari Park Hotel and Lodge for the Regional Hotel Association Nepal.",
        img: "/images/projects/park-safari.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Hotel Hermitage - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) of Hotel Hermitage for the Regional Hotel Association Nepal.",
        img: "/images/projects/hermitage.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Evergreen Eco-Lodge - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) of Evergreen Eco-Lodge and Restaurant for the Regional Hotel Association Nepal.",
        img: "/images/projects/eco-lodge.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Hotel Royal Safari - IEE",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Initial Environment Examination (IEE) of Hotel Royal Safari for the Regional Hotel Association Nepal.",
        img: "/images/projects/royal-safari.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Hotel Rainforest - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) of Hotel Rainforest for the Regional Hotel Association Nepal. (Ongoing)",
        img: "/images/projects/rainforest.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Chitwan Mid Town Resort - IEE",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Initial Environment Examination (IEE) of Chitwan Mid Town Resort Pvt. Ltd. (Ongoing)",
        img: "/images/projects/midtown.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "GIS Mapping - Nalinchowk Feeder",
        location: "Nepal",
        excerpt:
            "GIS mapping and Consumer Indexing for Nalinchowk Feeder, conducted for GIZ Nepal. (Ongoing)",
        img: "/images/projects/nalinchowk.jpg",
        href: "/projects/single-project",
        category: "GIS Mapping",
    },
    {
        title: "GIS Mapping - Nagarkot Feeder",
        location: "Nepal",
        excerpt:
            "GIS mapping and Consumer Indexing for Nagarkot Feeder, conducted for GIZ Nepal. (Ongoing)",
        img: "/images/projects/nagarkot.jpg",
        href: "/projects/single-project",
        category: "GIS Mapping",
    },
    {
        title: "Gobardhan Dam Masterplan",
        location: "Narainapur, Banke, Nepal",
        excerpt:
            "Detailed Engineering Survey, Design and Detailed Report Preparation of Gobardhan Dham (0.95 Ha) for the Government of Nepal.",
        img: "/images/projects/gobardhan.jpg",
        href: "/projects/single-project",
        category: "Buildings & Infrastructure",
    },
    {
        title: "Sundarmunda Marga Road Project",
        location: "Narainapur, Banke, Nepal",
        excerpt:
            "Detailed Engineering Survey, Design and Detailed Report Preparation of Sundarmunda Marga (5.3 Km) for the Government of Nepal.",
        img: "/images/projects/terai-madhesh-road.jpg",
        href: "/projects/single-project",
        category: "Roads & Bridges",
    },
    {
        title: "Pokhara Wastewater Management Master Plan",
        location: "Pokhara, Nepal",
        excerpt:
            "Socio-Economic Design Survey for the Development of Master Plan for Wastewater Management in Pokhara Metropolitan City for JICA and Yachiyo Engineering Co., Ltd.",
        img: "/images/projects/waste-management.jpg",
        href: "/projects/single-project",
        category: "Water Resources",
    },
    {
        title: "Citizen Investment Trust (CIT) - IEE",
        location: "Nepal",
        excerpt:
            "Initial Environment Examination (IEE) of Citizen Investment Trust. (Ongoing)",
        img: "/images/projects/cit.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Central Infectious Disease Hospital",
        location: "Teku, Kathmandu, Nepal",
        excerpt:
            "MEP Design and Report for the 300-bed Central Infectious Disease Hospital, providing comprehensive mechanical, electrical, and plumbing engineering solutions.",
        img: "/images/projects/infectious-hospital.jpg",
        href: "/projects/single-project",
        category: "Buildings & Infrastructure",
    },
    {
        title: "Nardevi Ayurvedic Central Hospital",
        location: "Nardevi, Kathmandu, Nepal",
        excerpt:
            "MEP Design and Report for the Nardevi Ayurvedic Central Hospital, providing mechanical, electrical, and plumbing engineering solutions.",
        img: "/images/projects/placeholder.jpg",
        href: "/projects/single-project",
        category: "Buildings & Infrastructure",
    },
    {
        title: "Hotel Aikawa Inn - IEE",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Initial Environment Examination (IEE) of Hotel Aikawa Inn for the Regional Hotel Association Nepal. (Ongoing)",
        img: "/images/projects/placeholder.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Quarry Site Survey - Pataliya-Hetauda Road",
        location: "Nepal",
        excerpt:
            "Quarry Site Survey of Pataliya - Hetauda - Narayangad Road Section for the SASEC Project.",
        img: "/images/projects/placeholder.jpg",
        href: "/projects/single-project",
        category: "Roads & Bridges",
    },
    {
        title: "Itahari Water Supply Project",
        location: "Itahari, Nepal",
        excerpt:
            "Detail Analysis Survey of Water Supply Project for A.B.M Engineering Consultancy Pvt. Ltd.",
        img: "/images/projects/placeholder.jpg",
        href: "/projects/single-project",
        category: "Water Resources",
    },
    {
        title: "Patalya-Hetauda Road - Geological Study",
        location: "Nepal",
        excerpt:
            "Detail Geological Study and Topographical Survey of Patalya-Hetauda Road Section for the SASEC Project.",
        img: "/images/projects/placeholder.jpg",
        href: "/projects/single-project",
        category: "Roads & Bridges",
    },
    {
        title: "Jhapa Water Supply Project",
        location: "Jhapa, Nepal",
        excerpt:
            "Detail Analysis Survey of Water Supply Project for A.B.M Engineering Consultancy Pvt. Ltd.",
        img: "/images/projects/placeholder.jpg",
        href: "/projects/single-project",
        category: "Water Resources",
    },
    {
        title: "Hotel Monalisa Chitwan - EIA",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Environment Impact Assessment (EIA) and Geological Investigation for Hotel Monalisa Chitwan Pvt. Ltd. (Ongoing)",
        img: "/images/projects/placeholder.jpg",
        href: "/projects/single-project",
        category: "Environmental Studies",
    },
    {
        title: "Community Building at Myanglung",
        location: "Myanglung-8, Terathum, Nepal",
        excerpt:
            "Preparation of Detailed Design, Structural Analysis, Geological Investigation and Cost Estimation of community building.",
        img: "/images/projects/placeholder.jpg",
        href: "/projects/single-project",
        category: "Buildings & Infrastructure",
    },
    {
        title:
            "Socio-Economic Design Survey",
        location: "Yachiyo Engineering Co. Ltd. Tokyo, Japan. JICA",
        excerpt:
            "Social Condition Survey for the project for Development of Master Plan for Wastewater Management in Pokhara Metropolitan City",
        img: "/images/projects/placeholder.jpg",
        href: "/projects/social-condition-survey-pokhara",
        category: "International Projects",
    },
    {
        title:
            "SEA Report",
        location: "Pacific Consultants Co. Ltd and JICA",
        excerpt:
            "Project for Capacity Development on Flood Control for Disaster Risk Reduction in Sunsari and Morang Districts",
        img: "/images/projects/placeholder.jpg",
        href: "/projects/flood-control-sunsari-morang",
        category: "International Projects",
    },
];

// Derived list of unique categories, in a sensible fixed display order
// (rather than array/insertion order, which would depend on data order).
const CATEGORY_ORDER: ProjectCategory[] = [
    "Environmental Studies",
    "Roads & Bridges",
    "Water Resources",
    "GIS Mapping",
    "Buildings & Infrastructure",
    "International Projects",
];

export const PROJECT_CATEGORIES: ProjectCategory[] = CATEGORY_ORDER.filter(
    (category) => PROJECTS.some((p) => p.category === category)
);