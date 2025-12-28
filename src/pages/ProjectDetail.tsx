import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Smartphone, Brain, Gamepad2, ShoppingCart, Figma, Calculator } from "lucide-react";
import Header from "@/components/Header";

const ProjectDetail = () => {
  const { slug } = useParams();

  const projectsData: Record<string, any> = {
    "guardcare-child-nutritional-status": {
      title: "GuardCare: Child Nutritional Status Diagnostics",
      description: "Mobile application that helps parents diagnose their children's nutritional status using Rule-Based Reasoning (RBR) with forward chaining. Identifies conditions like stunting, wasting, underweight, and obesity.",
      icon: <Smartphone className="w-8 h-8" />,
      category: "Final Project",
      tech: ["Kotlin", "Android Studio", "SQLite", "Rule-Based Reasoning"],
      fullDescription: "GuardCare is a comprehensive mobile application designed to empower parents in monitoring and understanding their children's nutritional health. Using advanced Rule-Based Reasoning with forward chaining algorithms, the app provides accurate diagnostics for various nutritional conditions including stunting, wasting, underweight, and obesity. Built following the Mobile Application Development Life Cycle (MADLC), the application integrates seamlessly with SQLite database for efficient data management and retrieval.",
      features: [
        "Forward Chaining Algorithm Implementation",
        "Real-time Nutritional Status Assessment",
        "SQLite Database Integration",
        "User-friendly Parent Interface",
        "Comprehensive Health Metrics Tracking",
        "Detailed Diagnostic Reports"
      ],
      githubUrl: "https://github.com/safiranaaa/GuardCare-Android-App",
      downloadUrl: "https://s.id/GuardCareApp",
      mockups: [
        "/assets/projects/guardcare1.png",
        "/assets/projects/guardcare2.png",
        "/assets/projects/guardcare3.jpg",
        "/assets/projects/guardcare4.jpg",
        "/assets/projects/guardcare5.jpg",
        "/assets/projects/guardcare6.jpg",
        "/assets/projects/guardcare7.jpg",
        "/assets/projects/guardcare8.jpg"
      ]
    },
    "mental-health-estimation": {
      title: "Mental Health Problem Estimation Website",
      description: "Web application that estimates probability of mental health conditions including stress, depression, anxiety, and postpartum depression using multiple ML algorithms.",
      icon: <Brain className="w-8 h-8" />,
      category: "Machine Learning",
      tech: ["Python", "Jupyter Notebook", "Streamlit", "Decision Tree", "SVM", "KNN"],
      fullDescription: "This innovative web application leverages the power of machine learning to provide preliminary mental health assessments. By implementing multiple algorithms including Decision Tree, Support Vector Machine (SVM), and K-Nearest Neighbors (KNN), the system offers comprehensive analysis of mental health indicators. The application uses carefully curated datasets from Kaggle and GitHub to ensure accuracy and reliability in its predictions.",
      features: [
        "Multiple ML Algorithm Integration (Decision Tree, SVM, KNN)",
        "Interactive Streamlit Interface",
        "Real-time Probability Estimation",
        "Comprehensive Mental Health Metrics",
        "Data Visualization and Analytics",
        "User-friendly Assessment Process"
      ],
      githubUrl: "https://github.com/safiranaaa/Estimation-of-Mental-Health_MachineLearning",
      liveUrl: "https://estimation-of-mental-health.streamlit.app/",
      mockups: [
        "/assets/projects/mentalHealth4.png.png",
        "/assets/projects/mentalHealth3.png.png",
        "/assets/projects/mentalHealth2.png.png",
        "/assets/projects/mentalHealth1.png.png"
      ]
    },
    "bmr-calculator-android": {
      title: "BMR Calculator Android App",
      description: "An Android application built to calculate Basal Metabolic Rate (BMR) using gender-specific formulas.",
      icon: <Calculator className="w-8 h-8" />,
      category: "Mobile Development",
      tech: ["Kotlin", "Jetpack Compose", "SharedPreferences"],
      fullDescription: "The BMR Calculator is an Android application developed as a final practical assignment for the Mobile Device Programming course. Built using Kotlin and Jetpack Compose, it implements the Harris-Benedict equation to calculate a user's minimum energy requirements based on their age, gender, height, and weight. The app features a robust data management system using SharedPreferences, allowing for multi-user data storage and historical tracking of health metrics.",
      features: [
        "UI developed with Jetpack Compose",
        "Gender-specific BMR calculation formulas",
        "Local data persistence using SharedPreferences",
        "Multi-screen navigation",
        "Multi-user history tracking and management"
      ],
      githubUrl: "https://github.com/safiranaaa/CalculationBMR_Kotlin",
      mockups: [
        "/assets/projects/bmr1.png",
        "/assets/projects/bmr2.png"
      ]
    },
    "ecommerce-website": {
      title: "E-Commerce Website Development",
      description: "Team-based digitalization of local shoe shop in Yogyakarta, creating fully functional e-commerce platform and transitioning business online.",
      icon: <ShoppingCart className="w-8 h-8" />,
      category: "Web Development",
      tech: ["WordPress", "E-commerce", "Team Collaboration"],
      fullDescription: "This project represents the successful digital transformation of a traditional local shoe shop in Yogyakarta. Working collaboratively as a team, we developed a complete e-commerce solution that enabled the business to expand its reach beyond physical limitations. The platform features comprehensive product management, secure payment processing, and an intuitive shopping experience for customers.",
      features: [
        "Full E-commerce Platform with WordPress",
        "Product Catalog Management",
        "Secure Payment Gateway Integration",
        "Inventory Management System",
        "Customer Order Tracking",
        "Responsive Mobile-friendly Design"
      ],
      githubUrl: "https://github.com/yourusername/ecommerce-shoe-shop",
      mockups: [
        "/assets/projects/cantik1.png",
        "/assets/projects/cantik2.png"
      ]
    },
    "kangen-omah-prototypes": {
      title: "Kangen Omah Website & Mobile Prototypes",
      description: "Designed website and mobile app prototypes for authentic Indonesian souvenir platform, focusing on comprehensive UX/UI design process.",
      icon: <Figma className="w-8 h-8" />,
      category: "UI/UX Design",
      tech: ["Figma", "UI/UX Design", "Prototyping"],
      fullDescription: "Kangen Omah is a comprehensive UI/UX design project focused on creating an authentic Indonesian souvenir platform. The project involved extensive user research, wireframing, and prototyping to create both website and mobile app interfaces. The design emphasizes cultural authenticity while maintaining modern usability standards, ensuring that users can easily discover and purchase traditional Indonesian products.",
      features: [
        "Complete Website and Mobile App Prototypes",
        "Comprehensive UX Research",
        "Interactive Figma Mockups",
        "User Flow Optimization",
        "Cultural Design Elements",
        "Responsive Design System"
      ],
      githubUrl: "https://github.com/yourusername/kangen-omah-design",
      mockups: [
        "/assets/projects/kom1.png",
        "/assets/projects/kom2.png",
        "/assets/projects/kom3.png",
        "/assets/projects/kom4.png",
        "/assets/projects/kow1.png",
        "/assets/projects/kow2.png",
        "/assets/projects/kow3.png",
        "/assets/projects/kow4.png"
      ]
    },
    "android-health-tracking": {
      title: "Android Health Tracking Apps",
      description: "Built BMR calculator and Health Track apps for monitoring health metrics including weight, blood pressure, and blood sugar levels.",
      icon: <Smartphone className="w-8 h-8" />,
      category: "Mobile Development",
      tech: ["Kotlin", "Android Studio", "Health Monitoring"],
      fullDescription: "This health tracking suite consists of multiple Android applications designed to help users monitor and manage their health metrics effectively. The BMR Calculator helps users understand their metabolic rate, while the Health Track app provides comprehensive monitoring of vital health indicators including weight, blood pressure, and blood sugar levels. Built with Kotlin and modern Android development practices, these apps offer reliable and user-friendly health management tools.",
      features: [
        "BMR (Basal Metabolic Rate) Calculator",
        "Weight Tracking with History",
        "Blood Pressure Monitoring",
        "Blood Sugar Level Tracking",
        "Data Visualization and Trends",
        "Health Insights and Recommendations"
      ],
      githubUrl: "https://github.com/safiranaaa/HealthTrack_AndroidApp_Kotlin",
      mockups: [
        "/assets/projects/htrack1.png",
        "/assets/projects/htrack2.png",
        "/assets/projects/htrack3.png",
        "/assets/projects/htrack4.png",
        "/assets/projects/htrack5.png"
      ]
    }
  };

  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Back Button */}
        <Link to="/#projects">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-2xl">
              {project.icon}
            </div>
            <div className="flex-1">
              <Badge className="mb-3">{project.category}</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold mb-3">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
            {project.liveUrl && (
              <Button asChild variant="secondary">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.downloadUrl && (
              <Button asChild variant="secondary">
                <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Download App
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Full Description */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-3">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </CardContent>
        </Card>

        {/* Mockups Section */}
        {project.mockups && project.mockups.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Visual Preview</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.mockups.map((mockup: string, index: number) => (
                    <div key={index} className="bg-muted rounded-lg overflow-hidden flex items-center justify-center p-4">
                      <img 
                        src={mockup}
                        alt={`${project.title} mockup ${index + 1}`}
                        className="max-w-full max-h-[500px] w-auto h-auto object-contain rounded"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Key Features */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* View More Projects */}
        <div className="text-center">
          <Link to="/#projects">
            <Button variant="outline">
              View More Projects
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Safira Nabila Putri. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;