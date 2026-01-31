"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <Mail className="mx-auto mb-6 h-12 w-12" />
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            Join Our Wellness Journey
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Subscribe to receive Ayurvedic tips, exclusive offers, and be the
            first to know about new products.
          </p>

          <form className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground"
            />
            <Button
              type="submit"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Subscribe Now
            </Button>
          </form>

          <p className="mt-4 text-sm text-primary-foreground/60">
            No spam, unsubscribe anytime. Read our Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
