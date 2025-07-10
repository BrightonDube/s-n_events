import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, HelpCircle, Calendar, CreditCard, Users, Settings } from "lucide-react";

const faqCategories = [
  { id: "all", name: "All Questions", icon: HelpCircle },
  { id: "services", name: "Services", icon: Settings },
  { id: "bookings", name: "Bookings", icon: Calendar },
  { id: "payments", name: "Payments", icon: CreditCard },
  { id: "events", name: "Event Planning", icon: Users }
];

const faqs = [
  {
    id: 1,
    category: "services",
    question: "What types of events do you specialize in?",
    answer: "We specialize in a wide range of events including weddings, corporate events, private parties, baby showers, product launches, anniversaries, and special celebrations. Our team has expertise in both intimate gatherings and large-scale events."
  },
  {
    id: 2,
    category: "services",
    question: "Do you provide both planning and décor services?",
    answer: "Yes! We offer comprehensive event planning services as well as stunning décor design and setup. You can choose our full-service package or select specific services based on your needs."
  },
  {
    id: 3,
    category: "bookings",
    question: "How far in advance should I book your services?",
    answer: "We recommend booking at least 3-6 months in advance for most events, and 12-18 months for weddings during peak season. However, we can accommodate shorter timelines depending on availability and event complexity."
  },
  {
    id: 4,
    category: "bookings",
    question: "What areas do you serve?",
    answer: "We're based in Randburg, Johannesburg, and serve clients throughout Gauteng and neighboring provinces. For destination events outside our primary service area, additional travel costs may apply."
  },
  {
    id: 5,
    category: "payments",
    question: "What is your payment structure?",
    answer: "We typically require a 50% deposit to secure your date, with the balance due 30 days before your event. We accept bank transfers, cash, and card payments. Payment plans can be arranged for larger events."
  },
  {
    id: 6,
    category: "payments",
    question: "Are there any hidden costs?",
    answer: "No, we believe in transparent pricing. All costs are clearly outlined in your quote, including any potential additional charges for changes or extra services. We'll never surprise you with unexpected fees."
  },
  {
    id: 7,
    category: "events",
    question: "Can you work with my existing vendors?",
    answer: "Absolutely! We're happy to coordinate with your preferred vendors and suppliers. We can also recommend trusted partners from our network if you need additional services."
  },
  {
    id: 8,
    category: "events",
    question: "What happens if it rains on my outdoor event?",
    answer: "We always have contingency plans for outdoor events. This includes backup indoor venues, tent rentals, or covered areas. Weather planning is discussed during our initial consultation."
  },
  {
    id: 9,
    category: "services",
    question: "Do you offer day-of coordination only?",
    answer: "Yes, we offer day-of coordination services for clients who prefer to plan their own events but want professional management on the day. This includes timeline management, vendor coordination, and troubleshooting."
  },
  {
    id: 10,
    category: "bookings",
    question: "Can I make changes to my event after booking?",
    answer: "Yes, changes can be made up to 30 days before your event, subject to vendor availability and potential cost adjustments. Major changes may require contract amendments."
  },
  {
    id: 11,
    category: "payments",
    question: "Do you offer payment plans?",
    answer: "Yes, we can arrange payment plans for events with budgets over R50,000. Payment schedules are customized based on your event timeline and requirements."
  },
  {
    id: 12,
    category: "events",
    question: "How do you handle dietary restrictions and allergies?",
    answer: "We work closely with our catering partners to accommodate all dietary requirements including vegetarian, vegan, gluten-free, halal, and kosher options. Guest dietary information is collected in advance."
  },
  {
    id: 13,
    category: "services",
    question: "Do you provide entertainment and music services?",
    answer: "While we don't provide entertainment directly, we have an extensive network of trusted DJs, bands, musicians, and entertainers that we can recommend and coordinate for your event."
  },
  {
    id: 14,
    category: "bookings",
    question: "What is included in a consultation?",
    answer: "Our complimentary 60-minute consultation includes discussing your vision, budget, timeline, venue options, and service requirements. We'll provide initial ideas and a preliminary quote."
  },
  {
    id: 15,
    category: "events",
    question: "How do you ensure events run on schedule?",
    answer: "We create detailed timelines and conduct rehearsals when necessary. Our team coordinates with all vendors and manages the schedule throughout your event to ensure smooth execution."
  }
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">
            Find answers to common questions about our event planning services
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-3 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {faqCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "primary" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={`item-${faq.id}`}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Card>
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <h3 className="text-left font-semibold text-brand-accent">
                          {faq.question}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="px-6 pb-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-accent mb-2">
                  No questions found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or browse a different category
                </p>
                <Button variant="primary" onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                  Show All Questions
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-accent mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/book-consultation">Book Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-semibold text-brand-accent mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our event planning experts
                </p>
                <div className="space-y-2">
                  <p className="text-brand-primary font-medium">
                    Nono: 0649841362
                  </p>
                  <p className="text-brand-primary font-medium">
                    Shanna: 0719835562
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-semibold text-brand-accent mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Send us your questions and we'll respond within 24 hours
                </p>
                <p className="text-brand-primary font-medium">
                  info@snnevents.co.za
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}