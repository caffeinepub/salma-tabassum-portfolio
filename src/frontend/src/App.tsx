import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { Footer } from "./components/Footer";
import { GitHubSection } from "./components/GitHubSection";
import { HeroSection } from "./components/HeroSection";
import { Navigation } from "./components/Navigation";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResumeSection } from "./components/ResumeSection";
import { SkillsSection } from "./components/SkillsSection";
import { ThemeProvider } from "./contexts/ThemeContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <GitHubSection />
            <ResumeSection />
            <ContactSection />
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
