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
    icon: "💒",
    title: "Wedding Planning",
    description: "Comprehensive planning for your perfect day, from venues to vendors.",
    details: {
      fullDescription: "Our wedding planning service takes care of every detail of your special day. We handle venue selection, vendor coordination, decor design, timeline management, and on-the-day coordination. With S&N Events, you can enjoy your wedding day stress-free, knowing that every aspect is being handled with professionalism and care.",
      features: [
        "Personalized consultation to understand your vision",
        "Venue selection and management",
        "Vendor coordination and negotiations",
        "Custom decor design and setup",
        "Timeline creation and management",
        "Budget planning and tracking",
        "Day-of coordination services",
        "Post-event cleanup coordination",
      ],
      timeline: "Planning typically begins 8-12 months before your wedding date",
    },
  },
  {
    icon: "💼",
    title: "Corporate Events",
    description: "Professional event management for company gatherings and conferences.",
    details: {
      fullDescription: "Our corporate event planning services are designed to create professional, engaging, and memorable business events. From product launches to annual conferences, we handle all logistics and details so you can focus on your business objectives and connecting with your attendees.",
      features: [
        "Venue sourcing and management",
        "Audio-visual equipment setup",
        "Speaker and talent coordination",
        "Catering selection and management",
        "Registration and attendance tracking",
        "Marketing material coordination",
        "Transportation logistics",
        "Post-event reporting and analysis",
      ],
      timeline: "Planning typically begins 3-6 months before your event date",
    },
  },
  {
    icon: "🎉",
    title: "Party Planning",
    description: "Intimate celebrations tailored to your vision",
    details: {
      fullDescription: "Make your special occasion truly memorable with our party planning services. Whether it's a milestone birthday, anniversary celebration, baby shower, or just a gathering of friends, we'll handle everything from theme development to execution so you can enjoy being a guest at your own event.",
      features: [
        "Theme conceptualization and design",
        "Venue decoration and setup",
        "Entertainment and activity planning",
        "Catering and beverage coordination",
        "Invitation design and RSVP management",
        "Photography and videography arrangements",
        "Party favors and gifts coordination",
        "On-site event management",
      ],
      timeline: "Planning typically begins 1-3 months before your event date",
    },
  },
  {
    icon: "✨",
    title: "Event Décor",
    description: "Beautiful, customized decorations that bring your vision to life.",
    details: {
      fullDescription: "Transform any space into a breathtaking environment with our custom event décor services. Our expert designers will create a personalized look that reflects your vision and exceeds your expectations, from elegant floral arrangements to dramatic lighting and immersive themed environments.",
      features: [
        "Custom design conceptualization",
        "Floral arrangements and installations",
        "Lighting design and setup",
        "Furniture and linen selection",
        "Table settings and centerpieces",
        "Backdrop and stage design",
        "Entrance and focal point décor",
        "Themed props and accessories",
      ],
      timeline: "Planning typically begins 2-4 months before your event date",
    },
  },
];

const testimonials = [
  {
    name: "Sarah Dlamini",
    text: "S&N Events made our wedding absolutely perfect. Every detail was flawlessly executed!",
    rating: 5,
  },
  {
    name: "Duduzani Mthembu",
    text: "Outstanding corporate event management. Professional, creative, and stress-free experience.",
    rating: 4,
  },
  {
    name: "Oratile Molefe",
    text: "They turned our vision into reality. Couldn't have asked for a better team!",
    rating: 4,
  },
];

const stats = [
  { number: "15+", label: "Events Planned" },
  { number: "Fresh", label: "Innovative Approach" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "7+", label: "Vendor Partners" },
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
              <DialogTitle className="text-2xl font-serif text-brand-navy flex items-center">
                <span className="text-3xl mr-2">{selectedService?.icon}</span>
                {selectedService?.title}
              </DialogTitle>
              <DialogClose className="h-6 w-6 text-muted-foreground hover:text-brand-navy">
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
              <h4 className="text-lg font-medium text-brand-navy mb-2">What We Offer:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {selectedService?.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-cream/30 p-4 rounded-md">
              <p className="text-sm text-brand-navy">
                <span className="font-medium">Planning Timeline: </span>
                {selectedService?.details.timeline}
              </p>
            </div>

            <div className="pt-4 flex justify-center">
              <Button asChild className="bg-gradient-gold hover:shadow-gold text-brand-navy">
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
            <div className="absolute inset-0 bg-brand-navy/60" />
          </div>
        ))}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block w-full md:w-auto bg-white/40 dark:bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 px-8 py-8 mb-6 animate-fade-in-up">
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 text-brand-navy drop-shadow-md">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl mb-0 text-brand-navy/90 animate-fade-in-up">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <Button asChild size="lg" className="bg-brand-gold/95 backdrop-blur-lg hover:bg-brand-gold hover:shadow-gold text-brand-navy font-bold border border-brand-navy/30 shadow-xl drop-shadow-lg">
                  <Link to="/contact">
                    Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-white/80 backdrop-blur-lg hover:bg-white/90 text-brand-navy font-bold border border-white/70 shadow-xl drop-shadow-lg">
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
              Founded in June 2025, S&N Events brings fresh perspectives and innovative ideas to
              event planning across South Africa. We specialize in turning your vision into
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
                  <Button
                    variant="ghost"
                    className="text-brand-gold hover:text-brand-navy"
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
    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow" />
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
            <Button asChild size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-semibold border border-brand-navy">
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-semibold border border-brand-navy">
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