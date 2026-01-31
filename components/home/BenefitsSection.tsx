"use client";
import { motion } from "framer-motion";
import {
  Leaf,
  Beaker,
  Award,
  Truck,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "Pure herbs sourced directly from organic farms, free from chemicals and additives.",
  },
  {
    icon: Beaker,
    title: "Scientifically Tested",
    description:
      "Each product undergoes rigorous quality testing in certified laboratories.",
  },
  {
    icon: Award,
    title: "Ancient Recipes",
    description:
      "Traditional Ayurvedic formulations passed down through generations.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description:
      "Complimentary shipping on all orders above ₹499 across India.",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    description:
      "Get personalized guidance from our certified Ayurveda practitioners.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "GMP certified manufacturing with strict quality control standards.",
  },
];

export function BenefitsSection() {
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
            Why Choose Us
          </span>
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            The Keshav Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We blend ancient Ayurvedic wisdom with modern science to bring you
            the purest and most effective herbal products.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                <benefit.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
