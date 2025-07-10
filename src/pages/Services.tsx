import { Check, Heart, Building, PartyPopper, Baby, Rocket, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning & Coordination",
    description: "Complete wedding services from engagement to reception",
    features: [
      "Full wedding planning and coordination",
      "Venue selection and booking",
      "Vendor management and coordination",
      "Timeline creation and management",
      "Day-of coordination services",
      "Bridal party assistance",
      "Wedding rehearsal coordination",
      "Emergency problem solving"
    ],
    price: "From R15,000",
    popular: true
  },
  {
    icon: Building,
    title: "Corporate Events",
    description: "Professional business events that enhance your brand",
    features: [
      "Conference and seminar planning",
      "Corporate gala dinners",
      "Team building events",
      "Product launches",
      "Award ceremonies",
      "Board meetings and retreats",
      "Trade show coordination",
      "Client entertainment events"
    ],
    price: "From R8,000",
    popular: false
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    description: "Intimate celebrations tailored to your vision",
    features: [
      "Birthday party planning",
      "Anniversary celebrations",
      "Graduation parties",
      "Holiday celebrations",
      "Themed party coordination",
      "Entertainment booking",
      "Catering coordination",
      "Party favors and gifts"
    ],
    price: "From R5,000",
    popular: false
  },
  {
    icon: Baby,
    title: "Baby Showers & Gender Reveals",
    description: "Celebrating life's precious new beginnings",
    features: [
      "Baby shower planning",
      "Gender reveal parties",
      "Christening celebrations",
      "First birthday parties",
      "Themed decorations",
      "Game coordination",
      "Photography arrangements",
      "Keepsake creation"
    ],
    price: "From R3,500",
    popular: false
  },
  {
    icon: Rocket,
    title: "Product Launches",
    description: "Memorable launches that create buzz",
    features: [
      "Launch event planning",
      "Media coordination",
      "Influencer management",
      "Brand activation",
      "Press conference setup",
      "Product demonstration areas",
      "Photography and videography",
      "Social media coordination"
    ],
    price: "From R12,000",
    popular: false
  },
  {
    icon: Palette,
    title: "Event Décor & Styling",
    description: "Transform any space with stunning design",
    features: [
      "Complete venue transformation",
      "Floral arrangements",
      "Lighting design",
      "Furniture and linen rental",
      "Centerpiece creation",
      "Backdrop and stage design",
      "Color scheme coordination",
      "Theme implementation"
    ],
    price: "From R4,000",
    popular: false
  }
];

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "How far in advance should I book your services?",
        answer: "We recommend booking at least 3-6 months in advance for weddings and major events. For smaller celebrations, 4-6 weeks is usually sufficient. However, we can accommodate shorter timelines depending on availability."
      },
      {
        question: "Do you provide services outside of Randburg?",
        answer: "Yes, we serve clients throughout Gauteng and can arrange events anywhere in South Africa. Additional travel costs may apply for events outside our primary service area."
      },
      {
        question: "What's included in your planning packages?",
        answer: "Our packages vary by service type and can be customized to your needs. Generally, they include initial consultation, planning coordination, vendor management, timeline creation, and day-of coordination."
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
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we offer comprehensive 
            event planning services tailored to make your special day unforgettable.
          </p>
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
                  service.popular ? 'border-brand-gold border-2' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-gold text-brand-navy px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 rounded-full mb-4 mx-auto">
                    <service.icon className="h-8 w-8 text-brand-gold" />
                  </div>
                  <CardTitle className="text-xl text-brand-navy">
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
                        <Check className="h-4 w-4 text-brand-gold flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-2xl font-bold text-brand-navy mb-4">
                      {service.price}
                    </div>
                    <Button className="w-full bg-gradient-gold hover:shadow-gold text-brand-navy">
                      Get Quote
                    </Button>
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
            <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold text-brand-navy rounded-full text-2xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="font-semibold text-xl text-brand-navy mb-2">
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
            <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="font-semibold text-xl text-brand-gold mb-4">
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left font-medium text-brand-navy hover:text-brand-gold">
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
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your event requirements and create a customized 
            proposal that fits your vision and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-semibold">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}