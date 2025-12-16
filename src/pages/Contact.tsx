import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Building, Shield, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Get admin emails from environment variable (comma-separated)
    const adminEmails = import.meta.env.VITE_ADMIN_EMAILS || "a.svirski@simpity.eu";
    const adminEmailList = adminEmails.split(",").map(email => email.trim()).filter(Boolean);
    
    const templateParams = {
      from_name: formData.get("name") as string,
      from_email: formData.get("email") as string,
      company: formData.get("company") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      to_email: adminEmailList.join(", "), // EmailJS supports comma-separated emails
    };

    try {
      // EmailJS configuration - these should be in environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }

      if (adminEmailList.length === 0) {
        throw new Error("No admin emails configured. Please set VITE_ADMIN_EMAILS in your .env file.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      toast({
        title: "Message sent successfully",
        description: "We'll respond within 24-48 business hours.",
      });

      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly at info@simpity.eu",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-primary mb-4">// CONTACT</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Request a Technical Consultation
            </h1>
            <p className="text-xl text-muted-foreground">
              Discuss your specific engineering challenge with our senior architects. 
              All engagements are covered by strict NDA.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="e.g., Kernel driver development inquiry"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your technical challenge or requirements..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Direct Contact
                </h2>
                <a 
                  href="mailto:info@simpity.eu"
                  className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg font-medium text-foreground">info@simpity.eu</p>
                  </div>
                </a>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Confidentiality Guaranteed</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  All technical discussions are covered by NDA. We take your intellectual 
                  property and competitive advantages seriously.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Enterprise Inquiries</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  For enterprise-level engagements or custom capability development, 
                  contact us directly to schedule a technical assessment.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="font-semibold text-foreground mb-3">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to technical inquiries within 24-48 business hours. 
                  For urgent matters, please indicate so in your message subject.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
