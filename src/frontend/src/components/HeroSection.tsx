import { Button } from "@/components/ui/button";
import { ChevronDown, Code2, Monitor, Radio, Wrench, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const floatingIcons = [
  {
    icon: Zap,
    delay: "0s",
    top: "15%",
    left: "8%",
    right: undefined,
    anim: "animate-float-1",
  },
  {
    icon: Monitor,
    delay: "1.5s",
    top: "70%",
    left: "5%",
    right: undefined,
    anim: "animate-float-2",
  },
  {
    icon: Code2,
    delay: "0.5s",
    top: "20%",
    left: undefined,
    right: "6%",
    anim: "animate-float-3",
  },
  {
    icon: Wrench,
    delay: "2s",
    top: "65%",
    left: undefined,
    right: "8%",
    anim: "animate-float-4",
  },
  {
    icon: Radio,
    delay: "1s",
    top: "45%",
    left: "3%",
    right: undefined,
    anim: "animate-float-1",
  },
];

const roles = [
  "B.Tech Tools & Technologies Student",
  "Future Software Developer",
  "Problem Solver",
  "Tech Enthusiast",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          60,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.82_0.18_210_/_0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,oklch(0.62_0.26_297_/_0.08),transparent)]" />

      {floatingIcons.map(({ icon: Icon, delay, top, left, right, anim }, i) => (
        <div
          key={anim + i.toString()}
          className={`absolute ${anim} pointer-events-none`}
          style={{ top, left, right, animationDelay: delay }}
        >
          <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
            <Icon className="w-5 h-5 text-neon-blue opacity-60" />
          </div>
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-mono text-neon-blue border border-neon-blue/30">
              <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
              Available for Internships
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I&apos;m <span className="gradient-text">Salma Tabassum</span>
            </h1>

            <div className="font-mono text-lg text-muted-foreground min-h-[28px]">
              <span className="text-neon-blue">{"\u003e "}</span>
              {displayed}
              <span className="cursor-blink text-neon-blue">|</span>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              Passionate B.Tech Tools &amp; Technologies student focused on
              building software solutions, learning modern technologies, and
              contributing to innovative projects. Seeking opportunities to grow
              as a developer through internships and real-world projects.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-blue font-mono text-sm"
                data-ocid="hero.primary_button"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 font-mono text-sm"
                data-ocid="hero.secondary_button"
              >
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-muted-foreground hover:text-neon-blue font-mono text-sm"
                data-ocid="hero.contact_button"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full avatar-glow" />
              <div
                className="absolute -inset-4 rounded-full border-2 border-dashed border-neon-blue/30"
                style={{ animation: "spin 20s linear infinite" }}
              />
              <div
                className="absolute -inset-8 rounded-full border border-neon-purple/20"
                style={{ animation: "spin 30s linear infinite reverse" }}
              />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-neon-blue/50 avatar-glow">
                <img
                  src="/assets/uploads/image-1.png"
                  alt="Salma Tabassum"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-8 glass-card px-3 py-2 rounded-lg text-xs font-mono animate-float-2">
                <span className="text-neon-blue">CGPA</span>
                <span className="text-foreground ml-1 font-bold">8.97</span>
              </div>
              <div className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-lg text-xs font-mono animate-float-1">
                <span className="text-neon-purple">B.Tech</span>
                <span className="text-foreground ml-1">T&amp;T</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="font-mono text-xs">scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-neon-blue" />
      </div>
    </section>
  );
}
