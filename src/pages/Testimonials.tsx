import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Thabo & Lerato Molefe",
    event: "Wedding - August 2025",
    rating: 5,
    text: "S&N Events made our wedding at Shepstone Gardens absolutely magical! From the traditional ceremony elements to our modern reception, they honored all our cultural preferences while adding creative touches. The coordination with our different family groups was handled so respectfully. Baie dankie to the whole team!",
    image: "/src/assets/hero-wedding.jpg"
  },
  {
    id: 2,
    name: "Vodacom Corporate Events Team",
    event: "Product Launch - July 2025",
    rating: 4.5,
    text: "Our tech product launch at The Forum in Bryanston was exceptionally executed by S&N Events. Despite the complicated AV requirements and last-minute changes, they kept everything running seamlessly. The branded elements and attention to our company colors throughout the venue created perfect photo opportunities for our social media campaign.",
    image: "/src/assets/hero-corporate.jpg"
  },
  {
    id: 3,
    name: "Nthabiseng Khumalo",
    event: "Baby Shower - September 2025",
    rating: 5,
    text: "My baby shower at The Westcliff was beyond gorgeous! S&N Events incorporated our Ndebele heritage into modern decorations that wowed all my guests. They even coordinated with my favorite bakery in Parkhurst for a special koeksister tower instead of a traditional cake. Every detail was thoughtful and personal.",
    image: "/src/assets/hero-party.jpg"
  },
  {
    id: 4,
    name: "Johan & Annika van der Merwe",
    event: "Anniversary Celebration - October 2025",
    rating: 4.5,
    text: "We hosted our 10th anniversary at Lourensford Wine Estate, and S&N Events made it absolutely spectacular! They incorporated beautiful Cape Dutch elements that honored our heritage while keeping everything elegant and modern. Even with the unexpected rain, they quickly adapted with a beautiful marquee setup that actually made the event more intimate.",
    image: "/src/assets/hero-wedding.jpg"
  },
  {
    id: 5,
    name: "Priya Naidoo",
    event: "40th Birthday - November 2025",
    rating: 5,
    text: "My 40th at Melrose Arch was one for the books! Nono and Shanna understood exactly the blend of elegance and fun I wanted. The Bollywood-meets-contemporary theme was executed flawlessly with incredible attention to detail. My guests couldn't stop taking pictures of the gorgeous table settings and the custom cocktail bar. Worth every rand!",
    image: "/src/assets/hero-party.jpg"
  },
  {
    id: 6,
    name: "Standard Bank Leadership Team",
    event: "Year-End Function - December 2025",
    rating: 4.5,
    text: "Our year-end function at The Maslow needed to balance professional networking with celebration, and S&N Events nailed the brief perfectly. The African-inspired decor elements gave our international visitors a true taste of local culture while maintaining corporate elegance. The interactive food stations featuring South African cuisine were a particular highlight.",
    image: "/src/assets/hero-corporate.jpg"
  }
];

const stats = [
  { number: "25+", label: "Happy Clients" },
  { number: "40+", label: "Events Designed" },
  { number: "4.9", label: "Average Rating" },
  { number: "100%", label: "Client Satisfaction" }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      // For partial stars (only works with whole and half stars)
      const isHalfStar = i + 0.5 === rating;
      const isFilled = i < rating;
      
      return isHalfStar ? (
        <div key={i} className="relative">
          <Star className="h-4 w-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 fill-brand-primary text-brand-primary" />
          </div>
        </div>
      ) : (
        <Star
          key={i}
          className={`h-4 w-4 ${
            isFilled ? "fill-brand-primary text-brand-primary" : "text-gray-300"
          }`}
        />
      );
    });
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
              <Link to="/contact">Submit Your Testimonial</Link>
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
            <Link to="/contact">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}