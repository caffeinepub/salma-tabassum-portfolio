import { Award, Calendar, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const education = [
  {
    degree: "B.Tech \u2013 Computer Science and Networks",
    institution: "Kakatiya Institute of Technology & Science (KITSW)",
    period: "2024 \u2013 2028",
    cgpa: "8.97",
    status: "ongoing",
    color: "blue",
  },
  {
    degree: "Intermediate (MPC)",
    institution:
      "Telangana Minority Residential Educational Institution Society",
    period: "2022 \u2013 2024",
    cgpa: "9.2",
    status: "completed",
    color: "purple",
  },
  {
    degree: "SSC",
    institution:
      "Telangana Minority Residential Educational Institution Society",
    period: "2022",
    cgpa: "9.7",
    status: "completed",
    color: "green",
  },
];

export function EducationSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="education"
      ref={sectionRef as React.RefObject<HTMLElement>}
      data-ocid="education.section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="font-mono text-neon-blue text-sm mb-2">{"# education"}</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">
          Education
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-transparent timeline-line" />

        <div className="space-y-8">
          {education.map((item, idx) => (
            <div
              key={item.degree}
              data-ocid={`education.item.${idx + 1}`}
              className="relative flex gap-6"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center glass-card border ${
                    item.color === "blue"
                      ? "border-neon-blue/50 neon-glow-blue"
                      : item.color === "purple"
                        ? "border-neon-purple/50 neon-glow-purple"
                        : "border-green-400/50"
                  }`}
                >
                  <GraduationCap
                    className={`w-5 h-5 ${
                      item.color === "blue"
                        ? "text-neon-blue"
                        : item.color === "purple"
                          ? "text-neon-purple"
                          : "text-green-400"
                    }`}
                  />
                </div>
              </div>

              <div className="flex-1 glass-card rounded-xl p-6 hover:neon-glow-blue transition-all duration-300 group">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-neon-blue transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.institution}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-xs font-mono text-neon-blue">
                      <Award className="w-3 h-3" />
                      CGPA: {item.cgpa}
                    </div>
                  </div>
                </div>
                {item.status === "ongoing" && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Currently Enrolled
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
