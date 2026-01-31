"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Filter,
  Grid3X3,
  List,
  SlidersHorizontal,
  ChevronRight,
  Search,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products, sortOptions, categories } from "@/data/products";
import Link from "next/link";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by price range
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query),
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, sortBy, priceRange, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setPriceRange([0, 1000]);
    setSearchQuery("");
  };

  const selectedCategoryName =
    categories.find((c) => c.id === selectedCategory)?.name || "All Products";

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
              <span className="text-foreground">Products</span>
              {selectedCategory !== "all" && (
                <>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-foreground">
                    {selectedCategoryName}
                  </span>
                </>
              )}
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <section className="bg-gradient-to-b from-secondary/50 to-background py-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="font-heading text-4xl font-bold md:text-5xl">
                {selectedCategoryName}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Discover our carefully curated collection of authentic Ayurvedic
                products, crafted with pure ingredients for your holistic
                wellness.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container">
            <div className="flex relative gap-8">
              {/* Desktop Filters Sidebar */}
              <div className="hidden w-64 shrink-0 lg:block">
                <div className="sticky top-24">
                  <ProductFilters
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    priceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                    onClearFilters={clearFilters}
                    isMobileOpen={false}
                    onCloseMobile={() => {}}
                  />
                </div>
              </div>

              {/* Mobile Filters */}
              <div className="lg:hidden">
                {isMobileFiltersOpen ? (
                  <ProductFilters
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    priceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                    onClearFilters={clearFilters}
                    isMobileOpen={isMobileFiltersOpen}
                    onCloseMobile={() => setIsMobileFiltersOpen(false)}
                  />
                ) : null}
              </div>
              {/* Products Grid */}
              <div className="flex-1">
                {/* Toolbar */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Mobile Filter Button */}
                    <Button
                      variant="outline"
                      className="lg:hidden"
                      onClick={() => setIsMobileFiltersOpen(true)}
                    >
                      <Filter className="mr-2 h-4 w-4" />
                      Filters
                    </Button>

                    {/* Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-48 pl-9 md:w-64"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Results Count */}
                    <p className="text-sm text-muted-foreground">
                      {filteredAndSortedProducts.length} products
                    </p>

                    {/* Sort */}
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {sortOptions.map((option) => (
                            <SelectItem key={option.id} value={option.id}>
                              {option.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* View Mode */}
                    <div className="hidden items-center gap-1 rounded-lg border border-border p-1 md:flex">
                      <Button
                        variant={viewMode === "grid" ? "secondary" : "ghost"}
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setViewMode("grid")}
                      >
                        <Grid3X3 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={viewMode === "list" ? "secondary" : "ghost"}
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setViewMode("list")}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Products Grid */}
                {filteredAndSortedProducts.length > 0 ? (
                  <div
                    className={`grid gap-6 ${
                      viewMode === "grid"
                        ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                        : "grid-cols-1"
                    }`}
                  >
                    {filteredAndSortedProducts.map((product, index) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                      />
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="mb-4 rounded-full bg-secondary p-6">
                      <Search className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="mb-2 font-heading text-xl font-semibold">
                      No products found
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Try adjusting your filters or search query
                    </p>
                    <Button onClick={clearFilters}>Clear All Filters</Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
