import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Loader2, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function ContactSection() {
  const sectionRef = useScrollAnimation();
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!actor) {
      toast.error("Service not ready. Please try again.");
      return;
    }
    setLoading(true);
    try {
      await actor.submitContactForm(name, email, message);
      setSuccess(true);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      data-ocid="contact.section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="font-mono text-neon-blue text-sm mb-2">
          {"# get_in_touch"}
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">
          Contact Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="glass-card rounded-2xl p-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-6">
            Send a Message
          </h3>

          {success && (
            <div
              data-ocid="contact.success_state"
              className="mb-6 p-4 rounded-xl bg-green-400/10 border border-green-400/30 text-green-400 font-mono text-sm text-center"
            >
              ✓ Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label
                htmlFor="contact-name"
                className="font-mono text-xs text-neon-blue"
              >
                {"// name"}
              </Label>
              <Input
                id="contact-name"
                data-ocid="contact.name_input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="bg-muted/50 border-border/50 focus:border-neon-blue font-body"
                required
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="contact-email"
                className="font-mono text-xs text-neon-blue"
              >
                {"// email"}
              </Label>
              <Input
                id="contact-email"
                data-ocid="contact.email_input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-muted/50 border-border/50 focus:border-neon-blue font-body"
                required
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="contact-message"
                className="font-mono text-xs text-neon-blue"
              >
                {"// message"}
              </Label>
              <Textarea
                id="contact-message"
                data-ocid="contact.message_textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                rows={5}
                className="bg-muted/50 border-border/50 focus:border-neon-blue font-body resize-none"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              data-ocid="contact.submit_button"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-blue font-mono gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-8 space-y-6">
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">
              Contact Details
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:salma3962024@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:neon-glow-blue transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">
                    Email
                  </p>
                  <p className="text-sm font-semibold group-hover:text-neon-blue transition-colors">
                    salma3962024@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                <div className="w-10 h-10 rounded-lg bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">
                    Location
                  </p>
                  <p className="text-sm font-semibold">Warangal, India</p>
                </div>
              </div>

              <a
                href="https://github.com/Mahi-tech-c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:neon-glow-purple transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center">
                  <Github className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">
                    GitHub
                  </p>
                  <p className="text-sm font-semibold group-hover:text-neon-purple transition-colors">
                    github.com/Mahi-tech-c
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center">
            <p className="font-mono text-xs text-muted-foreground mb-2">
              {"// response_time"}
            </p>
            <p className="text-sm text-foreground/80">
              I typically respond within{" "}
              <span className="text-neon-blue font-semibold">
                24\u201348 hours
              </span>
              . Looking forward to connecting!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
