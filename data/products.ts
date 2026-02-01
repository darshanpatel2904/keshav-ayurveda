import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";
import product5 from "@/assets/product-5.jpeg";
import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: StaticImageData;
  badge: string;
  category: string;
}

export const categories = [
  { id: "all", name: "All Products", count: 5 },
  { id: "women-health", name: "Women's Health", count: 1 },
  { id: "immunity", name: "Immunity & Detox", count: 2 },
  { id: "weight-management", name: "Weight Management", count: 2 },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Nari Sanjeevani Syrup",
    description:
      "A complete natural and safe Ayurvedic tonic specifically formulated for women's health and vitality.",
    price: 549,
    originalPrice: 549,
    rating: 4.9,
    reviews: 128,
    image: product1,
    badge: "Lady Care",
    category: "women-health",
  },
  {
    id: 2,
    name: "Super Berry Juice",
    description:
      "A powerful blend of 12 super berries designed to provide a natural glow and an instant energy boost.",
    price: 1410,
    originalPrice: 1410,
    rating: 4.8,
    reviews: 215,
    image: product2,
    badge: "12 Super Berries",
    category: "immunity",
  },
  {
    id: 3,
    name: "Bodygrow Tablet",
    description:
      "Natural weight gain formula that helps boost appetite and improve physical stamina effectively.",
    price: 1700,
    originalPrice: 2250,
    rating: 4.7,
    reviews: 164,
    image: product3,
    badge: "Weight Gain",
    category: "weight-management",
  },
  {
    id: 4,
    name: "Slimtone Tablet",
    description:
      "Ayurvedic obesity care tablets that help burn fat while enhancing mental focus and energy levels.",
    price: 1700,
    originalPrice: 2250,
    rating: 4.6,
    reviews: 142,
    image: product4,
    badge: "Fat Burner",
    category: "weight-management",
  },
  {
    id: 5,
    name: "Premium Noni Plus Juice",
    description:
      "An advanced Ayurvedic preparation of Noni fruit to support overall cellular health and detoxification.",
    price: 1350,
    originalPrice: 1350,
    rating: 4.8,
    reviews: 189,
    image: product5,
    badge: "Premium",
    category: "immunity",
  },
];

export const sortOptions = [
  { id: "featured", name: "Featured" },
  { id: "price-low", name: "Price: Low to High" },
  { id: "price-high", name: "Price: High to Low" },
  { id: "rating", name: "Highest Rated" },
  { id: "reviews", name: "Most Reviewed" },
  { id: "newest", name: "Newest" },
];
