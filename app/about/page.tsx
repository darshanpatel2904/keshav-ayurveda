"use client";
import { motion } from "framer-motion";
import {
  Leaf,
  Heart,
  Award,
  Users,
  Target,
  Shield,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Link from "next/link";

const values = [
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "We source only the purest ingredients from trusted Ayurvedic farms across India.",
  },
  {
    icon: Heart,
    title: "Holistic Wellness",
    description:
      "Our products are designed to nurture body, mind, and spirit in harmony with nature.",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description:
      "All products are GMP certified and undergo rigorous quality testing.",
  },
  {
    icon: Shield,
    title: "Trusted Heritage",
    description:
      "Rooted in 5000 years of Ayurvedic wisdom, adapted for modern wellness needs.",
  },
];

const team = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Founder & Chief Ayurveda Expert",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    description: "30+ years of experience in traditional Ayurvedic medicine.",
  },
  {
    name: "Priya Verma",
    role: "Head of Product Development",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    description: "Expert in formulating effective Ayurvedic blends.",
  },
  {
    name: "Amit Patel",
    role: "Quality Assurance Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    description: "Ensures every product meets our strict quality standards.",
  },
];

const certifications = [
  "GMP Certified Manufacturing",
  "ISO 9001:2015 Quality Management",
  "FSSAI Licensed",
  "Organic India Certified",
  "AYUSH Ministry Approved",
  "Cruelty-Free & Vegan Options",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="border-b border-border bg-secondary/30">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">About Us</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Our Story
              </span>
              <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
                Rooted in Tradition,{" "}
                <span className="text-primary">Crafted for Today</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Keshav brings you the timeless wisdom of Ayurveda, combining
                5000 years of natural healing knowledge with modern quality
                standards to deliver products that truly nurture your wellbeing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-primary/5 p-8"
              >
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 font-heading text-2xl font-bold">
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To make authentic Ayurvedic wellness accessible to everyone by
                  providing pure, effective, and affordable herbal products that
                  honor traditional formulations while meeting modern quality
                  standards.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-accent/10 p-8"
              >
                <div className="mb-4 inline-flex rounded-full bg-accent/20 p-3">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h2 className="mb-4 font-heading text-2xl font-bold">
                  Our Vision
                </h2>
                <p className="text-muted-foreground">
                  To become India's most trusted Ayurvedic brand, inspiring
                  millions to embrace natural wellness and live healthier, more
                  balanced lives through the power of ancient herbal wisdom.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary/50 py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Our Values
              </span>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        {/* <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Our Team
              </span>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Meet the Experts
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Our team of Ayurvedic practitioners, herbalists, and wellness
                experts are dedicated to bringing you the best natural products.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                  />
                  <h3 className="font-heading text-xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Certifications */}
        <section className="bg-primary py-20 text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <span className="mb-4 inline-block rounded-full bg-primary-foreground/20 px-4 py-1 text-sm font-medium">
                Quality Assurance
              </span>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Our Certifications
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
                We maintain the highest standards of quality and safety in all
                our products.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-lg bg-primary-foreground/10 p-4"
                >
                  <Award className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
