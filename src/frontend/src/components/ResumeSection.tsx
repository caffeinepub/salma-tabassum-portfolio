import { Button } from "@/components/ui/button";
import {
  Code2,
  Download,
  FolderOpen,
  GraduationCap,
  Heart,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    items: ["B.Tech CSE Networks \u2013 KITSW", "CGPA: 8.97 | 2024\u20132028"],
    color: "blue",
  },
  {
    icon: Code2,
    title: "Technical Skills",
    items: ["C, Java, Python", "Data Structures, DBMS", "AutoCAD, MS Office"],
    color: "purple",
  },
  {
    icon: FolderOpen,
    title: "Projects",
    items: [
      "Payroll Management System",
      "Automatic Street Light System",
      "Car Rental Reservation System",
    ],
    color: "green",
  },
  {
    icon: Heart,
    title: "Interests",
    items: ["Software Development", "Computer Networks", "Database Systems"],
    color: "pink",
  },
];

const highlightColor: Record<string, string> = {
  blue: "text-neon-blue border-neon-blue/30",
  purple: "text-neon-purple border-neon-purple/30",
  green: "text-green-400 border-green-400/30",
  pink: "text-pink-400 border-pink-400/30",
};

export function ResumeSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="resume"
      ref={sectionRef as React.RefObject<HTMLElement>}
      data-ocid="resume.section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="font-mono text-neon-blue text-sm mb-2">{"# resume"}</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">
          Resume
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-2xl p-8 text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-card neon-glow-blue mb-6">
            <Download className="w-7 h-7 text-neon-blue" />
          </div>
          <h3 className="font-heading text-2xl font-bold gradient-text mb-2">
            Download My Resume
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            Get a comprehensive overview of my education, skills, and projects.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-blue font-mono gap-2"
            data-ocid="resume.primary_button"
          >
            <a
              href="/assets/uploads/my-resume-1.jpeg"
              download="Salma_Tabassum_Resume.jpeg"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map(({ icon: Icon, title, items, color }) => {
            const colorClasses = highlightColor[color].split(" ");
            return (
              <div
                key={title}
                className={`glass-card rounded-xl p-5 border ${highlightColor[color]}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-4 h-4 ${colorClasses[0]}`} />
                  <h4
                    className={`font-mono text-xs font-bold ${colorClasses[0]}`}
                  >
                    {title}
                  </h4>
                </div>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-foreground/70"
                    >
                      <span
                        className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${colorClasses[0].replace("text-", "bg-")}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
