"use client";
import { motion } from "framer-motion";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { categories } from "@/data/products";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  onClearFilters: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  onClearFilters,
  isMobileOpen,
  onCloseMobile,
}: ProductFiltersProps) {
  const hasActiveFilters =
    selectedCategory !== "all" || priceRange[0] > 0 || priceRange[1] < 1000;
  const animateProps = isMobileOpen ? { x: 0 } : { x: "-100%" };
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/50 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Filter Sidebar */}
      <motion.aside
        initial={false}
        className={`fixed left-0 top-0 z-50 transition-transform delay-100 duration-200 h-full w-80 overflow-y-auto bg-background p-6 shadow-xl lg:relative lg:left-auto lg:top-auto lg:z-auto lg:h-auto lg:w-auto lg:translate-x-0 lg:p-0 lg:shadow-none`}
      >
        {/* Mobile Header */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <h2 className="font-heading text-xl font-semibold">Filters</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onCloseMobile}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 w-full justify-start text-destructive"
            onClick={onClearFilters}
          >
            <X className="mr-2 h-4 w-4" />
            Clear All Filters
          </Button>
        )}

        {/* Categories */}
        <div className="mb-8">
          <h3 className="mb-4 font-heading text-lg font-semibold">
            Categories
          </h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center">
                <Checkbox
                  id={category.id}
                  checked={selectedCategory === category.id}
                  onCheckedChange={() => onCategoryChange(category.id)}
                />
                <Label
                  htmlFor={category.id}
                  className="ml-3 flex flex-1 cursor-pointer items-center justify-between text-sm"
                >
                  <span>{category.name}</span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                    {category.count}
                  </span>
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <h3 className="mb-4 font-heading text-lg font-semibold">
            Price Range
          </h3>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={(value) =>
                onPriceRangeChange(value as [number, number])
              }
              min={0}
              max={1000}
              step={50}
              className="mb-4"
            />
            <div className="flex items-center justify-between text-sm">
              <span className="rounded bg-secondary px-2 py-1">
                ₹{priceRange[0]}
              </span>
              <span className="text-muted-foreground">to</span>
              <span className="rounded bg-secondary px-2 py-1">
                ₹{priceRange[1]}
              </span>
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold">
            Customer Rating
          </h3>
          <div className="space-y-3">
            {[4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <Checkbox id={`rating-${rating}`} />
                <Label
                  htmlFor={`rating-${rating}`}
                  className="ml-3 flex cursor-pointer items-center gap-1 text-sm"
                >
                  {rating}★ & above
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Apply Button */}
        <div className="mt-8 lg:hidden">
          <Button className="w-full" onClick={onCloseMobile}>
            Apply Filters
          </Button>
        </div>
      </motion.aside>
    </>
  );
}
