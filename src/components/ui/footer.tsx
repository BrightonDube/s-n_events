import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="text-white" style={{background: 'var(--gradient-footer)'}}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-brand-gold">
              S&N Events
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Creating unforgettable moments through exceptional event planning and 
              décor services in Randburg and across South Africa.
            </p>
            <div className="flex space-x-4">
              <Button variant="secondary" size="icon" className="hover:bg-brand-gold hover:text-brand-navy">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="icon" className="hover:bg-brand-gold hover:text-brand-navy">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="icon" className="hover:bg-brand-gold hover:text-brand-navy">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-brand-gold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Portfolio", href: "/gallery" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Blog", href: "/blog" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-brand-gold">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Wedding Planning",
                "Corporate Events",
                "Private Parties",
                "Baby Showers",
                "Product Launches",
                "Event Décor",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-brand-gold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-gold" />
                <span className="text-gray-300">0719835562 (Shanna)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-gold" />
                <span className="text-gray-300">0649841362 (Nono)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-gold" />
                <span className="text-gray-300">info@snnevents.co.za</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-gold mt-1" />
                <span className="text-gray-300">
                  340 Surrey Avenue, Ferndale, Randburg, 2194
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h5 className="font-medium text-brand-gold mb-2">Newsletter</h5>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button variant="primary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} S&N Events. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm mt-4 md:mt-0">
            Created by Brighton Dube
          </p>
        </div>
      </div>
    </footer>
  );
}