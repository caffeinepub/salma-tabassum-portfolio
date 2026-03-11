import { Badge } from "@/components/ui/badge";
import { Car, Code2, Cpu, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
  {
    icon: Code2,
    title: "Payroll Management System",
    description:
      "Developed a payroll management application using C to manage employee records and automate salary calculation.",
    features: [
      "Employee data management",
      "Automated salary calculations",
      "Pay slip generation",
    ],
    techs: ["C", "Data Structures"],
    color: "blue",
    emoji: "💼",
  },
  {
    icon: Cpu,
    title: "Automatic Street Light System",
    description:
      "Built a smart street light system using Arduino UNO and LDR sensor that automatically turns lights ON/OFF based on ambient light levels.",
    features: [
      "LDR sensor integration",
      "Automatic on/off control",
      "Energy efficient design",
    ],
    techs: ["Arduino", "Embedded Systems", "Sensors"],
    color: "yellow",
    emoji: "💡",
  },
  {
    icon: Car,
    title: "Car Rental Reservation System",
    description:
      "Developed a Java-based application implementing Object-Oriented Programming concepts to manage car rental reservations.",
    features: [
      "Car booking management",
      "Reservation system",
      "OOP-based architecture",
    ],
    techs: ["Java", "OOP"],
    color: "purple",
    emoji: "🚗",
  },
];

const techBadgeColor: Record<string, string> = {
  blue: "bg-neon-blue/10 text-neon-blue border-neon-blue/30",
  yellow: "bg-yellow-400/10 text-yellow-400 border-yellow-400/30",
  purple: "bg-neon-purple/10 text-neon-purple border-neon-purple/30",
};

export function ProjectsSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={sectionRef as React.RefObject<HTMLElement>}
      data-ocid="projects.section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="font-mono text-neon-blue text-sm mb-2">
          {"# my_projects"}
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            data-ocid={`projects.item.${idx + 1}`}
            className="glass-card rounded-2xl p-6 project-card flex flex-col gap-4 relative overflow-hidden group"
          >
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                project.color === "blue"
                  ? "bg-[radial-gradient(circle_at_50%_-20%,oklch(0.82_0.18_210_/_0.1),transparent_60%)]"
                  : project.color === "yellow"
                    ? "bg-[radial-gradient(circle_at_50%_-20%,oklch(0.88_0.18_80_/_0.1),transparent_60%)]"
                    : "bg-[radial-gradient(circle_at_50%_-20%,oklch(0.62_0.26_297_/_0.1),transparent_60%)]"
              }`}
            />

            <div className="flex items-start justify-between">
              <div className="text-4xl">{project.emoji}</div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neon-blue transition-colors" />
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-neon-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <p className="font-mono text-xs text-neon-purple mb-2">
                {"// features"}
              </p>
              <ul className="space-y-1">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-foreground/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-neon-blue flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {project.techs.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className={`font-mono text-xs ${techBadgeColor[project.color]}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
