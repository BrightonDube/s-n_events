import { Award, Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sarah Nkomo",
    position: "Co-Founder & Creative Director",
    bio: "With 12 years in event design, Sarah brings artistic vision and meticulous attention to detail to every project.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Nathan Mthembu",
    position: "Co-Founder & Operations Manager",
    bio: "Nathan's background in hospitality management ensures seamless execution and exceptional client service.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Thandiwe Molefe",
    position: "Senior Event Coordinator",
    bio: "Thandiwe specializes in corporate events and has coordinated over 200 successful business gatherings.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Chen",
    position: "Lead Designer",
    bio: "David's innovative design concepts and vendor relationships help bring unique visions to life.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
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
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              About S&N Events
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Established in 2009, S&N Events has grown from a small startup to become 
              one of Randburg's most trusted event planning companies, creating magical 
              moments for over 500 clients across South Africa.
            </p>
          </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
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
                    {member.position}
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

      {/* Awards & Recognition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                <h3 className="font-semibold text-xl text-brand-navy mb-2">
                  Best Wedding Planner 2023
                </h3>
                <p className="text-muted-foreground">
                  South African Wedding Awards
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                <h3 className="font-semibold text-xl text-brand-navy mb-2">
                  Outstanding Corporate Events
                </h3>
                <p className="text-muted-foreground">
                  Gauteng Business Excellence Awards 2022
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                <h3 className="font-semibold text-xl text-brand-navy mb-2">
                  Customer Service Excellence
                </h3>
                <p className="text-muted-foreground">
                  Randburg Chamber of Commerce 2021
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}