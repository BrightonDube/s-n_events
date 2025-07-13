import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverButton } from "@/components/ui/hover-button"
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HoverBackground } from '@/components/ui/hover-velocity-hero';

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Private Party",
  "Baby Shower",
  "Product Launch",
  "Anniversary",
  "Birthday Party",
  "Other"
];

const consultationModes = [
  { value: "virtual", label: "Virtual (Zoom/Teams)", icon: "💻" },
  { value: "in-person", label: "In-Person Meeting", icon: "🏢" },
  { value: "venue-visit", label: "Venue Visit", icon: "📍" }
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    consultationMode: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [invalidHistory, setInvalidHistory] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const validateField = (field: string, value: string): boolean => {
    switch (field) {
      case "firstName":
      case "lastName":
        return !value.trim();
      case "email":
        return !value.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(value);
      case "phone":
        // South African numbers: +27xxxxxxxxx or 0xxxxxxxxx where x is digit and total 9 digits after prefix
        return !value.trim() || !/^(\+27|0)[1-9][0-9]{8}$/.test(value);
      case "eventType":
      case "eventDate":
      case "preferredTime":
        return !value.trim();
      case "guestCount":
        return (
          !value.trim() ||
          isNaN(Number(value)) ||
          Number(value) < 1 ||
          Number(value) > 20
        );
      case "message":
        return !value.trim() || value.trim().length < 10;
      default:
        return false;
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTouched(prev => ({ ...prev, [field]: true }));

    const isInvalid = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: isInvalid }));

    if (isInvalid) {
      setInvalidHistory(prev => ({ ...prev, [field]: true }));
    }
  };

  const validateForm = () => {
    const fields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "eventType",
      "eventDate",
      "preferredTime",
      "guestCount",
      "message",
    ];

    const newErrors: Record<string, boolean> = {};
    fields.forEach((field) => {
      // @ts-ignore
      const value = formData[field];
      newErrors[field] = validateField(field, value);
      if (newErrors[field]) {
        setInvalidHistory((prev) => ({ ...prev, [field]: true }));
      }
    });

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    const fieldErrors = validateForm();
    if (Object.values(fieldErrors).some((v) => v)) {
      toast({
        title: "Incomplete form",
        description: "Please complete the highlighted fields before submitting.",
      });
      const firstInvalidField = Object.keys(fieldErrors).find((key) => fieldErrors[key]);
      if (firstInvalidField) {
        const el = document.getElementById(firstInvalidField);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          // @ts-ignore
          el.focus?.();
        }
      }
      return;
    }
    setIsSubmitting(true);
    try {
      // Prefill email body
      const emailBody = `Name: ${formData.firstName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AEvent Type: ${formData.eventType}%0D%0AEvent Date: ${formData.eventDate}%0D%0APreferred Time: ${formData.preferredTime}%0D%0AGuest Count: ${formData.guestCount}%0D%0ABudget: ${formData.budget}%0D%0AMessage: ${formData.message}`;
      const mailtoLink = `mailto:info@snnevents.co.za?subject=New Book Consultation Submission&body=${emailBody}`;
      window.location.href = mailtoLink;
      setIsSubmitted(true);
      // Reset validation state so borders return to default
      setErrors({});
      setTouched({});
      setInvalidHistory({});
      setSubmitAttempted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        budget: "",
        consultationMode: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-brand-cream flex items-center justify-center">
        <Card className="max-w-md mx-auto m-4">
          <CardContent className="text-center p-8">
            <CheckCircle className="h-16 w-16 text-brand-primary mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-brand-accent-light mb-4">
              Consultation Booked!
            </h2>
            <p className="text-muted-foreground mb-6">
              Thank you for booking a consultation with S&N Events. We'll contact you within 24 hours to confirm your appointment details.
            </p>
            <HoverButton variant="primary" onClick={() => setIsSubmitted(false)}>
              Book Another Consultation
            </HoverButton>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Helper to decide border colour
  const fieldClass = (field: string, base?: string) => {
    const invalid = errors[field];
    const hasBeenInvalid = invalidHistory[field];
    return cn(
      base,
      (submitAttempted || touched[field]) && invalid && "border-2 border-red-500 focus-visible:ring-red-500",
      touched[field] && !invalid && hasBeenInvalid &&
        "border-2 border-green-500 focus-visible:ring-green-500"
    );
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
            Book Your Free Consultation
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center text-white">
            Let's discuss your vision and create the perfect intimate celebration together
          </p>
        </motion.div>
      </HoverBackground>

      {/* Consultation Info */}
      <section className="py-12 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Clock className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                              <h3 className="font-semibold text-brand-accent-light mb-2">Free Consultation</h3>
              <p className="text-sm text-muted-foreground">60-minute complimentary session</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                              <h3 className="font-semibold text-brand-accent-light mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">Professional event planning advice</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                              <h3 className="font-semibold text-brand-accent-light mb-2">Flexible Location</h3>
              <p className="text-sm text-muted-foreground">Virtual, in-person, or venue visits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-brand-primary" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className={fieldClass("firstName")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className={fieldClass("lastName")}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className={fieldClass("email")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className={fieldClass("phone")}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Event Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-brand-primary" />
                    Event Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select value={formData.eventType} onValueChange={(value) => handleInputChange("eventType", value)}>
                        <SelectTrigger
                          id="eventType"
                          className={fieldClass("eventType", "bg-white")}
                        >
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Proposed Event Date *</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange("eventDate", e.target.value)}
                        required
                        className={fieldClass("eventDate")}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Expected Guest Count *</Label>
                      <Input
                        id="guestCount"
                        type="number"
                        placeholder="e.g., 10"
                        value={formData.guestCount}
                        onChange={(e) => handleInputChange("guestCount", e.target.value)}
                        required
                        className={fieldClass("guestCount")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range (ZAR)</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger
                          id="budget"
                          className={fieldClass("budget", "bg-white")}
                        >
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="under-50k">Under R50,000</SelectItem>
                          <SelectItem value="50k-100k">R50,000 - R100,000</SelectItem>
                          <SelectItem value="100k-200k">R100,000 - R200,000</SelectItem>
                          <SelectItem value="200k-500k">R200,000 - R500,000</SelectItem>
                          <SelectItem value="over-500k">Over R500,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Consultation Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-brand-primary" />
                    Consultation Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Consultation Mode *</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {consultationModes.map((mode) => (
                        <HoverButton
                          key={mode.value}
                          type="button"
                          variant={formData.consultationMode === mode.value ? "primary" : "secondary"}
                          className="justify-start"
                          onClick={() => handleInputChange("consultationMode", mode.value)}
                        >
                          <span className="mr-2">{mode.icon}</span>
                          {mode.label}
                        </HoverButton>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date *</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                        required
                        className={fieldClass("preferredDate")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time *</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                        <SelectTrigger
                          id="preferredTime"
                          className={fieldClass("preferredTime", "bg-white")}
                        >
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your vision *</Label>
                    <Textarea
                      id="message"
                      placeholder="Share any specific requirements, themes, or ideas you have in mind..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      required
                      className={fieldClass("message")}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <HoverButton type="submit" variant="primary" size="lg" className="px-8">
                  Book Consultation
                </HoverButton>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll contact you within 24 hours to confirm your consultation
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-brand-accent mb-4">
              Prefer to Call?
            </h2>
            <p className="text-muted-foreground">
              Speak directly with our event planning experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <Phone className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                                <h3 className="font-semibold text-brand-accent-light mb-2">Nono</h3>
              <p className="text-brand-primary font-medium"><a href="tel:0649841362" className="hover:underline">0649841362</a></p>
              <p className="text-sm text-muted-foreground">Director & Event Planner</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                                <h3 className="font-semibold text-brand-accent-light mb-2">Shanna</h3>
              <p className="text-brand-primary font-medium"><a href="tel:0719835562" className="hover:underline">0719835562</a></p>
              <p className="text-sm text-muted-foreground">Director & Event Coordinator</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 text-brand-primary">
              <Mail className="h-5 w-5" />
              <span className="font-medium"><a href="mailto:info@snnevents.co.za" className="hover:underline">info@snnevents.co.za</a></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}