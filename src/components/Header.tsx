import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  // Helper component to handle the resume download logic
  const ResumeDownload = ({ className }: { className?: string }) => (
    <Button 
      size="sm" 
      className={className}
      asChild
    >
      <a 
        href="/saff-portfolio/CV_Safira_Nabila_Putri.pdf" 
        download="CV_Safira_Nabila_Putri.pdf"
        className="flex items-center gap-2"
      >
        <Download className="h-4 w-4" />
        Resume
        </a>
      </Button>
    );

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 md:px-36 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div className="font-mono text-lg font-semibold gradient-text">
            &lt;Safira/&gt;
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions: Theme & Resume */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <ResumeDownload className="glow-effect" />
          </div>

          {/* Mobile Actions: Theme & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <ResumeDownload className="w-full justify-start glow-effect" />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;