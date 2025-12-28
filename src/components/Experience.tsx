import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "IT Developer Intern - UI/UX Designer",
      company: "RSU Mitra Paramedika Yogyakarta",
      location: "Yogyakarta, Indonesia",
      period: "Oct 25 - Ongoing",
      type: "Healthcare Tech",
      description: [
        "Designed comprehensive user interfaces for the Electronic Medical Record (EMR) system, specifically focusing on the Emergency Unit (IGD) and Nursing Assessment modules",
        "Created high-fidelity interactive prototypes using Figma to visualize complex medical workflows, ensuring accurate data recording for healthcare professionals",
        "Collaborated with the development team to translate medical requirements into intuitive and functional digital experiences"
      ],
      skills: ["UI/UX Design", "Figma","Prototyping", "Health Tech"]
    },
    {
      title: "Research Assistant",
      company: "Universitas 'Aisyiyah Yogyakarta",
      location: "Yogyakarta, Indonesia",
      period: "Ongoing",
      type: "Research",
      description: [
        "Conducted in-depth literature review of data mining journals and wrote key sections to ensure clarity, accuracy, and academic rigor",
        "Sourced and prepared datasets for analysis, performed data mining using K-Nearest Neighbors (KNN) algorithm to extract meaningful insights"
      ],
      skills: ["Data Mining", "KNN Algorithm", "Research", "Technical Writing"]
    },
    {
      title: "Web Administrator Staff & Publication Designer Intern",
      company: "SEAMEO RECFON",
      location: "Jakarta, Indonesia",
      period: "Feb 2024 – June 2024",
      type: "Development",
      description: [
        "Designed and built official microsite for internship requirements, creating complete UI/UX and developing full application with Laravel",
        "Developed and administered websites using WordPress, ensuring seamless functionality and user experience",
        "Drafted proposals to upgrade server infrastructure, enhancing performance and scalability"
      ],
      skills: ["Laravel", "WordPress", "UI/UX Design", "System Administration"]
    },
    {
      title: "International Mobility Student",
      company: "Universiti Teknologi Mara (UiTM)",
      location: "Perak, Malaysia",
      period: "Oct 2023 – Feb 2024",
      type: "Academic",
      description: [
        "Selected for one-semester International Credit Transfer program in Computer Science (Hons.)",
        "Gained specialized knowledge in advanced technical subjects while immersing in diverse cultural environment",
        "Enhanced cross-cultural communication and problem-solving skills in international academic setting"
      ],
      skills: ["Cross-cultural Communication", "Advanced Computer Science", "Problem Solving"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Healthcare Tech": return "bg-blue-500/20 text-blue-400";
      case "Research": return "bg-success/20 text-success";
      case "Development": return "bg-primary/20 text-primary";
      case "Academic": return "bg-warning/20 text-warning";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through research, development, and international academic experiences
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 glow-effect">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-muted-foreground mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <Badge className={getTypeColor(exp.type)}>
                      {exp.type}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;