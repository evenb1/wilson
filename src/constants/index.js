import { facebook, instagram, twitter } from "../assets/icons";
import { bigImage1, bigImage2, bigImage3, blade1,blade2,clash1,clash2,
    shift1,shift2,triad1,triad2, shoes, bags, balls, strings, } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#collection", label: "Collections" },
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
        name: "SHOES",
    },
    {
        imgURL: balls,
        name: "BALLS",
    },
    {
        imgURL: strings,
        name: "STRINGS",
    },
    {
        imgURL: bags,
        name: "BAGS"
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





export const footerLinks = [
   
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
            { name: "customer@wilson.com", link: "mailto:customer@wilson.com" },
            { name: "+123456789", link: "tel:+12345678" },
        ],
    },
];

export const socialMedia = [
    { src: facebook,href:"https://www.facebook.com/WilsonTennis/",  alt: "facebook logo" },
    { src: twitter, href:"https://x.com/wilsontennis", alt: "twitter logo" },
    { src: instagram, href:"https://www.instagram.com/wilsontennis/?hl=en",alt: "instagram logo" },
];