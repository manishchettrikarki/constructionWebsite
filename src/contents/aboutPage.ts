import { ExcellenceIcon, ExperienceIcon, InnovationIcon, ProjectIcon } from "@/icons";

// About Intro Section
export const ABOUT_INTRO = {
    subtitle: "Who We Are",

    title: {
        normal: "Engineering Solutions for",
        highlight: "Sustainable Development",
    },

    description:
        "Established in 2074 BS, Kallisto Engineering Consultancy Pvt. Ltd. is a multidisciplinary engineering consultancy based in Mid-Baneshwor, Kathmandu. We provide professional services in planning, feasibility studies, detailed engineering design, surveying, project supervision, environmental consulting, GIS mapping, and project management. Our experienced team is committed to delivering innovative, practical, and sustainable engineering solutions that meet the highest standards of quality and professionalism.",

    checklist: [
        "Comprehensive engineering consultancy services",
        "Experienced multidisciplinary engineering professionals",
        "Innovative and sustainable project solutions",
        "Committed to quality, integrity, and client satisfaction",
    ],

    button: {
        text: "Consult Now",
        href: "/contact",
    },

    image: {
        src: "/img/about/about-intro.jpg",
        alt: "Kallisto Engineering Consultancy",
    },
};

// Message from Managing Director Section
export const MANAGING_DIRECTOR_MESSAGE = {
    sectionTitle: "Leadership Message",

    subtitle: "Message from the Managing Director",

    title: {
        normal: "Building Nepal's",
        highlight: "Engineering Future",
    },

    message: [
        "Since our establishment in 2074 B.S., Kallisto Engineering Consultancy Pvt. Ltd. has remained committed to delivering professional engineering solutions that contribute to Nepal's sustainable development. We believe every project should create lasting value for our clients, communities, and the nation.",
        "Our expertise spans transportation, hydropower, water resources, water supply and sanitation, urban development, environmental studies, GIS mapping, and project management. By combining technical excellence with innovation and integrity, we strive to provide practical and sustainable engineering solutions that exceed expectations.",
        "As we continue to grow, our commitment remains unchanged—to uphold the highest standards of professionalism, foster long-term client relationships, and contribute meaningfully to the country's infrastructure development. I sincerely thank our clients, partners, and dedicated team members for their continued trust and support.",
    ],

    person: {
        name: "Er. Dipesh Aryal",
        designation: "Managing Director",
        company: "Kallisto Engineering Consultancy Pvt. Ltd.",
        signature: "/img/signature.png",
        image: "/images/managingDirector.jpg",
        alt: "Managing Director of Kallisto Engineering Consultancy",
    },
};

export const ABOUT_QUOTE = {
    subtitle: "Our Philosophy",

    quote:
        "At Kallisto Engineering Consultancy, we believe engineering is the foundation of sustainable development. Through innovation, technical excellence, and integrity, we are committed to delivering practical solutions that create lasting value for our clients, communities, and the nation.",

    author: {
        name: "Er. Dipesh Aryal",
        designation: "Managing Director",
        image: "/images/managingDirector.jpg",
        alt: "Er. Dipesh Aryal",
    },
};

export const SERVICES_SLIDES = [
    {
        title: "Transportation Engineering",
        img: "/images/about/road-construction.jpg",
        text: "Kallisto provides comprehensive transportation engineering services including planning, feasibility studies, detailed design, and supervision of highways, roads, bridges, airports, and railways. Our expertise covers the entire project lifecycle from conception to completion.",
        items: [
            "Highway and Road Design",
            "Bridge Engineering & Analysis",
            "Airport Infrastructure Planning",
            "Railway and Metro Systems"
        ],
    },
    {
        title: "Hydropower & Energy",
        img: "/images/about/hydropower.jpg",
        text: "Our firm specializes in hydropower and energy sector projects, offering services from feasibility studies and detailed engineering surveys to geological investigation and project management. We are committed to sustainable energy solutions for Nepal's development.",
        items: [
            "Feasibility Studies",
            "Geological Investigation",
            "Hydrological Analysis",
            "Detailed Design & Cost Estimation"
        ],
    },
    {
        title: "Water Supply & Sanitation",
        img: "/images/about/water-supply.jpg",
        text: "Kallisto delivers integrated water supply and sanitation solutions including urban planning, wastewater management, solid waste management, and urban infrastructure development. We prioritize sustainable and community-focused approaches.",
        items: [
            "Water Supply Systems Design",
            "Wastewater and Solid Waste Management",
            "Urban Planning & Infrastructure",
            "Sanitation and Hygiene Projects"
        ],
    },
    {
        title: "Environmental Services",
        img: "/images/about/environment.jpg",
        text: "We provide complete environmental consulting services including Environmental Impact Assessments (EIA), Initial Environmental Examinations (IEE), Brief Environmental Studies (BES), and socio-economic distribution studies. Our holistic approach ensures sustainable development.",
        items: [
            "Environmental Impact Assessment (EIA)",
            "Initial Environmental Examination (IEE)",
            "Brief Environmental Studies (BES)",
            "Climate Change Adaptation & Mitigation"
        ],
    },
    {
        title: "GIS & Survey Services",
        img: "/images/about/gis.jpg",
        text: "Kallisto offers cutting-edge GIS mapping and survey services including DGPS surveys, detailed topographic surveys, consumer indexing, and geological investigations. Our team uses advanced technology to deliver accurate and reliable data.",
        items: [
            "DGPS and Topographic Survey",
            "GIS Mapping & Consumer Indexing",
            "Geological Investigation",
            "Hydrological Analysis"
        ],
    },
    {
        title: "Irrigation & Agriculture",
        img: "/images/about/irrigation.jpg",
        text: "Our firm provides comprehensive services in irrigation and agriculture sector including river basin planning, flood forecasting, early warning systems, and natural resources management. We work towards enhancing agricultural productivity and rural livelihoods.",
        items: [
            "Irrigation System Design",
            "River Basin Planning & Development",
            "Flood Forecasting & Early Warning",
            "Natural Resources Management"
        ],
    },
];

