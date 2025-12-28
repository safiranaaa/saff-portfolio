import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Download, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "safiranaaa@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=safiranaaa@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(+62) 813-6626-2807",
      href: "tel:+6281366262807"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Yogyakarta, Indonesia",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/safira-nabila-putri",
      href: "https://linkedin.com/in/safira-nabila-putri"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/safiranaaa",
      href: "https://github.com/safiranaaa"
    }
  ];

  const education = {
    degree: "Bachelor of Computer Science",
    major: "Information Technology",
    institution: "Universitas 'Aisyiyah Yogyakarta",
    graduation: "October 2025",
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering", 
      "Object-Oriented Programming"
    ]
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to contribute to challenging projects and drive collective success. 
            Let's connect and explore opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Contact Information */}
          <div className="flex flex-col gap-8">
            
            {/* Primary Contact */}
            <Card className="glow-effect h-full">
              <CardHeader>
                <CardTitle className="text-xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          target={info.label === "Email" ? "_blank" : undefined}
                          rel={info.label === "Email" ? "noopener noreferrer" : undefined}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glow-effect h-full">
              <CardHeader>
                <CardTitle className="text-xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {link.icon}
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {link.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{link.value}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </CardContent>
            </Card>

          </div>

          {/* Education & Actions */}
          <div className="flex flex-col gap-8">
            
            {/* Education */}
            <Card className="glow-effect h-full">
              <CardHeader>
                <CardTitle className="text-xl">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{education.degree}</h3>
                  <p className="text-primary font-medium">Major: {education.major}</p>
                  <p className="text-muted-foreground">{education.institution}</p>
                  <p className="text-sm text-muted-foreground">Graduation: {education.graduation}</p>
                </div>
                
                <div>
                  <p className="font-medium mb-3">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="glow-effect bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 h-full">
              <CardContent className="p-8 text-center space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Ready to Collaborate?</h3>
                  <p className="text-muted-foreground">
                    Download my resume or reach out directly to discuss opportunities
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="glow-effect">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button variant="outline" asChild className="glow-effect">
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=safiranaaa@gmail.com&su=Let's%20Collaborate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-success">●</span> Available for full-time opportunities
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;