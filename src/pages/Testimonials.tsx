import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    event: "Wedding - June 2024",
    rating: 5,
    text: "S&N Events made our wedding day absolutely perfect! Every detail was meticulously planned and executed. The floral arrangements were breathtaking, and the coordination was flawless. Our guests are still talking about how beautiful everything was.",
    image: "/src/assets/hero-wedding.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    event: "Corporate Launch - March 2024",
    rating: 5,
    text: "Professional, creative, and reliable. S&N Events transformed our product launch into an unforgettable experience. The modern décor and seamless execution impressed all our stakeholders. Highly recommended for corporate events.",
    image: "/src/assets/hero-corporate.jpg"
  },
  {
    id: 3,
    name: "Lisa Patel",
    event: "Baby Shower - May 2024",
    rating: 5,
    text: "The team at S&N Events created the most beautiful baby shower for me. The attention to detail was incredible, from the custom decorations to the perfect color scheme. Everything exceeded my expectations!",
    image: "/src/assets/hero-party.jpg"
  },
  {
    id: 4,
    name: "David Williams",
    event: "Anniversary Party - August 2024",
    rating: 5,
    text: "Celebrating our 25th anniversary was made extra special by S&N Events. They understood our vision perfectly and brought it to life with elegant decorations and seamless coordination. Thank you for making it memorable!",
    image: "/src/assets/hero-wedding.jpg"
  },
  {
    id: 5,
    name: "Amanda Roberts",
    event: "Birthday Celebration - July 2024",
    rating: 5,
    text: "From planning to execution, S&N Events was fantastic. They handled every detail of my 40th birthday party, allowing me to actually enjoy my own celebration. The decorations were stunning and the atmosphere was perfect.",
    image: "/src/assets/hero-party.jpg"
  },
  {
    id: 6,
    name: "James Thompson",
    event: "Corporate Gala - September 2024",
    rating: 5,
    text: "S&N Events delivered an exceptional corporate gala for our company. The sophisticated décor, lighting, and overall ambiance created the perfect environment for our annual celebration. Truly professional service.",
    image: "/src/assets/hero-corporate.jpg"
  }
];

const stats = [
  { number: "200+", label: "Happy Clients" },
  { number: "500+", label: "Events Planned" },
  { number: "5-Star", label: "Average Rating" },
  { number: "100%", label: "Client Satisfaction" }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-brand-primary text-brand-primary" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Client Testimonials
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">
            Hear what our clients say about their unforgettable events
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-accent font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-accent mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real clients who trusted us with their special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="hover:shadow-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 text-brand-primary mr-2" />
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-brand-accent">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-brand-primary">
                      {testimonial.event}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-accent mb-4">
              Video Testimonials
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch our clients share their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-subtle">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎥</div>
                  <p className="text-sm text-muted-foreground">Video testimonial coming soon</p>
                </div>
              </div>
              <h3 className="font-semibold text-brand-accent">Sarah & Michael's Wedding</h3>
              <p className="text-sm text-muted-foreground">Couple shares their wedding experience</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-subtle">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎥</div>
                  <p className="text-sm text-muted-foreground">Video testimonial coming soon</p>
                </div>
              </div>
              <h3 className="font-semibold text-brand-accent">Corporate Client Review</h3>
              <p className="text-sm text-muted-foreground">Executive shares event success story</p>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-accent mb-6">
              Share Your Experience
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Had an amazing event with us? We'd love to hear about your experience and share it with future clients.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a href="/contact">Submit Your Testimonial</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us create an unforgettable experience for your next event
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="/contact">Book Your Consultation</a>
          </Button>
        </div>
      </section>
    </div>
  );
}