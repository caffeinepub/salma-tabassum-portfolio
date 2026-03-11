import { Code2, GraduationCap, MapPin, User } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const interests = [
  "Software Development",
  "Computer Networks",
  "Database Systems",
  "Data Structures & Algorithms",
  "Embedded Systems",
  "Open Source",
];

const stats = [
  { icon: GraduationCap, label: "CGPA", value: "8.97" },
  { icon: Code2, label: "Projects", value: "3+" },
  { icon: User, label: "Year", value: "2nd" },
  { icon: MapPin, label: "Location", value: "Warangal" },
];

export function AboutSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      data-ocid="about.section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="font-mono text-neon-blue text-sm mb-2">{"# about_me"}</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card rounded-2xl p-8 space-y-6">
          <p className="text-foreground/80 leading-relaxed">
            I am a B.Tech Tools and Technologies student at{" "}
            <span className="text-neon-blue font-semibold">
              Kakatiya Institute of Technology &amp; Science, Warangal
            </span>
            . I enjoy solving problems, developing applications, and
            continuously improving my programming skills.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            My goal is to build innovative solutions and gain real-world
            experience through internships in the technology industry.
          </p>

          <div className="pt-2">
            <p className="font-mono text-xs text-neon-purple mb-3">
              {"// interests"}
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-full text-xs font-mono glass-card border border-neon-blue/20 text-neon-blue hover:border-neon-blue/60 hover:neon-glow-blue transition-all duration-200 cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass-card rounded-xl p-6 text-center group hover:neon-glow-blue transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-neon-blue mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-heading text-2xl font-bold gradient-text">
                  {value}
                </div>
                <div className="font-mono text-xs text-muted-foreground mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-xl p-6">
            <p className="font-mono text-xs text-neon-purple mb-3">
              {"// current_status"}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                <span className="text-sm text-foreground/80">
                  Open to internship opportunities
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full bg-neon-purple animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <span className="text-sm text-foreground/80">
                  Learning new technologies daily
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <span className="text-sm text-foreground/80">
                  Building real-world projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
