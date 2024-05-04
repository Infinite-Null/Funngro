import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Why?" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '3.5k+', label: 'Companies' },
    { value: '12+', label: 'Categories' },
    { value: '2M+', label: 'Teenlancers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Passion",
        price: "Helps Teenager convert passion to profession",
    },
    {
        imgURL: shoe5,
        name: "First income",
        price: "Learn importance of money by earning on their own",
    },
    {
        imgURL: shoe6,
        name: "Learning",
        price: "Experiential Learning by working on real projects",
    },
    {
        imgURL: shoe7,
        name: "Certification",
        price: "Teenagers build profile by getting experience certificates",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free Registration",
        subtext: "Register for free and start your journey with us. No hidden charges."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Harry Potter',
        feedback: "Experience has helped me gain a lot of confidence. Best part is learning & Earning together."
    },
    {
        imgURL: customer2,
        customerName: 'Emma Watson',
        feedback: "Helped me to earn through my skills. Happy to work with companies."
    },
    {
        imgURL: customer1,
        customerName: 'Harry Potter',
        feedback: "Experience has helped me gain a lot of confidence. Best part is learning & Earning together"
    },
];


export const footerLinks = [
    {
        title: "Featured in",
        links: [
            { name: "Business News Week", link: "/" },
            { name: "The Times of India", link: "/" },
            { name: "Entrackr", link: "/" },
            { name: "IBS intelligence", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Terms & Condition", link: "https://www.funngro.com/terms-and-conditions" },
            { name: "Privacy policy", link: "https://www.funngro.com/privacy-policy" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "hello@fungrow.com", link: "mailto:customer@nike.com" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
