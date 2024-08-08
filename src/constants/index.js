import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigImage1, bigImage2, bigImage3, customer1, customer2, blade1,blade2,clash1,clash2,
    shift1,shift2,triad1,triad2, shoes, bags, balls, strings, } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const tennis = [
    {
        bigImage: bigImage1,
        bigImage: bigImage2,
        bigImage: bigImage3
    }
];

export const comingSoon =[
    {
        imgURL: shoes,
        name: "Shoes",
    },
    {
        imgURL: balls,
        name: "Balls",
    },
    {
        imgURL: strings,
        name: "Strings",
    },
    {
        imgURL: bags,
        name: "Bags"
    }

]

export const products = [
    {
        imgURL: clash1,
        imgURL2:clash2,
        name: "CLASH 100 PRO V2",
        price: "$249.00",
    },
    {
        imgURL: shift1,
        imgURL2: shift2,
        name: "SHIFT 99L V1",
        price: "$249.00",
    },
    {
        imgURL: blade1,
        imgURL2: blade2,
        name: "BLADE 100 V9",
        price: "$259.00",
    },
    {
        imgURL: triad1,
        imgURL2:triad2,
        name: "TRIAD FIVE",
        price: "$199.00",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
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
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];