// About Features Section
export const ABOUT_FEATURES = [
    {
        title: "Multidisciplinary Engineering Excellence",
        desc: "Our team of licensed professional engineers, surveyors, environmentalists, sociologists, and GIS experts delivers comprehensive solutions across transportation, hydropower, water supply, and infrastructure sectors.",
        icon: ProjectIcon,
    },
    {
        title: "Commitment to Quality & Standards",
        desc: "We consistently deliver cost-effective, efficient, and innovative engineering solutions that meet national and international standards, upholding top-tier quality and ethical practices.",
        icon: ExcellenceIcon,
    },
    {
        title: "End-to-End Project Delivery",
        desc: "From feasibility studies and detailed surveys to design, supervision, and project management, we provide complete lifecycle support for engineering projects of all scales.",
        icon: ExperienceIcon,
    },
    {
        title: "Social & Environmental Responsibility",
        desc: "We integrate environmental impact assessments, socio-economic studies, and community development approaches to ensure sustainable and responsible engineering solutions.",
        icon: InnovationIcon,
    },
];

export const ABOUT_CHECKLIST = [
    "Licensed Professional Engineers & Registered Surveyors",
    "Expertise in EIA, IEE, and Environmental Studies",
    "Advanced GIS Mapping & Topographic Survey Capabilities",
    "Commitment to Client Satisfaction & Professional Ethics",
];

export const REVIEWS = [
    {
        name: "Department of Roads",
        role: "Government of Nepal",
        text: "Kallisto Engineering Consultancy delivered exceptional survey and geological investigation services for the SASEC Road Improvement Project. Their technical expertise and professionalism were commendable.",
        rating: 5,
    },
    {
        name: "Dudhuvu Rural Municipality",
        role: "Local Government Partner",
        text: "The team completed the feasibility study and detailed design of the Dudhuwa Khola Bridge with great precision. Their commitment to quality and timely delivery made a significant impact on our community.",
        rating: 5,
    },
    {
        name: "Yachiyo Engineering Co., Ltd.",
        role: "International Partner - Japan",
        text: "Kallisto's socio-economic survey for the Pokhara Wastewater Management Master Plan was thorough and professional. They proved to be a reliable partner for JICA-funded projects.",
        rating: 5,
    },
    {
        name: "Regional Hotel Association Nepal",
        role: "Sauraha, Chitwan",
        text: "Kallisto completed multiple environmental studies for our member hotels with efficiency and expertise. Their Initial Environmental Examination (IEE) and Brief Environmental Study (BES) reports were comprehensive.",
        rating: 5,
    },
    {
        name: "Nepalese Army",
        role: "Government of Nepal",
        text: "The DGPS Survey and Detail Topographic Survey for the Kathmandu-Terai Expressway intersection area was executed with military precision. Kallisto's surveying capabilities are top-notch.",
        rating: 5,
    },
    {
        name: "GIZ Nepal",
        role: "International Development Partner",
        text: "Kallisto's GIS mapping and consumer indexing for the Nalinchowk and Nagarkot feeders demonstrated their advanced technical skills and commitment to sustainable development.",
        rating: 5,
    },
];

// ── Our Team (full roster) ─────────────────────────────────────
export const TEAM_MEMBERS = [
    { name: "Mr. Dipesh Aryal", position: "Proprietor/Managing Director", qualification: "BE Civil", experience: "5 Years" },
    { name: "Mrs. Nikita Shrestha", position: "Director", qualification: "BE Civil", experience: "5 Years" },
    { name: "Mr. Aditya Poudel", position: "Sr. Engineer", qualification: "BE Civil", experience: "11 Years" },
    { name: "Ms. Salu Maharjan", position: "Finance Manager", qualification: "BBS", experience: "4 Years" },
    { name: "Mr. Tika Ram Dhakal", position: "Environmentalist/Forester", qualification: "M.Sc. Forest Management", experience: "31 Years" },
    { name: "Mr. Chan Bahadur Gurung", position: "Sociologist", qualification: "PhD Sociology", experience: "26 Years" },
    { name: "Mr. Omkar Pandey", position: "Sociologist", qualification: "MA Sociology", experience: "13 Years" },
    { name: "Mrs. Sharmila Giri", position: "Environmental Expert", qualification: "M.Sc. Environmental Science", experience: "14 Years" },
    { name: "Mrs. Kabita Khanal", position: "Tourism Expert", qualification: "MA Anthropology", experience: "19 Years" },
    { name: "Mr. Ashish Joshi", position: "GIS Expert", qualification: "Masters in Photogrammetry and Geo-informatics", experience: "16 Years" },
    { name: "Mr. Goverdhan Pandey", position: "Sr. Surveyor", qualification: "BA", experience: "31 Years" },
    { name: "Mr. Prakash Kadel", position: "Civil Engineer", qualification: "BE Civil", experience: "6 Years" },
    { name: "Mr. Deepak Raj Bhatt", position: "Sr. Engineer", qualification: "BE Civil/M.Sc. Geotech", experience: "30 Years" },
    { name: "Mr. Pursottam Yadav", position: "Sub Engineer", qualification: "Diploma in Civil Engineering", experience: "5 Years" },
];