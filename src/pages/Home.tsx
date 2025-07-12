import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Calendar, Users, Award, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroCorporate from "@/assets/hero-corporate.jpg";
import heroParty from "@/assets/hero-party.jpg";

const heroSlides = [
  {
    image: heroParty,
    title: "Intimate Celebrations That Matter",
    subtitle: "Where celebrations are prioritized - Bespoke intimate experiences",
  },
  {
    image: heroCorporate,
    title: "Exclusive Small Company Gatherings",
    subtitle: "CEO meetings, team building, and intimate corporate events",
  },
  {
    image: heroWedding,
    title: "Personalized Private Events",
    subtitle: "Creating unforgettable moments for your special occasions",
  },
];

const services = [
  {
    icon: "🎯",
    title: "Event Planning & Coordination",
    description: "Comprehensive planning for Private Receptions and exclusive intimate experiences.",
    details: {
      fullDescription: "S&N Events specializes in Private Receptions and Curated Events for intimate gatherings. We believe that boutique celebrations have huge impact. With a focus on personalized service and attention to detail, every guest is VIP.",
      features: [
        "Personalized consultation to understand your vision",
        "Venue selection and coordination",
        "Event budget management",
        "Timeline creation and management",
        "Day-of coordination services",
        "Event staffing coordination",
        "Vendor coordination and negotiations",
        "Bar setup and breakdown",
      ],
      timeline: "Booking typically begins 2-4 weeks before your event date",
    },
  },
  {
    icon: "🍽️",
    title: "Personalized Catering",
    description: "All types of personalized catering tailored to your intimate gathering's unique needs.",
    details: {
      fullDescription: "Our catering service focuses on creating memorable dining experiences for small groups. From elegant sit-down dinners to casual buffet spreads, we work with trusted partners to deliver exceptional cuisine that matches your event's atmosphere and your guests' preferences.",
      features: [
        "Custom menu development",
        "Dietary restriction accommodation",
        "Intimate dining experience design",
        "Premium ingredient sourcing",
        "Professional service staff",
        "Table service coordination",
        "Special occasion cake coordination",
        "Beverage pairing recommendations",
      ],
      timeline: "Menu planning begins 2-3 weeks before your event date",
    },
  },
  {
    icon: "🤝",
    title: "Small Company Gatherings",
    description: "CEO meetings, executive retreats, and intimate team building for small companies.",
    details: {
      fullDescription: "Perfect for small companies looking to create meaningful connections. We specialize in CEO meetings, executive get-togethers, and team building experiences that foster collaboration and strengthen relationships in an intimate setting.",
      features: [
        "Intimate venue sourcing and management",
        "Personalized catering arrangements",
        "Team building activity coordination",
        "Meeting facilitation support",
        "Networking session planning",
        "Professional atmosphere creation",
        "Executive retreat planning",
        "Small group dynamics optimization",
      ],
      timeline: "Planning typically begins 3-6 weeks before your event date",
    },
  },
  {
    icon: "🍸",
    title: "Mobile Bar Services",
    description: "Professional cocktail services bringing the bar experience to your intimate gathering.",
    details: {
      fullDescription: "Elevate your intimate gathering with our mobile bar services. From craft cocktails to wine pairings, we bring professional bartending and premium beverages to create a sophisticated atmosphere for your guests.",
      features: [
        "Professional bartender service",
        "Premium beverage selection",
        "Custom cocktail menu creation",
        "Mobile bar setup and styling",
        "Glassware and bar equipment",
        "Cocktail consultation and tasting",
        "Non-alcoholic specialty drinks",
      ],
      timeline: "Menu planning begins 2-3 weeks before your event date",
    },
  },
  {
    icon: "🎨",
    title: "Event Décor & Setup",
    description: "Beautiful décor for all types of events - picnic setups, backdrop design, and balloon décor.",
    details: {
      fullDescription: "Transform any space into something magical with our comprehensive décor services. We specialize in picnic setups, elegant backdrop designs, and creative balloon arrangements that create the perfect atmosphere for your intimate celebration.",
      features: [
        "Picnic setup with styling",
        "Custom backdrop design and setup",
        "Balloon décor arrangements",
        "Table styling and centerpieces",
        "Lighting and ambiance creation",
        "Theme-based decoration",
        "Setup and breakdown services",
        "Photography-ready styling",
      ],
      timeline: "Design planning begins 1-3 weeks before your event date",
    },
  },
];

