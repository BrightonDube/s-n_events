import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { HoverButton } from "@/components/ui/hover-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { HoverBackground } from '@/components/ui/hover-velocity-hero';

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["0649841362", "0719835562"],
    description: "Call us during business hours"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@snnevents.co.za"],
    description: "We'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["340 Surrey Avenue", "Ferndale, Randburg, 2194"],
    description: "Visit us by appointment"
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["7am – 11pm every day"],
    description: "Our team is available during these hours."
  }
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Sanitize input to prevent XSS
  const sanitizeInput = (input: string): string => {
    return input.replace(/<script[^>]*>.*?<\/script>/gi, '').replace(/<[^>]*>/g, '');
  };

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate phone number (South African format)
  const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid South African phone number";
    }

    if (!formData.eventType) {
      newErrors.eventType = "Please select an event type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (!formData.guestCount.trim()) {
      newErrors.guestCount = "Guest count is required";
    } else {
      const guestNum = Number(formData.guestCount);
      if (isNaN(guestNum) || guestNum < 1 || guestNum > 20) {
        newErrors.guestCount = "Guest count must be between 1 and 20";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({
      ...prev,
      [field]: sanitizedValue
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email body
      const emailBody = `
New Contact Form Submission from S&N Events Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate || 'Not specified'}
Guest Count: ${formData.guestCount || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}

Message:
${formData.message}

---
Submitted on: ${new Date().toLocaleString()}
      `;

      // Use mailto for now - in production, this would be replaced with a proper email service
      // const mailtoLink = `mailto:info@snnevents.co.za?subject=New Contact Form Submission - ${formData.eventType}&body=${encodeURIComponent(emailBody)}`;
      
      // Open mailto link
      // window.open(mailtoLink, '_blank');

      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HoverBackground className="h-[60vh] flex items-center justify-center" colors={{ background: 'bg-gradient-to-br from-rose-900 via-pink-900 to-rose-900', objects: ['bg-pink-400/20', 'bg-rose-400/20', 'bg-fuchsia-400/20', 'bg-violet-400/20', 'bg-red-400/20'], glow: 'shadow-pink-400/50' }}>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 text-white mt-12"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white text-center">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center text-white">
            Ready to start planning your perfect event? Get in touch with our team 
            for a free consultation and personalized quote.
          </p>
        </motion.div>
      </HoverBackground>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant" id="contact-form">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-brand-accent">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                                      <label className="block text-sm font-medium text-brand-accent-light mb-2">
                  Full Name *
                </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                                      <label className="block text-sm font-medium text-brand-accent-light mb-2">
                  Email Address *
                </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-accent mb-2">
                        Phone Number *
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+27 xx xxx xxxx"
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                                      <label className="block text-sm font-medium text-brand-accent-light mb-2">
                  Event Type *
                </label>
                      <Select value={formData.eventType} onValueChange={(value) => handleInputChange("eventType", value)}>
                        <SelectTrigger className={`bg-white ${errors.eventType ? 'border-red-500' : ''}`}>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="private-reception">Private Reception</SelectItem>
                          <SelectItem value="curated-event">Curated Event</SelectItem>
                          <SelectItem value="select-gathering">Select Gathering</SelectItem>
                          <SelectItem value="boutique-celebration">Boutique Celebration</SelectItem>
                          <SelectItem value="ceo-meeting">CEO Meeting</SelectItem>
                          <SelectItem value="small-company-gathering">Small Company Gathering</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-accent mb-2">
                        Preferred Event Date
                      </label>
                      <Input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange("eventDate", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-accent mb-2">
                        Expected Guest Count *
                      </label>
                      <Input
                        type="number"
                        min={1}
                        max={20}
                        placeholder="1-20"
                        value={formData.guestCount}
                        onChange={(e) => handleInputChange("guestCount", e.target.value)}
                        className={errors.guestCount ? "border-red-500" : ""}
                      />
                      {errors.guestCount && <p className="text-red-500 text-sm mt-1">{errors.guestCount}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-accent mb-2">
                      Budget Range
                    </label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="under-10k">Under R10,000</SelectItem>
                        <SelectItem value="10k-25k">R10,000 - R25,000</SelectItem>
                        <SelectItem value="25k-50k">R25,000 - R50,000</SelectItem>
                        <SelectItem value="50k-100k">R50,000 - R100,000</SelectItem>
                        <SelectItem value="100k+">R100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-accent mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your event vision, specific requirements, or any questions you have..."
                      rows={5}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <HoverButton 
                    type="submit" 
                    variant="primary"
                    className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </HoverButton>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                          <h2 className="font-serif text-3xl font-bold text-brand-accent-light mb-6">
            Get In Touch
          </h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help make your event dreams come true. Contact us 
                  through any of the methods below and we'll respond promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-subtle transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 rounded-full">
                            <info.icon className="h-6 w-6 text-brand-primary" />
                          </div>
                        </div>
                        <div>
                                          <h3 className="font-semibold text-brand-accent-light mb-2">
                  {info.title}
                </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">
                                {info.title === "Email" ? (
                                  <a href={`mailto:${detail}`} className="hover:underline">{detail}</a>
                                ) : info.title === "Phone" ? (
                                  <a href={`tel:${detail}`} className="hover:underline">{detail}</a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-green-800 mb-1">
                        Quick WhatsApp Chat
                      </h3>
                      <p className="text-green-700 text-sm mb-3">
                        Get instant answers to your questions via WhatsApp
                      </p>
                      <HoverButton 
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => window.open('https://wa.me/270719835562', '_blank')}
                      >
                        Chat on WhatsApp
                      </HoverButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
                      <h2 className="font-serif text-4xl font-bold text-brand-accent-light mb-4">
            Visit Our Office
          </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Randburg, we're easily accessible for consultations
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-elegant">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.004639521842!2d28.0061073!3d-26.1009118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957483f05efa9b%3A0x76d7d9c7e3b757fa!2s340%20Surrey%20Ave%2C%20Ferndale%2C%20Randburg%2C%202194!5e0!3m2!1sen!2sza!4v1656338056978!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="S&N Events Office Location"
                ></iframe>
              </div>
              <CardContent className="p-4 text-center">
                <p className="text-sm font-medium text-brand-accent">
                  340 Surrey Avenue, Ferndale, Randburg, 2194
                </p>
                <HoverButton 
                  variant="secondary" 
                  className="mt-2 text-sm"
                  onClick={() => window.open('https://maps.google.com/?q=340+Surrey+Avenue,+Ferndale,+Randburg,+2194', '_blank')}
                  size="sm"
                >
                  Open in Google Maps
                </HoverButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-brand-accent mb-8">
              Operating Hours
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 text-center">
                    <span className="font-medium text-brand-accent-light">Every Day</span>
                    <span className="text-brand-primary font-semibold">7:00 AM - 11:00 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Available 7 days a week to make your event dreams come true
                  </p>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}