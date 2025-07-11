import { Award, Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Nono",
    role: "Co-Director",
    image: "/api/placeholder/300/300",
    bio: "With extensive experience in event planning and client relations, Nono brings passion and dedication to creating unforgettable celebrations.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Shanna",
    role: "Co-Director",
    image: "/api/placeholder/300/300",
    bio: "Shanna's creative vision and attention to detail ensure every event reflects our clients' unique style and exceeds their expectations.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  }
];

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "We pour our hearts into every event, treating each celebration as if it were our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every aspect of our service delivery.",
  },
  {
    icon: Users,
    title: "Client-Centered",
    description: "Your vision is our priority. We listen, understand, and deliver beyond expectations.",
  },
  {
    icon: Target,
    title: "Detail-Oriented",
    description: "From grand concepts to minute details, we ensure nothing is overlooked.",
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About S&N Events
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up leading-relaxed">
            Established in 2009, S&N Events has grown from a small startup to become 
            one of Randburg's most trusted event planning companies, creating magical 
            moments for over 500 clients across South Africa.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-brand-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sarah and Nathan founded S&N Events with a simple yet powerful vision: 
                  to create extraordinary experiences that celebrate life's most precious moments. 
                  What started as a passion project in a small Randburg office has evolved 
                  into a full-service event planning company.
                </p>
                <p>
                  Over the years, we've had the privilege of planning intimate garden parties, 
                  lavish weddings, corporate galas, and everything in between. Each event has 
                  taught us something new and reinforced our commitment to excellence.
                </p>
                <p>
                  Today, our team of dedicated professionals brings together diverse talents 
                  in design, coordination, and client relations to ensure every event we touch 
                  becomes an unforgettable memory.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop"
                  alt="S&N Events team planning session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-navy p-6 rounded-lg shadow-gold">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-brand-gold">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To transform your special occasions into extraordinary experiences through 
                  innovative planning, creative design, and flawless execution. We believe 
                  every celebration deserves to be perfect, and we're committed to making 
                  that belief a reality for each of our clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-brand-navy">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be South Africa's premier event planning company, known for our 
                  creativity, reliability, and ability to exceed expectations. We envision 
                  a future where every milestone celebration becomes a cherished memory 
                  through our dedicated service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and ensure consistent excellence 
              in our service delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-brand-gold" />
                  </div>
                  <h3 className="font-semibold text-xl text-brand-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of event professionals brings years of experience 
              and creative expertise to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 w-full md:w-[380px] mx-auto">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-brand-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-gold mb-3 font-medium">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}