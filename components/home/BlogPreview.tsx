"use client";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Turmeric: Ancient Wisdom Meets Modern Research",
    excerpt:
      "Discover how modern science validates the traditional use of turmeric in Ayurveda and its powerful anti-inflammatory properties.",
    date: "January 15, 2024",
    category: "Research",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Immunity Naturally: An Ayurvedic Approach",
    excerpt:
      "Learn how to strengthen your body's natural defenses using time-tested Ayurvedic herbs and lifestyle practices.",
    date: "January 10, 2024",
    category: "Wellness",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Ashwagandha: The King of Ayurvedic Herbs",
    excerpt:
      "Explore the remarkable benefits of Ashwagandha for stress relief, energy, and overall vitality.",
    date: "January 5, 2024",
    category: "Herbs",
    readTime: "6 min read",
  },
];

export function BlogPreview() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left"
        >
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Ayurveda Insights
            </span>
            <h2 className="font-heading text-4xl font-bold md:text-5xl">
              Learn From Our Blog
            </h2>
          </div>
          <Button variant="outline" className="gap-2" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href="/blog" className="block">
                {/* Image Placeholder */}
                <div className="mb-4 aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="flex h-full items-center justify-center">
                    <span className="font-heading text-4xl text-primary/50">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="rounded-full bg-secondary px-3 py-1 font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                </div>

                {/* Title & Excerpt */}
                <h3 className="mb-2 font-heading text-xl font-semibold transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
