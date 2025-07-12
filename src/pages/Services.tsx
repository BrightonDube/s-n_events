import { Check, Target, Users, PartyPopper, Wine, ChefHat, Palette } from "lucide-react";
import { HoverButton } from "@/components/ui/hover-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    icon: Target,
    title: "Event Planning & Coordination",
    description: "Comprehensive planning for Private Receptions and intimate celebrations",
    features: [
      "Personalized consultation and vision development",
      "Venue selection and coordination",
      "Vendor management and coordination",
      "Timeline creation and management",
      "Day-of coordination services",
      "Event staffing coordination",
      "Budget management and tracking",
      "Post-event coordination"
    ],

    popular: true
  },
  {
    icon: Users,
    title: "Small Company Gatherings",
    description: "CEO meetings, executive retreats, and intimate team building",
    features: [
      "CEO meetings and executive sessions",
      "Small team building experiences",
      "Executive retreat planning",
      "Board meetings coordination",
      "Networking session planning",
      "Professional atmosphere creation",
      "Meeting facilitation support",
      "Small group dynamics optimization"
    ],

    popular: false
  },
  {
    icon: PartyPopper,
    title: "Private Celebrations",
    description: "Intimate celebrations and bespoke gatherings for special occasions",
    features: [
      "Birthday celebrations (milestone birthdays)",
      "Anniversary celebrations",
      "Small family gatherings",
      "Holiday celebrations",
      "Themed intimate parties",
      "Personalized entertainment coordination",
      "Special occasion coordination",
      "Memory-making experiences"
    ],

    popular: false
  },
  {
    icon: Wine,
    title: "Mobile Bar Services",
    description: "Professional cocktail services for your intimate gathering",
    features: [
      "Professional bartender service",
      "Premium beverage selection",
      "Custom cocktail menu creation",
      "Mobile bar setup and styling",
      "Glassware and bar equipment",
      "Cocktail consultation and tasting",
      "Non-alcoholic specialty drinks",
      "Bar setup and breakdown"
    ],

    popular: false
  },
  {
    icon: ChefHat,
    title: "Personalized Catering",
    description: "All types of personalized catering for intimate dining experiences",
    features: [
      "Custom menu development",
      "Dietary restriction accommodation",
      "Intimate dining experience design",
      "Premium ingredient sourcing",
      "Professional service staff",
      "Table service coordination",
      "Special occasion cake coordination",
      "Beverage pairing recommendations"
    ],

    popular: false
  },
  {
    icon: Palette,
    title: "Event Décor & Setup",
    description: "Beautiful décor for intimate events - picnic setups, backdrops, and balloon décor",
    features: [
      "Picnic setup with styling",
      "Custom backdrop design and setup",
      "Balloon décor arrangements",
      "Table styling and centerpieces",
      "Lighting and ambiance creation",
      "Theme-based decoration",
      "Setup and breakdown services",
      "Photography-ready styling"
    ],

    popular: false
  }
];

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "How far in advance should I book your services?",
        answer: "For Private Receptions and intimate celebrations, we recommend booking 2-8 weeks in advance. However, we can often accommodate shorter timelines depending on availability and service requirements."
      },
      {
        question: "Do you provide services outside of Randburg?",
        answer: "Yes, we serve clients throughout Gauteng and can arrange events anywhere in South Africa. Additional travel costs may apply for events outside our primary service area."
      },
      {
        question: "What's included in your planning packages?",
        answer: "Our packages are fully customized for boutique celebrations and Select Gatherings. They include personalized consultation, planning coordination, vendor management, timeline creation, and day-of coordination with VIP attention to every guest."
      }
    ]
  },
  {
    category: "Pricing",
    questions: [
      {
        question: "How do you structure your pricing?",
        answer: "Our pricing is based on the scope of services, event size, and complexity. We offer both package deals and à la carte services. All quotes are provided after an initial consultation to understand your specific needs."
      },
      {
        question: "Do you require a deposit?",
        answer: "Yes, we require a 50% deposit to secure your date, with the balance due 30 days before your event. We accept various payment methods for your convenience."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No, we believe in transparent pricing. All costs are outlined in your contract, including any potential additional charges for changes or extra services."
      }
    ]
  },
  {
    category: "Event Day",
    questions: [
      {
        question: "Will you be present on the day of the event?",
        answer: "Absolutely! Our team will be present from setup to breakdown to ensure everything runs smoothly. We coordinate all vendors and handle any issues that may arise."
      },
      {
        question: "What happens if there's bad weather for outdoor events?",
        answer: "We always have contingency plans for outdoor events, including backup venues or weather protection options. This is discussed and planned during our initial consultations."
      },
      {
        question: "Can I make changes to my event plans?",
        answer: "Yes, changes can be made up to 2 weeks before your event, subject to vendor availability and potential additional costs. We'll work with you to accommodate reasonable modifications."
      }
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive event planning and décor services for intimate gatherings and boutique celebrations across South Africa
          </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 ${
                  service.popular ? 'border-brand-primary border-2' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-primary text-brand-accent px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full mb-4 mx-auto">
                    <service.icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <CardTitle className="text-xl text-brand-accent">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-brand-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t">
                    <HoverButton className="w-full" variant="primary" asChild>
                      <a href="/contact">Get Quote</a>
                    </HoverButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-brand-accent mb-4">
              Our Planning Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure your event exceeds expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "We discuss your vision, budget, and requirements in detail."
              },
              {
                step: "02",
                title: "Planning & Design",
                description: "Our team creates a comprehensive plan and design concept."
              },
              {
                step: "03",
                title: "Coordination",
                description: "We manage all vendors, timelines, and logistics seamlessly."
              },
              {
                step: "04",
                title: "Event Execution",
                description: "On the day, we ensure everything runs perfectly to plan."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary text-brand-accent rounded-full text-2xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="font-semibold text-xl text-brand-accent mb-2">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-brand-accent mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Where celebrations are prioritized. Specializing in intimate gatherings
              and Curated Events for intimate celebrations, we believe that boutique
              gatherings have huge impact with VIP treatment for every guest.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="font-semibold text-xl text-brand-primary mb-4">
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left font-medium text-brand-accent hover:text-brand-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Create Your Perfect Intimate Celebration?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision for your Private Reception or Select Gathering and create a 
            personalized experience that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HoverButton size="lg" className="bg-brand-primary text-brand-accent hover:bg-brand-primary-light font-semibold" asChild>
              <a href="/contact">Get Free Quote</a>
            </HoverButton>
            <HoverButton variant="secondary" size="lg" asChild>
              <a href="/book-consultation">Schedule Consultation</a>
            </HoverButton>
          </div>
        </div>
      </section>
    </div>
  );
}