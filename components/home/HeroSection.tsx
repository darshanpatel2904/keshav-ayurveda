"use client";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Ayurvedic herbs and spices arrangement with turmeric and mortar"
          className="h-full w-full object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-[90vh] items-center py-20">
        <div className="max-w-2xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            <Leaf className="h-4 w-4" />
            Ancient Wisdom, Modern Wellness
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            Embrace Nature's
            <span className="block text-primary">Healing Power</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground md:text-xl"
          >
            Discover the timeless secrets of Ayurveda with our premium
            collection of 100% natural herbal products. Handcrafted with pure
            ingredients for your holistic well-being.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="gap-2" asChild>
              <Link href="/products">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn About Ayurveda</Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 pt-4"
          >
            {[
              { icon: Shield, text: "100% Natural" },
              { icon: Award, text: "GMP Certified" },
              { icon: Leaf, text: "Cruelty Free" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <badge.icon className="h-5 w-5 text-primary" />
                {badge.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-honey/10 blur-3xl" />
    </section>
  );
}
