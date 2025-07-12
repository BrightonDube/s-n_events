import { Award, Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Nono",
    role: "Co-Director",
    phone: "+27 64 984 1362",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: "Nono specializes in intimate event coordination and client relations, bringing passion and dedication to creating exclusive experiences for Private Receptions and boutique celebrations."
  },
  {
    name: "Shanna", 
    role: "Co-Director",
    phone: "+27 71 983 5562",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Shanna's creative vision and attention to detail specialize in personalized catering, mobile bar services, and beautiful décor setups that make every intimate gathering special."
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
          <h1 className="text-5xl md:text-6xl font-bold text-brand-accent text-center">
            About <span className="brand-font">S&N Events</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center text-muted-foreground">
            Founded in June 2025, we specialize in creating intimate, boutique celebrations that prioritize every guest's experience
          </p>
        </motion.div>
      </AuroraBackground>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-brand-accent mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nono and Shanna founded <span className="brand-font text-brand-accent">S&N Events</span> in June 2025 with a focused vision: 
                  to create intimate, exclusive experiences for Private Receptions and Select Gatherings. 
                  We believe that small gatherings have huge impact, and our specialized approach 
                  ensures every guest receives VIP treatment.
                </p>
                <p>
                  Since our launch, we've been curating relationships with venues perfect for intimate 
                  settings, partnering with specialized vendors, and perfecting our approach to 
                  personalized service. Each intimate gathering we coordinate reinforces our belief 
                  that quality over quantity creates truly memorable experiences.
                </p>
                <p>
                  Our expertise spans event planning and coordination, mobile bar services, 
                  personalized catering, small company gatherings, and beautiful décor setups 
                  including picnic arrangements and balloon styling.
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
              <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-6 rounded-lg shadow-primary">
                <div className="text-center">
                  <div className="text-3xl font-bold">June</div>
                  <div className="text-sm">2025 Founded</div>
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
            <Card className="border-l-4 border-l-brand-primary">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-brand-accent mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create intimate, exclusive experiences for boutique celebrations and Private Receptions 
                  where celebrations are prioritized. We believe that small gatherings have huge 
                  impact, and we're committed to ensuring every guest receives VIP treatment 
                  through personalized service and attention to detail.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-brand-accent">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-brand-accent mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as the specialists in intimate gatherings and exclusive 
                  experiences, known for transforming small celebrations into unforgettable 
                  moments. We envision a future where every intimate gathering becomes a 
                  cherished memory through our VIP approach to personalized service.
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
            <h2 className="font-serif text-4xl font-bold text-brand-accent mb-4">
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-brand-accent mb-3">
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
            <h2 className="font-serif text-4xl font-bold text-brand-accent mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our passionate team specializes in intimate gatherings, bringing creative expertise
              and personalized service to create VIP experiences for every guest.
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
                  <h3 className="font-semibold text-xl text-brand-accent mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-primary mb-3 font-medium">
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