import type { Product } from "@/data/products";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const phoneNumber = "+919724162321";

export const emailAddress = "keshavmayurveda@gmail.com";

export function getWhatsappMessage(product: Product, quantity: number) {
  return `Hi! I'm interested in ${product.name} (Qty: ${quantity}). Price: ₹${product.price * quantity}. Please share more details.`;
}

export async function sendWhatsappMessage(
  product?: Product,
  quantity?: number,
) {
  let message = "";
  if (product && quantity) {
    message = getWhatsappMessage(product, quantity);
  } else {
    message = "Hi! I'd like to know more about your Ayurvedic products.";
  }
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url);
  return url;
}
