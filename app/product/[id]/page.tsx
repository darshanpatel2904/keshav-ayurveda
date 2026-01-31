"use client";
import { motion } from "framer-motion";
import {
  Star,
  Heart,
  Share2,
  ChevronRight,
  Check,
  Leaf,
  Truck,
  RotateCcw,
  ShieldCheck,
  Minus,
  Plus,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { products } from "@/data/products";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { phoneNumber, sendWhatsappMessage } from "@/lib/utils";

const productDetails = {
  1: {
    ingredients: [
      "Ashoka",
      "Lodhra",
      "Shatavari",
      "Ashwagandha",
      "Dashmool",
      "Punarnava",
    ],
    benefits: [
      "Increases physical stamina",
      "Acts as a natural blood purifier",
      "Balances female hormones",
      "Supports reproductive health",
      "Complete natural and safe formula",
    ],
    usage: "Take 10-15ml twice a day with water or as directed by a physician.",
    dosage: "10-15ml twice daily",
    size: "500ml bottle",
  },
  2: {
    ingredients: [
      "Acai Berry",
      "Blueberry",
      "Raspberry",
      "Strawberry",
      "Blackberry",
      "Aloe Vera",
      "Goji Berry",
    ],
    benefits: [
      "Provides natural skin glow",
      "Boosts energy levels instantly",
      "High in antioxidants",
      "Supports immune system",
      "Helps in cellular rejuvenation",
    ],
    usage:
      "Drink 30ml daily mixed with a glass of water, preferably on an empty stomach.",
    dosage: "30ml daily",
    size: "900ml bottle",
  },
  3: {
    ingredients: [
      "Ashwagandha",
      "Shatavari",
      "Safed Musli",
      "Kaunch Beej",
      "Vidhara",
    ],
    benefits: [
      "Promotes healthy weight gain",
      "Boosts appetite naturally",
      "Enhances energy and stamina",
      "Improves muscle mass",
      "Supports overall growth",
    ],
    usage: "Take 1 tablet twice a day with milk or water after meals.",
    dosage: "2 tablets daily",
    size: "60 Tablets",
  },
  4: {
    ingredients: [
      "Green Coffee Bean",
      "Garcinia Cambogia",
      "Guggul",
      "Green Tea Extract",
      "Cinnamon",
    ],
    benefits: [
      "Burns stubborn body fat",
      "Enhances mental focus",
      "Boosts metabolism",
      "Controls appetite and cravings",
      "Naturally detoxifies the body",
    ],
    usage: "Take 1 tablet twice a day, 30 minutes before meals.",
    dosage: "2 tablets daily",
    size: "60 Tablets",
  },
  5: {
    ingredients: [
      "Pure Noni Fruit Extract",
      "Aloe Vera",
      "Garcinia",
      "Grape Seed Extract",
    ],
    benefits: [
      "Supports healthy immune system",
      "Improves digestion",
      "Powerful detoxifier",
      "Reduces joint pain and inflammation",
      "Enhances overall vitality",
    ],
    usage: "Mix 15-30ml in a glass of water. Consume twice daily before meals.",
    dosage: "15-30ml twice daily",
    size: "900ml bottle",
  },
};

const reviews = [
  {
    id: 1,
    name: "Amit Singh",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    comment:
      "Excellent quality product! I've been using it for a month now and can already see significant improvements. The packaging is great and delivery was fast.",
  },
  {
    id: 2,
    name: "Neha Gupta",
    rating: 5,
    date: "1 month ago",
    verified: true,
    comment:
      "This is exactly what I was looking for. Pure, natural, and effective. Will definitely order again!",
  },
  {
    id: 3,
    name: "Vikram Patel",
    rating: 4,
    date: "2 months ago",
    verified: true,
    comment:
      "Good product overall. Took some time to see results but definitely worth the wait. Customer service was very helpful.",
  },
];

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const productId = parseInt(id || "1");
  const product = products.find((p) => p.id === productId) || products[0];
  const details =
    productDetails[productId as keyof typeof productDetails] ||
    productDetails[1];

  const images = [product.image, product.image, product.image];

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
              <Link href="/products" className="hover:text-primary">
                Products
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Images */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card">
                  <Image
                    src={images[selectedImage]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                  <Badge className="absolute left-4 top-4 bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                        selectedImage === idx
                          ? "border-primary"
                          : "border-border"
                      }`}
                    >
                      <Image
                        src={img}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {product.category}
                  </p>
                  <h1 className="font-heading text-4xl font-bold md:text-5xl">
                    {product.name}
                  </h1>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-honey text-honey"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-primary">
                    ₹{product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        ₹{product.originalPrice}
                      </span>
                      <Badge variant="destructive">
                        {Math.round(
                          (1 - product.price / product.originalPrice) * 100,
                        )}
                        % OFF
                      </Badge>
                    </>
                  )}
                </div>

                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>

                {/* Size */}
                <div className="rounded-lg bg-secondary/50 p-4">
                  <p className="text-sm text-muted-foreground">
                    Size:{" "}
                    <span className="font-medium text-foreground">
                      {details.size}
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Dosage:{" "}
                    <span className="font-medium text-foreground">
                      {details.dosage}
                    </span>
                  </p>
                </div>

                {/* Quantity Selector */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 rounded-lg border border-border">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-lg font-medium">
                    Total:{" "}
                    <span className="text-primary">
                      ₹{product.price * quantity}
                    </span>
                  </span>
                  <div className="flex gap-2">
                    <Button size="lg" variant="outline">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Inquiry Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a href={`tel:${phoneNumber}`}>
                      <Phone className="h-5 w-5" />
                      Call to Inquire
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 gap-2 bg-[#25D366] hover:bg-[#20BD5A]"
                    onClick={() => sendWhatsappMessage(product, quantity)}
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Inquiry
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
                  {[
                    { icon: Leaf, text: "100% Natural" },
                    { icon: Truck, text: "Free Shipping" },
                    { icon: RotateCcw, text: "Easy Returns" },
                    { icon: ShieldCheck, text: "Secure Payment" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex flex-col items-center gap-2 text-center"
                    >
                      <div className="rounded-full bg-primary/10 p-3">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Tabs */}
        <section className="border-t border-border py-12">
          <div className="container">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="mb-8 w-full justify-start border-b border-border bg-transparent p-0">
                {[
                  "Description",
                  "Ingredients",
                  "Benefits",
                  "How to Use",
                  "Reviews",
                ].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab.toLowerCase().replace(" ", "-")}
                    className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="description" className="mt-0">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground">
                    {product.description} Our {product.name} is crafted using
                    traditional Ayurvedic methods combined with modern quality
                    standards. Each batch is carefully prepared to ensure
                    maximum potency and effectiveness.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="ingredients" className="mt-0">
                <ul className="space-y-3">
                  {details.ingredients.map((ingredient, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="benefits" className="mt-0">
                <ul className="grid gap-4 sm:grid-cols-2">
                  {details.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-lg bg-primary/5 p-4"
                    >
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="how-to-use" className="mt-0">
                <div className="rounded-lg bg-secondary/50 p-6">
                  <h4 className="mb-4 font-heading text-xl font-semibold">
                    Usage Instructions
                  </h4>
                  <p className="text-muted-foreground">{details.usage}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <Badge variant="outline">
                      Recommended: {details.dosage}
                    </Badge>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-0">
                <div className="space-y-6">
                  {/* Review Summary */}
                  <div className="flex items-center gap-8 rounded-lg bg-secondary/50 p-6">
                    <div className="text-center">
                      <p className="font-heading text-5xl font-bold text-primary">
                        {product.rating}
                      </p>
                      <div className="mt-2 flex justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-honey text-honey"
                          />
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {product.reviews} reviews
                      </p>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-2">
                          <span className="w-3 text-sm">{stars}</span>
                          <Star className="h-4 w-4 fill-honey text-honey" />
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
                            <div
                              className="h-full rounded-full bg-honey"
                              style={{
                                width: `${stars === 5 ? 70 : stars === 4 ? 20 : 10}%`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-border pb-6"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold">{review.name}</p>
                              {review.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  <Check className="mr-1 h-3 w-3" />
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                              <div className="flex gap-0.5">
                                {Array.from({ length: review.rating }).map(
                                  (_, i) => (
                                    <Star
                                      key={i}
                                      className="h-4 w-4 fill-honey text-honey"
                                    />
                                  ),
                                )}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="mt-3 text-muted-foreground">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton
        message={`Hi! I'm interested in ${product.name}. Can you tell me more?`}
      />
    </div>
  );
}
