"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The Chyawanprash has become a morning ritual for my entire family. We've noticed a significant improvement in our immunity since we started using it.",
    product: "Chyawanprash Classic",
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "After trying countless products for my joint pain, the Turmeric Curcumin capsules finally gave me relief. Highly recommended!",
    product: "Turmeric Curcumin Capsules",
  },
  {
    name: "Anjali Patel",
    location: "Bangalore",
    rating: 5,
    text: "The Bhringraj Hair Oil has transformed my hair. It's thicker, shinier, and healthier than ever. A true Ayurvedic gem!",
    product: "Bhringraj Hair Oil",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-primary/5 py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Customer Stories
          </span>
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Join thousands of satisfied customers who have embraced the power of
            Ayurveda.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-8"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/10" />

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-honey text-honey" />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 text-foreground/80">"{testimonial.text}"</p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                    {testimonial.product}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
