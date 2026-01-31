"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { phoneNumber } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
}

export function WhatsAppButton({
  message = "Hello! I'm interested in your Ayurveda products. Could you please provide more information?",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg transition-transform hover:scale-110 animate-pulse-glow"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle
        className="h-7 w-7 text-whatsapp-foreground"
        fill="currentColor"
      />
    </motion.a>
  );
}
