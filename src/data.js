export const navLinks = [
  {
    id: 1,
    name: "Menu",
    path: "menu",
  },
  {
    id: 2,
    name: "brands",
    path: "brands",
  },
  {
    id: 3,
    name: "About Us",
    path: "about",
  },
  {
    id: 4,
    name: "Contacts",
    path: "contacts",
  },
];

/* Home SLider */

import bleu from "./assets/bleu.png";
import creed from "./assets/creed.png";
import sauvage from "./assets/sauvage.png";
import versace from "./assets/versace.png";

export const homeSlider = [
  {
    id: 1,
    subDescription: "Up to 35% off",
    Description: "Elegance in Every Drop, Limited Time Only.",
    image: bleu,
  },
  {
    id: 2,
    subDescription: "Up to 35% off",
    Description: "Come Join us! You're welcome",
    image: creed,
  },

  {
    id: 3,
    subDescription: "Up to 35% off",
    Description: "Feed your desire in every drop",
    image: sauvage,
  },

  {
    id: 4,
    subDescription: "Up to 35% off",
    Description: "Elegance is a Passion~",
    image: versace,
  },
];

/* best selling products */

import Azure from "./assets/Azure.png";
import riffs from "./assets/riffs.png";
import lacoste from "./assets/lacoste.png";
import victoria from "./assets/victoria.png";
import eternity from "./assets/eternity.png";
import david from "./assets/david.png";
import bvlgari from "./assets/bvlgari.png";
import carolina from "./assets/carolina.png";
import happy from "./assets/happy.png";
import burberry from "./assets/burberry.png";

/* heart icon */
import { FaRegHeart } from "react-icons/fa";

export const bestSelling = [
  {
    id: 1,
    productName: "Lake & Skye Azure",
    description: "Limited time discount, shop now!",
    ratings: 5,
    price: "599.00",
    image: Azure,
    icon: FaRegHeart,
    liked: false,
  },
  {
    id: 2,
    productName: "Golden Elixir",
    description: "Save big while stocks last!",
    ratings: 4,
    price: "599.00",
    image: riffs,
    icon: FaRegHeart,
    liked: false,
  },

  {
    id: 3,
    productName: "L'Homme Lacoste",
    description: "Get your favorite scent for less.",
    ratings: 4,
    price: "599.00",
    image: lacoste,
    icon: FaRegHeart,
    liked: false,
  },

  {
    id: 4,
    productName: "Micheal Cinco Bench",
    description: "Special offer—don’t miss out!",
    ratings: 5,
    price: "599.00",
    image: victoria,
    icon: FaRegHeart,
  },
  {
    id: 5,
    productName: "Clinique",
    description: "Up to 35% off fragrances!",
    ratings: 4,
    price: "599.00",
    image: eternity,
    icon: FaRegHeart,
  },
  {
    id: 6,
    productName: "Eternity by: Calvin Klein",
    description: "Luxury scents, now on sale.",
    ratings: 3,
    price: "599.00",
    image: carolina,
    icon: FaRegHeart,
    liked: false,
  },

  {
    id: 7,
    productName: "Davidoff",
    description: "Discounted price, limited availability.",
    ratings: 4,
    price: "599.00",
    image: happy,
    icon: FaRegHeart,
    liked: false,
  },

  {
    id: 8,
    productName: "Bvlgari Aqua",
    description: "Top deals on bestsellers!",
    ratings: 2,
    price: "599.00",
    image: bvlgari,
    icon: FaRegHeart,
    liked: false,
  },
  {
    id: 9,
    productName: "Bombshell Victoria's Secret",
    description: "Fragrance sale, shop and save!",
    ratings: 3,
    price: "599.00",
    image: burberry,
    icon: FaRegHeart,
    liked: false,
  },

  {
    id: 10,
    productName: "Burberry Snow Blossom",
    description: "Exclusive offer, limited time only.",
    ratings: 4,
    price: "599.00",
    image: david,
    icon: FaRegHeart,
    liked: false,
  },
];

/* Branding */

import brands3 from "../src/assets/brands-3.avif";
import brands2 from "../src/assets/brands-2.avif";
import brands4 from "../src/assets/brands-4.avif";
import brands6 from "../src/assets/brands-6.avif";

