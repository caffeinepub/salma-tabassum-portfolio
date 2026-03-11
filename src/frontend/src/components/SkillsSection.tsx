import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Programming",
    color: "blue",
    skills: [
      { name: "C", icon: "⚡", level: 85 },
      { name: "Java", icon: "☕", level: 75 },
      { name: "Python", icon: "🐍", level: 60 },
    ],
  },
  {
    title: "Core Computer Science",
    color: "purple",
    skills: [
      { name: "Data Structures", icon: "🌲", level: 80 },
      { name: "Computer Networks", icon: "🌐", level: 75 },
      { name: "DBMS", icon: "🗄️", level: 72 },
    ],
  },
  {
    title: "Tools & Technologies",
    color: "green",
    skills: [
      { name: "Arduino", icon: "🤖", level: 70 },
      { name: "AutoCAD", icon: "📐", level: 65 },
    ],
  },
  {
    title: "Productivity",
    color: "yellow",
    skills: [
      { name: "MS Word", icon: "📝", level: 90 },
      { name: "Excel", icon: "📊", level: 85 },
      { name: "PowerPoint", icon: "📋", level: 88 },
    ],
  },
  {
    title: "Soft Skills",
    color: "pink",
    skills: [
      { name: "Problem Solving", icon: "🧠", level: 90 },
      { name: "Communication", icon: "💬", level: 85 },
      { name: "Time Management", icon: "⏱️", level: 82 },
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: "border-neon-blue/30 hover:border-neon-blue/60",
  purple: "border-neon-purple/30 hover:border-neon-purple/60",
  green: "border-green-400/30 hover:border-green-400/60",
  yellow: "border-yellow-400/30 hover:border-yellow-400/60",
  pink: "border-pink-400/30 hover:border-pink-400/60",
};

const barColorMap: Record<string, string> = {
  blue: "from-neon-blue to-neon-purple",
  purple: "from-neon-purple to-pink-400",
  green: "from-green-400 to-neon-blue",
  yellow: "from-yellow-400 to-orange-400",
  pink: "from-pink-400 to-neon-purple",
};

const titleColorMap: Record<string, string> = {
  blue: "text-neon-blue",
  purple: "text-neon-purple",
  green: "text-green-400",
  yellow: "text-yellow-400",
  pink: "text-pink-400",
};

export function SkillsSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={sectionRef as React.RefObject<HTMLElement>}
      data-ocid="skills.section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="font-mono text-neon-blue text-sm mb-2">
          {"# tech_stack"}
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">
          Skills & Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className={`glass-card rounded-2xl p-6 skill-card border ${colorMap[category.color]}`}
          >
            <h3
              className={`font-mono text-sm font-bold mb-4 ${titleColorMap[category.color]}`}
            >
              {"// "}
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{skill.icon}</span>
                      <span className="font-body text-sm text-foreground/80">
                        {skill.name}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${barColorMap[category.color]}`}
                      style={{
                        width: `${skill.level}%`,
                        transition: "width 1s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
