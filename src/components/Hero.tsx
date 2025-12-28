import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import safiraHeadshot from "@/assets/safira-profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="flex items-center py-12">
      <div className="container mx-auto px-36">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-8 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm">Hi, my name is</p>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Safira Nabila Putri
              </h1>
              <h2 className="text-2xl lg:text-4xl font-bold text-muted-foreground">
                Software Engineer & Mobile Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              A versatile and motivated software engineer with expertise in 
              <span className="text-primary"> mobile development</span>, 
              <span className="text-primary"> data science</span>, and 
              <span className="text-primary"> web technologies</span>. 
              Proficient in Kotlin, Python, and Java with a passion for creating 
              innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} className="glow-effect group">
                Let's Work Together
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="glow-effect">
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-8">
              <a 
                href="https://linkedin.com/in/safira-nabila-putri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/safiranaaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=safiranaaa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden glow-effect">
                <img 
                  src={safiraHeadshot} 
                  alt="Safira Nabila Putri - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-2xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;