import {
  IFAQItem,
  IFeatureListItem,
  INavItemList,
  IProjectListItem,
  IServieceListItem,
} from "@/types/types";

// Navigation Items
export const navItems: INavItemList[] = [
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contacts", href: "#" },
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
    title: "We Develop Unique Projects",
    description:
      "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
  },
  {
    title: "We Value Convenience and Functionality",
    description:
      "Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies",
  },
  {
    title: "Experience Allows Us to Implement Ideas",
    description:
      "Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim diam vulputate ut pharetra",
  },
  {
    title: "We Offer Innovative Technologies",
    description:
      "Consectetur adipiscing elit pellentesque habitant. Arcu felis bibendum ut tristique",
  },
  {
    title: "We Focus on Long-term Relationships",
    description:
      "Purus in massa tempor nec feugiat. Euismod lacinia at quis risus sed vulputate",
  },
];

// FAQ list
export const faqs: IFAQItem[] = [
  {
    question: "Where is Company Located?",
    answer:
      "Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus interdum posuere lorem. Ut diam quam nulla porttitor.",
    open: true,
  },
  {
    question: "What is a Structural Engineer?",
    answer:
      "Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus interdum posuere lorem. Ut diam quam nulla porttitor massa id neque aliquam vestibulum.",
  },
  {
    question: "What are the Service Provided by Company?",
    answer:
      "Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus interdum posuere lorem. Ut diam quam nulla porttitor massa id neque.",
  },
  {
    question: "How Long Does It Take to Build a House?",
    answer:
      "Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus interdum posuere lorem. Ut diam quam nulla porttitor massa id.",
  },
];

// Gallery items
export const galleryItems = [
  "Fresh Concept Construction Renovation",
  "Fresh Concept Construction Renovation",
  "Fresh Concept Construction Renovation",
  "Fresh Concept Construction Renovation",
];
