// Herosection contents
export const heroContent = {
  title: "Professional. Innovative. Reliable.",
  subtitleOne: "Exceptional Service",
  subtitleTwo: "Exceeding Expectations",
  description:
    "Our civil and structural team is committed to providing sustainable, creative & efficient engineering solutions for our communities.",
  ctaPrimary: {
    label: "Consult Now",
    href: "/contact",
  },
  ctaSecondary: {
    label: "Our Projects",
    href: "/projects",
  },
  counters: {
    projectsPerYear: {
      label: "Projects / Year",
      value: 128,
    },
    turnover2020: {
      label: "Valued clients",
      value: 425,
    },
  },
  floatingCard: {
    title: "Residental House",
    area: "78000 m²",
    workDone: "Amount of work done",
    details: "Details",
  },
};

// Services Section
export const servicesContent = {
  label: "What we do",
  titleOne: "Multi-Disciplined Engineering",
  titleHighlight: "Solutions",

  services: [
    {
      id: 1,
      number: "01",
      title: "Structural Engineering",
      description:
        "We deliver safe, efficient and innovative structural designs tailored to modern construction needs.",
      href: "/services/structural-engineering",
    },
    {
      id: 2,
      number: "02",
      title: "Civil Engineering",
      description:
        "End-to-end civil engineering solutions for infrastructure, roads, and urban development projects.",
      href: "/services/civil-engineering",
    },
    {
      id: 3,
      number: "03",
      title: "Project Management",
      description:
        "Professional supervision and management ensuring timely and cost-effective project delivery.",
      href: "/services/project-management",
    },
    {
      id: 4,
      number: "04",
      title: "Architecture Design",
      description:
        "Modern architectural concepts focused on functionality, sustainability, and aesthetics.",
      href: "/services/architecture",
    },
    {
      id: 5,
      number: "05",
      title: "Consulting Services",
      description:
        "Expert advisory services for planning, feasibility studies, and engineering decisions.",
      href: "/services/consulting",
    },
    {
      id: 6,
      number: "06",
      title: "Site Supervision",
      description:
        "On-site monitoring and quality control to ensure compliance with engineering standards.",
      href: "/services/site-supervision",
    },
  ],
};

// Projects Section
export const projectsContent = {
  label: "What we do",
  titleOne: "Our",
  titleHighlight: "Projects",

  projects: [
    {
      id: 1,
      title: "Modern Residential Complex",
      location: "Kathmandu, Nepal",
      image: "/images/projects/p1.avif",
      href: "/projects/modern-residential-complex",
    },
    {
      id: 2,
      title: "Commercial Tower Development",
      location: "Lalitpur, Nepal",
      image: "/images/projects/p2.jpg",
      href: "/projects/commercial-tower",
    },
    {
      id: 3,
      title: "Bridge Infrastructure Project",
      location: "Pokhara, Nepal",
      image: "/images/projects/p3.webp",
      href: "/projects/bridge-infrastructure",
    },
    {
      id: 4,
      title: "Highway Expansion Work",
      location: "Chitwan, Nepal",
      image: "/images/projects/p4.webp",
      href: "/projects/highway-expansion",
    },
  ],
};

// Spot Section
export const spotsContent = {
  label: "Where we work",
  titleOne: "Our Projects",
  titleTwo: "Across Nepal",

  description:
    "XYZ Company has successfully delivered civil and structural engineering projects across major cities of Nepal. From residential housing in Kathmandu to commercial and infrastructure work in Pokhara and beyond, we focus on quality, safety, and earthquake-resistant design.",

  stats: [
    {
      value: "200+",
      label: "Projects Completed Across Nepal",
    },
    {
      value: "99%",
      label: "Client Satisfaction Rate",
    },
  ],

  cta: {
    label: "About Company",
    href: "/about",
  },

  // Nepal locations (approx positions for map)
  locations: [
    { name: "Kathmandu", x: 55, y: 58 },
    // { name: "Pokhara", x: 38, y: 50 },
    // { name: "Lalitpur", x: 53, y: 47 },
    // { name: "Bhaktapur", x: 55, y: 44 },
    { name: "Biratnagar", x: 75, y: 75 },
    // { name: "Butwal", x: 45, y: 65 },
    // { name: "Dharan", x: 72, y: 50 },
  ],
};

// feature section
export const featuresContent = {
  label: "Why Choose Us",

  title: {
    highlight: "Building",
    rest: "Nepal with Excellence",
  },

  checklist: [
    "Seismic-resistant structural design",
    "Experienced civil & site engineering team",
    "Reliable and cost-effective construction solutions",
  ],
};

// FAQ Section
// contents/homePage.ts

export const faqContent = {
  label: "Dealing with your worries",
  titleOne: "If Your Question Is Not Here",
  titleTwo: "Contact Us",
  description:
    "We understand that construction projects can raise many questions. Our team at XYZ Construction is here to guide you through every step—from planning to execution.",
  cta: {
    label: "Contact Us",
    href: "/contact",
  },
};
