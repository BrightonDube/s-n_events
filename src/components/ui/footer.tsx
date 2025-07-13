import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { HoverButton } from "@/components/ui/hover-button"
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-gradient-footer text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="brand-font text-2xl text-brand-primary">
              S&N Events
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Creating unforgettable moments through exceptional event planning and 
              décor services in Randburg and across South Africa.
            </p>
            <div className="flex space-x-4">
              <HoverButton variant="secondary" size="icon" className="hover:bg-brand-primary hover:text-white transition-all duration-300 hover:scale-110" asChild>
                <a href="https://www.facebook.com/profile.php?id=61577944757885" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </HoverButton>
              <HoverButton variant="secondary" size="icon" className="hover:bg-brand-primary hover:text-white transition-all duration-300 hover:scale-110" asChild>
                <a href="https://instagram.com/snn_events" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </HoverButton>
              <HoverButton variant="secondary" size="icon" className="hover:bg-brand-primary hover:text-white transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </HoverButton>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-brand-primary">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Blog", href: "/blog" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-brand-primary transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-brand-primary">Our Services</h4>
            <ul className="space-y-2">
              {["Event Planning & Coordination","Small Company Gatherings","Private Celebrations","Mobile Bar Services","Personalized Catering","Personalized Gifting","Event Décor & Setup"].map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-brand-primary">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-primary" />
                <a href="tel:0719835562" className="text-gray-300 hover:underline">0719835562 (Shanna)</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-primary" />
                <a href="tel:0649841362" className="text-gray-300 hover:underline">0649841362 (Nono)</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-primary" />
                <a href="mailto:info@snnevents.co.za" className="text-gray-300 hover:underline">info@snnevents.co.za</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-primary mt-1" />
                <span className="text-gray-300">
                  340 Surrey Avenue, Ferndale, Randburg, 2194
                </span>
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
            Created by <a href="http://bzeesolutions.online/" target="_blank" rel="noopener noreferrer" className="hover:underline">Brighton Dube</a>
          </p>
        </div>
      </div>
    </footer>
  );
}