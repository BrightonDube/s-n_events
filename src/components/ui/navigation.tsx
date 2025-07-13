import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { HoverButton } from "@/components/ui/hover-button";
import { cn } from "@/lib/utils";
import snLogo from "@/assets/logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-x-2">
            <img src={snLogo} alt="S&N Events Logo" className="h-10 w-auto" />
            <h1 className="brand-font text-2xl text-brand-accent-light">
            Events
          </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-full transition-all duration-300 font-medium group",
                  isActive(item.href)
                    ? "bg-brand-primary/10 text-brand-primary font-semibold shadow-sm"
                    : "text-foreground hover:text-brand-primary hover:bg-brand-primary/5"
                )}
              >
                <span
                  className="inline-block transition-colors duration-300"
                >
                  {item.name}
                </span>
                <span
                  className={cn(
                    "absolute left-4 right-4 -bottom-1 h-0.5 bg-brand-primary rounded-full transition-transform duration-300 origin-left",
                    (isActive(item.href) ? "scale-x-100" : "scale-x-0"),
                    "group-hover:scale-x-100"
                  )}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <HoverButton 
              variant="primary"
              className="shadow-primary transition-all duration-300"
            >
              <Link to="/contact#contact-form">Book Consultation</Link>
            </HoverButton>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "text-brand-primary bg-brand-secondary"
                      : "text-foreground hover:text-brand-primary hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <a href="tel:0719835562" className="hover:underline">0719835562 (Shanna)</a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <a href="tel:0649841362" className="hover:underline">0649841362 (Nono)</a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@snnevents.co.za" className="hover:underline">info@snnevents.co.za</a>
                </div>
                <HoverButton variant="outline" className="w-full">
                  <Link to="/contact#contact-form" onClick={() => setIsOpen(false)}>
                    Book Consultation
                  </Link>
                </HoverButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}