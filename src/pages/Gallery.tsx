import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverButton } from "@/components/ui/hover-button";
import { Calendar, Users, Heart, Building, Baby, Gift } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroCorporate from "@/assets/hero-corporate.jpg";
import heroParty from "@/assets/hero-party.jpg";
import gardenWedding from "@/assets/garden-wedding.jpg";
import vodacom from "@/assets/vodacom.jpg";
import babyShower from "@/assets/baby-shower.jpg";

const categories = [
  { id: "all", name: "All Events", icon: Calendar },
  { id: "weddings", name: "Weddings", icon: Heart },
  { id: "corporate", name: "Corporate", icon: Building },
  { id: "parties", name: "Private Parties", icon: Users },
  { id: "baby", name: "Baby Showers", icon: Baby },
  { id: "launches", name: "Product Launches", icon: Gift },
];

const galleryItems = [
  {
    id: 1,
    category: "weddings",
    title: "Shepstone Gardens Wedding",
    description: "A blend of traditional and modern elements in a lush garden setting",
    image: heroWedding,
    client: "Thabo & Lerato"
  },
  {
    id: 2,
    category: "corporate",
    title: "Vodacom Annual Conference",
    description: "Sophisticated corporate event at Sandton Convention Centre",
    image: vodacom,
    client: "Vodacom South Africa"
  },
  {
    id: 3,
    category: "parties",
    title: "40th at Melrose Arch",
    description: "Vibrant birthday celebration with custom decor and entertainment",
    image: heroParty,
    client: "Priya's 40th"
  },
  {
    id: 4,
    category: "weddings",
    title: "Lourensford Wine Estate Wedding",
    description: "Cape Dutch elegance with vineyard views and protea arrangements",
    image: gardenWedding,
    client: "Johan & Annika"
  },
  {
    id: 5,
    category: "corporate",
    title: "Coapsbeny Year-End Function",
    description: "Modern African-inspired decor with sophisticated networking areas",
    image: heroCorporate,
    client: "Coapsbeny"
  },
  {
    id: 6,
    category: "baby",
    title: "Baby Shower",
    description: "Cultural elements with modern touches at The Westcliff",
    image: babyShower,
    client: "Nthabiseng's Baby Shower"
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AuroraBackground className="h-[60vh]" showRadialGradient={true}>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-accent text-center">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center text-muted-foreground">
            Explore our portfolio of unforgettable South African events and celebrations
          </p>
        </motion.div>
      </AuroraBackground>

      {/* Category Filter */}
      <section className="py-12 bg-brand-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <HoverButton
                  key={category.id}
                  variant={activeCategory === category.id ? "primary" : "secondary"}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </HoverButton>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group cursor-pointer hover:shadow-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(item.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <HoverButton 
                        variant="primary" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        View Details
                      </HoverButton>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-brand-accent mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-2">{item.description}</p>
                    <p className="text-sm text-brand-primary font-medium">
                      Client: {item.client}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={galleryItems.find(item => item.id === selectedImage)?.image}
              alt="Gallery item"
              className="max-w-full max-h-full object-contain"
            />
            <HoverButton
              variant="primary"
              className="absolute top-4 right-4"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </HoverButton>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Dream Event in Johannesburg?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us bring your South African celebration to life with our local expertise and stunning décor
          </p>
          <HoverButton variant="secondary" size="lg" asChild>
            <a href="/contact">Start Planning Today</a>
          </HoverButton>
        </div>
      </section>
    </div>
  );
}