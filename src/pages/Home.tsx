import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Calendar, Users, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroCorporate from "@/assets/hero-corporate.jpg";
import heroParty from "@/assets/hero-party.jpg";

const heroSlides = [
  {
    image: heroWedding,
    title: "Unforgettable Wedding Experiences",
    subtitle: "Creating magical moments that last a lifetime",
  },
  {
    image: heroCorporate,
    title: "Professional Corporate Events",
    subtitle: "Elevating your business gatherings with sophistication",
  },
  {
    image: heroParty,
    title: "Memorable Celebrations",
    subtitle: "Bringing your special occasions to life",
  },
];

const services = [
  {
    title: "Wedding Planning",
    description: "Complete wedding coordination from concept to execution",
    icon: "💐",
  },
  {
    title: "Corporate Events",
    description: "Professional business events that leave lasting impressions",
    icon: "🏢",
  },
  {
    title: "Private Parties",
    description: "Intimate celebrations tailored to your vision",
    icon: "🎉",
  },
  {
    title: "Event Décor",
    description: "Stunning decorations that transform any space",
    icon: "✨",
  },
];

const testimonials = [
  {
    name: "Sarah Thompson",
    text: "S&N Events made our wedding absolutely perfect. Every detail was flawlessly executed!",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    text: "Outstanding corporate event management. Professional, creative, and stress-free experience.",
    rating: 5,
  },
  {
    name: "Lisa Johnson",
    text: "They turned our vision into reality. Couldn't have asked for a better team!",
    rating: 5,
  },
];

const stats = [
  { number: "500+", label: "Events Planned" },
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "50+", label: "Vendor Partners" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
            <div className="absolute inset-0 bg-brand-navy/60" />
          </div>
        ))}
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-up">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <Button asChild size="lg" className="bg-gradient-gold hover:shadow-gold text-brand-navy font-semibold">
                  <Link to="/contact">
                    Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-brand-gold transition-colors"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-brand-gold transition-colors"
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
                index === currentSlide ? "bg-brand-gold" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Premier Events Company in Randburg
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience, S&N Events has been creating extraordinary 
              celebrations across South Africa. We specialize in turning your vision into 
              reality with meticulous planning, creative design, and flawless execution.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">
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
            <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we create memorable 
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
                  <h3 className="font-semibold text-xl text-brand-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button variant="ghost" className="text-brand-gold hover:text-brand-navy">
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

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-l-brand-gold">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-brand-navy">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss your vision and create an unforgettable event that 
            exceeds your expectations. Book your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-semibold">
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
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