export const Branding = [
  {
    id: 1,
    images: brands3,
  },
  {
    id: 2,
    images: brands2,
  },
  {
    id: 3,
    images: brands4,
  },
  {
    id: 4,
    images: brands6,
  },
];

/* Categories Links */

export const CategoriesLinks = [
  {
    id: 1,
    name: "Mens",
    url: "/brands/mens",
  },
  {
    id: 2,
    name: "Womens",
    url: "/brands/womens",
  },
];

/* About US descriptions */

import about1 from "../src/assets/bvlgari.png";
import about2 from "../src/assets/carolina.png";

export const about = [
  {
    id: 1,
    images: about1,
    title: {
      title1: "A Touch of Luxury, a Spray of Confidence.",
      title2: "Elegance in Every Essence — A Scent That Speaks Without Words",
    },
    description: {
      descript1:
        "Welcome to Scentura Vault, where we believe that a fragrance is more than just a scent, it's an expression of your unique style and personality. Our mission is to provide you with exquisite, high-quality perfumes that empower you with confidence and a touch of luxury.",
      descript2:
        "At Scentura Vault, we believe true elegance lies in the details — and scent is the most captivating of them all. Our curated collection blends timeless notes with modern luxury, creating perfumes that embody sophistication, grace, and individuality. Whether you're dressing up or down, your fragrance should whisper confidence and radiate beauty.",
    },
  },
  {
    id: 1,
    images: about2,
    title: {
      title1: "Unveil the Power Within — Let Your Fragrance Speak Volumes",
      title2: "Crafted for Life’s Finest Moments — A Scent for Every Story",
    },
    description: {
      descript1:
        "Perfume has the power to change your mood, boost your confidence, and stir memories — and at Scentura Vault, we bottle that power. Our perfumes are more than just beautiful scents; they are bold statements, crafted with precision and passion to help you walk taller, smile brighter, and own every moment.",
      descript2:
        "Life is made of moments — celebrations, quiet mornings, unexpected adventures. At Scentura Vault, we believe every one of those moments deserves its own fragrance. Our luxurious perfumes are designed to make you feel empowered, elegant, and endlessly unforgettable, no matter where life takes you.",
    },
  },
];

import Sexy from "../src/assets/Sexy.png";

export const mensCategorie = [
  {
    id: 1,
    image: Sexy,
    title: "SEXY MAN",
    price: "$54.83",
    description:
      "This is created by Alberto Morillasand Rosendo Mateu The top notes of the fragrance are a mix of mandarin, bergamot, and green leaf, which give a fresh and citrusy start to the scent. The heart of the fragrance is composed of cardamom, pepper, and flowers, which add a spicy and floral touch to the fragrance.",
    qoute: "UNLEASH YOUR INNER ALLURE",
  },

  {
    id: 2,
    image: happy,
    title: "Happy Perfume",
    price: "$224.83",
    description:
      "This is created by Alberto Morillasand Rosendo Mateu The top notes of the fragrance are a mix of mandarin, bergamot, and green leaf, which give a fresh and citrusy start to the scent. The heart of the fragrance is composed of cardamom, pepper, and flowers, which add a spicy and floral touch to the fragrance.",
    qoute: "UNLEASH YOUR INNER ALLURE",
  },
];

export const womensCategories = [
  {
    id: 1,
    image: lacoste,
    title: "L'Homme Lacoste",
    price: "$34.83",
    description:
      "L'Homme Lacoste is a men's Eau de Toilette introduced in 2017, crafted by perfumer Michel Girard. This fragrance embodies the modern man's elegance and versatility, offering a blend of fruity freshness and spicy warmth.​",
    qoute: "UNLEASH YOUR INNER ALLURE",
  },

  {
    id: 2,
    image: victoria,
    title: "Micheal Cinco Bench ",
    price: "$24.83",
    description:
      "Impalpable is housed in a sleek, emerald-cut grey bottle with a clear cap, reflecting Michael Cinco's couture aesthetic. The fragrance is available in a 90ml Eau de Parfum concentration to the scent. The heart of the fragrance is composed of cardamom, pepper, and flowers, which add a spicy and floral touch to the fragrance.",
    qoute: "UNLEASH YOUR INNER ALLURE",
  },
];
