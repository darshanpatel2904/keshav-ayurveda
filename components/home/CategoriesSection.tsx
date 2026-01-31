"use client";
import { motion } from "framer-motion";
import { Brain, Heart, Sparkles, Leaf, Pill, Droplets } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Immunity",
    icon: Sparkles,
    description: "Boost your natural defenses",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Digestive Health",
    icon: Leaf,
    description: "Improve gut wellness",
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Hair Care",
    icon: Droplets,
    description: "Nourish from root to tip",
    color: "bg-honey/10 text-honey",
  },
  {
    name: "Skin Care",
    icon: Heart,
    description: "Radiant, healthy glow",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Brain Wellness",
    icon: Brain,
    description: "Enhance mental clarity",
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Daily Wellness",
    icon: Pill,
    description: "Complete daily nutrition",
    color: "bg-honey/10 text-honey",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Shop by Concern
          </span>
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            Find Your Perfect Remedy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our carefully curated categories of Ayurvedic solutions
            designed for your specific wellness needs.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href="/products"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className={`rounded-xl p-4 ${category.color}`}>
                  <category.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold group-hover:text-primary">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
