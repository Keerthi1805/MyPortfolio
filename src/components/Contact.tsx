import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm currently looking for internship opportunities. Whether you have a question
            or just want to say hi, I'll get back to you!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 space-y-6"
            >
              {/* Contact details */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:bhuvanakeerthi06@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm">bhuvanakeerthi06@gmail.com</span>
                  </a>
                  
                  <a
                    href="tel:+918464876202"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span>+91 84648 76202</span>
                  </a>
                  
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span>Amaravati, Andhra Pradesh, India</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-6">Connect with me</h3>
                
                <div className="flex gap-3">
                  <a
                    href="https://github.com/bhuvanakeerthi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-xl bg-secondary hover:bg-primary/10 transition-colors flex flex-col items-center gap-2"
                  >
                    <Github className="h-6 w-6" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/1805-dasari-bhuvana-keerthi-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-xl bg-secondary hover:bg-primary/10 transition-colors flex flex-col items-center gap-2"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Resume download */}
              <Button className="w-full" size="lg" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3"
            >
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="bg-secondary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-secondary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      required
                      className="bg-secondary/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="bg-secondary/50 resize-none"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;