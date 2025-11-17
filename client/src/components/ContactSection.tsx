import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactSubmission } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectIdea: "",
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", projectIdea: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black" data-testid="text-contact-title">
              Ready to Build Your <span className="gradient-text">MVP?</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-medium" data-testid="text-contact-subtitle">
              Let's turn your vision into reality — schedule a free 30-minute consultation with our expert team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-bold">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={submitMutation.isPending}
                  className="h-12 text-base border-2"
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                  disabled={submitMutation.isPending}
                  className="h-12 text-base border-2"
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectIdea" className="font-bold">Project Idea</Label>
                <Textarea
                  id="projectIdea"
                  name="projectIdea"
                  value={formData.projectIdea}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  disabled={submitMutation.isPending}
                  className="text-base border-2"
                  data-testid="input-project-idea"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full group rounded-2xl h-14 text-base font-bold gradient-primary hover:scale-105 transition-all duration-300 glow-primary shadow-xl"
                disabled={submitMutation.isPending}
                data-testid="button-submit-contact"
              >
                {submitMutation.isPending ? "Sending..." : "Let's Talk"}
                {!submitMutation.isPending && (
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                )}
              </Button>
            </form>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black mb-6" data-testid="text-other-ways">
                  Other Ways to Reach Us
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:info@duaafluence.com"
                    className="flex items-center space-x-4 p-5 rounded-2xl bg-card border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group shadow-md hover:shadow-xl"
                    data-testid="link-email"
                  >
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-muted-foreground">info@duaafluence.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+13304592103"
                    className="flex items-center space-x-4 p-5 rounded-2xl bg-card border-2 border-transparent hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 group shadow-md hover:shadow-xl"
                    data-testid="link-phone"
                  >
                    <div className="w-14 h-14 rounded-xl gradient-primary-reverse flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold">Phone</p>
                      <p className="text-muted-foreground">+1 (330) 459-2103</p>
                    </div>
                  </a>

                  <a 
                    href="https://linkedin.com/company/duaafluence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-5 rounded-2xl bg-card border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group shadow-md hover:shadow-xl"
                    data-testid="link-linkedin"
                  >
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold">LinkedIn</p>
                      <p className="text-muted-foreground">/company/duaafluence</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
