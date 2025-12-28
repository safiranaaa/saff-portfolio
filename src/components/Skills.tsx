import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Smartphone, Globe, Database, Palette, Users, Trophy, BookOpen } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Kotlin", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 70 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "Android Studio", level: 90 },
        { name: "Mobile UI/UX", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "SQLite", level: 80 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "Laravel", level: 80 },
        { name: "WordPress", level: 85 },
        { name: "HTML/CSS", level: 85 },
        { name: "Streamlit", level: 75 }
      ]
    },
    {
      title: "Data Science & ML",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "KNN Algorithm", level: 85 },
        { name: "Decision Tree", level: 80 },
        { name: "SVM", level: 75 }
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Anaconda", level: 75 },
        { name: "Jupyter Notebook", level: 80 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Scientific Writing", level: 85 },
        { name: "Public Speaking", level: 80 },
        { name: "Project Management", level: 85 }
      ]
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Bronze Medal",
      description: "Scientific Paper Competition - APTIKOM PTMA"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Hackathon Finalist",
      description: "Top 20 Finalist - Amikom Business Park Incubator"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "International Student",
      description: "Credit Transfer Program - UiTM Malaysia"
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return "bg-success";
    if (level >= 75) return "bg-primary";
    if (level >= 65) return "bg-warning";
    return "bg-muted";
  };

  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical proficiencies and soft skills developed through academic projects and professional experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glow-effect hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-card/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-background/50 border border-border/50">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {achievement.icon}
                  </div>
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Leadership & Organizations</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              "General Director of Data Centers - Student Executive Board (Feb 2024 – Feb 2025)",
              "Entrepreneurship Staff - Student Executive Board, Faculty Science and Technology (April 2023 – Jan 2024)",
              "Treasurer - Information Technology Student Association (ITECH) (April 2023 – Jan 2024)",
              "Committee Leader - Basic Organizational Training (LDO) – Faculty of Medicine (Dec 2024)"
            ].map((role, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;