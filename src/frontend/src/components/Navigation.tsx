import { Menu, Moon, Sun, Terminal, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center neon-glow-blue group-hover:scale-110 transition-transform">
              <Terminal className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-mono text-lg font-bold gradient-text">
              ST
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-neon-blue transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              data-ocid="nav.toggle"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:neon-glow-blue transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-neon-blue" />
              ) : (
                <Moon className="w-4 h-4 text-neon-purple" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              data-ocid="nav.button"
              className="md:hidden w-9 h-9 rounded-lg glass-card flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-background/95 border-b border-border/50 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-mono text-muted-foreground hover:text-neon-blue transition-colors border-b border-border/30 last:border-0"
            >
              <span className="text-neon-blue mr-2">&gt;</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
