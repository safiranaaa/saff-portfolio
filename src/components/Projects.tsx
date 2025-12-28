import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, Globe, Brain, ShoppingCart, Figma, Gamepad2, Activity, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "GuardCare: Child Nutritional Status Diagnostics",
      description: "Mobile application that helps parents diagnose their children's nutritional status using Rule-Based Reasoning (RBR) with forward chaining. Identifies conditions like stunting, wasting, underweight, and obesity.",
      icon: <Smartphone className="w-6 h-6" />,
      category: "Final Year Project",
      tech: ["Kotlin", "Android Studio", "SQLite", "Rule-Based Reasoning"],
      highlights: ["Mobile Application Development Life Cycle (MADLC)", "Forward Chaining Algorithm", "SQLite Database"],
      slug: "guardcare-child-nutritional-status"
    },
    {
      title: "Mental Health Problem Estimation Website",
      description: "Web application that estimates probability of mental health conditions including stress, depression, anxiety, and postpartum depression using multiple ML algorithms.",
      icon: <Brain className="w-6 h-6" />,
      category: "Machine Learning",
      tech: ["Python", "Jupyter Notebook", "Streamlit", "Decision Tree", "SVM", "KNN"],
      highlights: ["Multiple ML Algorithms", "Kaggle & GitHub Datasets", "User-friendly Interface"],
      slug: "mental-health-estimation"
    },
    {
      title: "BMR Calculator Android App",
      description: "An Android application built to calculate Basal Metabolic Rate (BMR) using gender-specific formulas. Developed as a final practical assignment for Mobile Development course",
      icon: <Calculator className="w-6 h-6" />,
      category: "Mobile Development",
      tech: ["Kotlin", "Jetpack Compose", "SharedPreferences"],
      highlights: ["UI with Jetpack Compose", "Local data storage using SharedPreferences", "Gender-based metabolic formulas"],
      slug: "bmr-calculator-android"
    },
    {
      title: "E-Commerce Website Development",
      description: "Team-based digitalization of local shoe shop in Yogyakarta, creating fully functional e-commerce platform and transitioning business online.",
      icon: <ShoppingCart className="w-6 h-6" />,
      category: "Web Development",
      tech: ["WordPress", "E-commerce", "Team Collaboration"],
      highlights: ["Business Digitalization", "Full E-commerce Solution", "Local Business Impact"],
      slug: "ecommerce-website"
    },
    {
      title: "Kangen Omah Website & Mobile Prototypes",
      description: "Designed website and mobile app prototypes for authentic Indonesian souvenir platform, focusing on comprehensive UX/UI design process.",
      icon: <Figma className="w-6 h-6" />,
      category: "UI/UX Design",
      tech: ["Figma", "UI/UX Design", "Prototyping"],
      highlights: ["Interactive Mockups", "User Experience Focus", "Cultural Product Platform"],
      slug: "kangen-omah-prototypes"
    },
    {
      title: "Android Health Tracking Apps",
      description: "Built BMR calculator and Health Track apps for monitoring health metrics including weight, blood pressure, and blood sugar levels.",
      icon: <Smartphone className="w-6 h-6" />,
      category: "Mobile Development",  
      tech: ["Kotlin", "Android Studio", "Health Monitoring"],
      highlights: ["Health Metrics Tracking", "BMR Calculations", "User Health Management"],
      slug: "android-health-tracking"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Final Year Project": return "bg-primary/20 text-primary";
      case "Machine Learning": return "bg-success/20 text-success";
      case "Mobile Development": return "bg-warning/20 text-warning";
      case "Web Development": return "bg-blue-500/20 text-blue-400";
      case "UI/UX Design": return "bg-purple-500/20 text-purple-400";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical projects spanning mobile development, machine learning, and web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link key={index} to={`/projects/${project.slug}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 glow-effect h-full flex flex-col cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {project.icon}
                  </div>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-primary mr-1 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="glow-effect" asChild>
            <a 
              href="https://github.com/safiranaaa?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;