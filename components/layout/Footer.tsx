import { emailAddress, phoneNumber } from "@/lib/utils";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <span className="font-heading text-2xl font-bold">Keshav</span>
            </Link>
            <p className="text-primary-foreground/80">
              Bringing the ancient wisdom of Ayurveda to modern wellness. 100%
              natural, pure, and authentic herbal products.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["Products", "About Us", "Blog", "Contact", "FAQs"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-semibold">Categories</h4>
            <ul className="space-y-2">
              {[
                "Immunity Boosters",
                "Hair Care",
                "Skin Care",
                "Digestive Health",
                "Stress Relief",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Saral Icon, Pranami Nagar, Vastral, Ahmedabad 382418
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  {phoneNumber}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  {emailAddress}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} VedicHerbs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/70">
            <Link href="#" className="hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary-foreground">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