const stats = [
  { number: "Fresh", label: "Innovative Approach" },
  { number: "100%", label: "Personalized Service" },
  { number: "VIP", label: "Every Guest Experience" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="pt-16">
      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-serif text-brand-accent flex items-center">
                <span className="text-3xl mr-2">{selectedService?.icon}</span>
                {selectedService?.title}
              </DialogTitle>
              <DialogClose className="h-6 w-6 text-muted-foreground hover:text-brand-accent">
                <X className="h-6 w-6" />
              </DialogClose>
            </div>
            <DialogDescription className="text-lg text-muted-foreground pt-2">
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                {selectedService?.details.fullDescription}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-brand-accent mb-2">What We Offer:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {selectedService?.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-primary mr-2">•</span>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-cream/30 p-4 rounded-md">
              <p className="text-sm text-brand-accent">
                <span className="font-medium">Planning Timeline: </span>
                {selectedService?.details.timeline}
              </p>
            </div>

            <div className="pt-4 flex justify-center">
              <Button asChild className="bg-gradient-primary hover:shadow-primary text-brand-accent font-bold border border-brand-accent shadow-xl drop-shadow-lg">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-brand-accent/60" />
          </div>
        ))}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block w-full md:w-auto bg-white/40 dark:bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 px-8 py-8 mb-6 animate-fade-in-up">
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 text-brand-accent drop-shadow-md">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl mb-0 text-brand-accent/90 animate-fade-in-up">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <Button asChild size="lg" className="bg-brand-primary/95 backdrop-blur-lg hover:bg-brand-primary hover:shadow-primary text-brand-accent font-bold border border-brand-accent shadow-xl drop-shadow-lg">
                  <Link to="/contact">
                    Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-white/80 backdrop-blur-lg hover:bg-white/90 text-brand-accent font-bold border border-white/70 shadow-xl drop-shadow-lg">
                  <Link to="/gallery">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-brand-primary transition-colors"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-brand-primary transition-colors"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-brand-primary" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-accent mb-6">
              Premier Events Company in Randburg
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded in June 2025, <span className="brand-font text-brand-accent">S&N Events</span> brings fresh perspectives and innovative ideas to
              event planning across South Africa. We specialize in turning your vision into
              reality with meticulous planning, creative design, and flawless execution.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-brand-accent mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to micro-celebrations, we create memorable
              experiences tailored to your unique style and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:animate-float">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-xl text-brand-accent mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button
                    variant="secondary"
                    className="text-brand-primary hover:text-brand-accent"
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-primary text-white hover:shadow-elegant">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-brand-accent mb-4">
              Why Choose <span className="brand-font">S&N Events</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Where celebrations are prioritized - Specializing in intimate, exclusive experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-t-4 border-t-brand-primary">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-brand-accent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At <span className="brand-font text-brand-accent">S&N Events</span>, we believe that small gatherings have huge impact. With a focus on personalized service and attention to detail, every guest is VIP. From private celebrations to executive meetings, we create unforgettable experiences that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-cta text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Perfect Intimate Celebration?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let us help you create memories that will last a lifetime. Our personalized approach ensures every detail reflects your unique vision for your Select Gathering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cta-button font-semibold border border-white">
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" className="cta-button font-semibold border border-white">
              <Link to="/about">
                <Users className="mr-2 h-5 w-5" />
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}