import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Heart, Building, Baby, Gift } from "lucide-react";

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
    image: "/src/assets/hero-wedding.jpg",
    client: "Thabo & Lerato"
  },
  {
    id: 2,
    category: "corporate",
    title: "Vodacom Annual Conference",
    description: "Sophisticated corporate event at Sandton Convention Centre",
    image: "/src/assets/vodacom.jpg",
    client: "Vodacom South Africa"
  },
  {
    id: 3,
    category: "parties",
    title: "40th at Melrose Arch",
    description: "Vibrant birthday celebration with custom decor and entertainment",
    image: "/src/assets/hero-party.jpg",
    client: "Priya's 40th"
  },
  {
    id: 4,
    category: "weddings",
    title: "Lourensford Wine Estate Wedding",
    description: "Cape Dutch elegance with vineyard views and protea arrangements",
    image: "/src/assets/garden-wedding.jpg",
    client: "Johan & Annika"
  },
  {
    id: 5,
    category: "corporate",
    title: "Coapsbeny Year-End Function",
    description: "Modern African-inspired decor with sophisticated networking areas",
    image: "/src/assets/hero-corporate.jpg",
    client: "Coapsbeny"
  },
  {
    id: 6,
    category: "baby",
    title: "Baby Shower",
    description: "Cultural elements with modern touches at The Westcliff",
    image: "/src/assets/baby-shower.jpg",
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
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">
            Explore our portfolio of unforgettable South African events and celebrations
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "primary" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </Button>
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
                      <Button 
                        variant="primary" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        View Details
                      </Button>
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
            <Button
              variant="primary"
              className="absolute top-4 right-4"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </Button>
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
          <Button variant="accent" size="lg" asChild>
            <a href="/contact">Start Planning Today</a>
          </Button>
        </div>
      </section>
    </div>
  );
}