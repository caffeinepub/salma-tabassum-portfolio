import { Github, Heart, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <div className="font-mono text-xl font-bold gradient-text mb-1">
              Salma Tabassum
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              Building the future through code.
            </p>
          </div>

          {/* Center: Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Mahi-tech-c"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:neon-glow-blue transition-all duration-200 group"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-muted-foreground group-hover:text-neon-blue transition-colors" />
            </a>
            <a
              href="mailto:salma3962024@gmail.com"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:neon-glow-purple transition-all duration-200 group"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-muted-foreground group-hover:text-neon-purple transition-colors" />
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="font-mono text-xs text-muted-foreground">
              &copy; {year} Salma Tabassum
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              Built with <Heart className="inline w-3 h-3 text-neon-purple" />{" "}
              using{" "}
              <a
                href={utmLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-blue hover:text-neon-purple transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
