import type { ReactNode } from "react";

export interface Project {
    title: string;
    location: string;
    excerpt: string;
    img: string;
    href: string;
}

export const PROJECTS: Project[] = [
    {
        title: "Kathmandu-Terai/Madhesh Expressway",
        location: "Kathmandu, Nepal",
        excerpt:
            "DGPS Survey and Detail Topographic Survey of the intersection area for Nepal's major expressway project, executed for the Government of Nepal and Nepalese Army.",
        img: "/img/projects/05.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Rapti and Duduwa River Sand & Gravel Collection",
        location: "Dudhuvu Rural Municipality, Nepal",
        excerpt:
            "Initial Environment Examination (IEE) and Geological Investigation for collection of Sand and Gravel from Rapti and Duduwa River.",
        img: "/img/projects/07.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Dudhuwa Khola Bridge (70m)",
        location: "Dudhuvu Rural Municipality, Nepal",
        excerpt:
            "Feasibility Study, Detailed Engineering Survey, Geological Investigation, Hydrological Analysis, and Detailed Design with Cost Estimation for the 70m bridge.",
        img: "/img/projects/08.jpg",
        href: "/projects/single-project",
    },
    {
        title: "SASEC Road Improvement Project",
        location: "Butwal-Jitpur Section, Nepal",
        excerpt:
            "Detail Topographic Survey and Geological Investigation of different bridges for the ADB-funded SASEC Road Improvement Project (50 km section).",
        img: "/img/projects/09.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Hotel Jungle Vista - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) for Hotel Jungle Vista, conducted for the Regional Hotel Association Nepal, Sauraha.",
        img: "/img/projects/10.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Eden Jungle Resort - IEE",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Initial Environment Examination (IEE) of Eden Jungle Resort for the Regional Hotel Association Nepal.",
        img: "/img/projects/11.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Chitwan Forest Resort - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) of Chitwan Forest Resort for the Regional Hotel Association Nepal.",
        img: "/img/projects/12.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Chitwan Park Cottage - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) of Chitwan Park Cottage for the Regional Hotel Association Nepal.",
        img: "/img/projects/13.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Wild Adventure Resort - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) of Wild Adventure Resort for the Regional Hotel Association Nepal.",
        img: "/img/projects/14.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Safari Park Hotel and Lodge - IEE",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Initial Environment Examination (IEE) of Safari Park Hotel and Lodge for the Regional Hotel Association Nepal.",
        img: "/img/projects/15.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Hotel Hermitage - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) of Hotel Hermitage for the Regional Hotel Association Nepal.",
        img: "/img/projects/16.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Evergreen Eco-Lodge - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) of Evergreen Eco-Lodge and Restaurant for the Regional Hotel Association Nepal.",
        img: "/img/projects/17.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Hotel Royal Safari - IEE",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Initial Environment Examination (IEE) of Hotel Royal Safari for the Regional Hotel Association Nepal.",
        img: "/img/projects/18.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Hotel Rainforest - BES",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Brief Environment Study (BES) of Hotel Rainforest for the Regional Hotel Association Nepal. (Ongoing)",
        img: "/img/projects/19.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Chitwan Mid Town Resort - IEE",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Initial Environment Examination (IEE) of Chitwan Mid Town Resort Pvt. Ltd. (Ongoing)",
        img: "/img/projects/20.jpg",
        href: "/projects/single-project",
    },
    {
        title: "GIS Mapping - Nalinchowk Feeder",
        location: "Nepal",
        excerpt:
            "GIS mapping and Consumer Indexing for Nalinchowk Feeder, conducted for GIZ Nepal. (Ongoing)",
        img: "/img/projects/21.jpg",
        href: "/projects/single-project",
    },
    {
        title: "GIS Mapping - Nagarkot Feeder",
        location: "Nepal",
        excerpt:
            "GIS mapping and Consumer Indexing for Nagarkot Feeder, conducted for GIZ Nepal. (Ongoing)",
        img: "/img/projects/22.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Gobardhan Dham Masterplan",
        location: "Narainapur, Banke, Nepal",
        excerpt:
            "Detailed Engineering Survey, Design and Detailed Report Preparation of Gobardhan Dham (0.95 Ha) for the Government of Nepal.",
        img: "/img/projects/23.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Sundarmunda Marga Road Project",
        location: "Narainapur, Banke, Nepal",
        excerpt:
            "Detailed Engineering Survey, Design and Detailed Report Preparation of Sundarmunda Marga (5.3 Km) for the Government of Nepal.",
        img: "/img/projects/24.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Pokhara Wastewater Management Master Plan",
        location: "Pokhara, Nepal",
        excerpt:
            "Socio-Economic Design Survey for the Development of Master Plan for Wastewater Management in Pokhara Metropolitan City for JICA and Yachiyo Engineering Co., Ltd.",
        img: "/img/projects/25.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Citizen Investment Trust (CIT) - IEE",
        location: "Nepal",
        excerpt:
            "Initial Environment Examination (IEE) of Citizen Investment Trust. (Ongoing)",
        img: "/img/projects/26.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Central Infectious Disease Hospital",
        location: "Teku, Kathmandu, Nepal",
        excerpt:
            "MEP Design and Report for the 300-bed Central Infectious Disease Hospital, providing comprehensive mechanical, electrical, and plumbing engineering solutions.",
        img: "/img/projects/27.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Nardevi Ayurvedic Central Hospital",
        location: "Nardevi, Kathmandu, Nepal",
        excerpt:
            "MEP Design and Report for the Nardevi Ayurvedic Central Hospital, providing mechanical, electrical, and plumbing engineering solutions.",
        img: "/img/projects/28.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Hotel Aikawa Inn - IEE",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Initial Environment Examination (IEE) of Hotel Aikawa Inn for the Regional Hotel Association Nepal. (Ongoing)",
        img: "/img/projects/29.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Quarry Site Survey - Pataliya-Hetauda Road",
        location: "Nepal",
        excerpt:
            "Quarry Site Survey of Pataliya - Hetauda - Narayangad Road Section for the SASEC Project.",
        img: "/img/projects/30.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Itahari Water Supply Project",
        location: "Itahari, Nepal",
        excerpt:
            "Detail Analysis Survey of Water Supply Project for A.B.M Engineering Consultancy Pvt. Ltd.",
        img: "/img/projects/31.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Patalya-Hetauda Road - Geological Study",
        location: "Nepal",
        excerpt:
            "Detail Geological Study and Topographical Survey of Patalya-Hetauda Road Section for the SASEC Project.",
        img: "/img/projects/32.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Jhapa Water Supply Project",
        location: "Jhapa, Nepal",
        excerpt:
            "Detail Analysis Survey of Water Supply Project for A.B.M Engineering Consultancy Pvt. Ltd.",
        img: "/img/projects/33.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Hotel Monalisa Chitwan - EIA",
        location: "Sauraha, Chitwan, Nepal",
        excerpt:
            "Environment Impact Assessment (EIA) and Geological Investigation for Hotel Monalisa Chitwan Pvt. Ltd. (Ongoing)",
        img: "/img/projects/34.jpg",
        href: "/projects/single-project",
    },
    {
        title: "Community Building at Myanglung",
        location: "Myanglung-8, Terathum, Nepal",
        excerpt:
            "Preparation of Detailed Design, Structural Analysis, Geological Investigation and Cost Estimation of community building.",
        img: "/img/projects/35.jpg",
        href: "/projects/single-project",
    },
];