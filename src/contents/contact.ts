import { EmailIcon, FacebookIcon, InstagramIcon, LocationIcon, PhoneIcon, TwitterIcon, WhatsAppIcon } from "@/icons";

export interface ContactLink {
    label: string;
    href: string;
}

export interface ContactCard {
    title: string;
    content: string | null;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    links: ContactLink[] | null;
}

export interface SocialLink {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const CONTACT_INFO: ContactCard[] = [
    {
        title: "Address",
        content: "Mid-Baneshwor, Balbhadra Marg, Kathmandu - 31, Nepal",
        icon: LocationIcon,
        links: null,
    },
    {
        title: "Email",
        content: null,
        icon: EmailIcon,
        links: [
            { label: "kallistoengineering@gmail.com", href: "mailto:kallistoengineering@gmail.com" },
            { label: "dipesharyal12@gmail.com", href: "mailto:dipesharyal12@gmail.com" },
        ],
    },
    {
        title: "Phone",
        content: null,
        icon: PhoneIcon,
        links: [
            { label: "+977-9841666927", href: "tel:+9779841666927" },
            { label: "+977-1-4465553", href: "tel:+97714465553" },
        ],
    },
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "Facebook",
        href: "#",
        icon: FacebookIcon,
    },
    {
        name: "Instagram",
        href: "#",
        icon: InstagramIcon,
    },
    {
        name: "Twitter",
        href: "#",
        icon: TwitterIcon,
    },
    {
        name: "WhatsApp",
        href: "#",
        icon: WhatsAppIcon,
    },
];

export const CONTACT_CONTENT = {
    subtitle: "Contact Us",
    title: "Get in Touch",
    highlight: "Contact",
    formTitle: "Send Us a Message",
    formDescription:
        "Fill out the form and our team will get back to you within 24 hours.",
    successMessage: "Message sent! We'll be in touch shortly.",
    mapTitle: "Office Location",
    followUs: "Follow us",
    submitButton: "Send Message",
    placeholderName: "Full name",
    placeholderPhone: "Phone",
    placeholderEmail: "Email Address",
    placeholderMessage: "Message",
};