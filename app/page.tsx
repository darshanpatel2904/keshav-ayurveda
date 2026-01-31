import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <BenefitsSection />
        <TestimonialsSection />
        <BlogPreview />
        <NewsletterSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
