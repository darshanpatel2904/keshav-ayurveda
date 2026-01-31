"use client";
import { motion } from "framer-motion";
import { Star, Phone, MessageCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { phoneNumber, sendWhatsappMessage } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl">
        {/* Image */}
        <Link href={`/product/${product.id}`} className="block">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground">
              {product.badge}
            </Badge>
            {product.originalPrice > product.price && (
              <Badge className="absolute right-3 top-3 bg-destructive text-destructive-foreground">
                {Math.round((1 - product.price / product.originalPrice) * 100)}%
                OFF
              </Badge>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="p-4">
          <Link href={`/product/${product.id}`}>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {product.category.replace("-", " ")}
            </p>
            <h3 className="mt-1 font-heading text-lg font-semibold line-clamp-1 group-hover:text-primary">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1">
            <Star className="h-4 w-4 fill-honey text-honey" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">
              ₹{product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 rounded-lg border border-border">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-8 text-center text-sm font-medium">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Total: ₹{product.price * quantity}
            </span>
          </div>

          {/* Inquiry Buttons */}
          <div className="mt-4 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 gap-2"
              asChild
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="h-4 w-4" />
                Call
              </a>
            </Button>
            <Button
              size="sm"
              className="flex-1 gap-2 bg-[#25D366] hover:bg-[#20BD5A]"
              onClick={() => sendWhatsappMessage(product, quantity)}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
