import { GraduationCap, Briefcase, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: "Computer Engineering",
      organization: "LDRP Institute of Technology & Research",
      period: "Expected 2026",
      description: "Strong foundation in software engineering, data structures, algorithms, and modern development practices."
    },
    {
      icon: Briefcase,
      title: "Internship",
      subtitle: "Software Development Intern",
      organization: "Tatvasoft",
      period: "15 Days",
      description: "Gained hands-on experience in professional software development practices and team collaboration."
    },
    {
      icon: Code,
      title: "Projects",
      subtitle: "Multiple Full-Stack Applications",
      organization: "Academic & Personal Projects",
      period: "Ongoing",
      description: "Developed AgriTech solutions, College Management System, and Zerodha clone with modern tech stacks."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-lg font-medium mb-2">Get to Know Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <Card className="p-8 gradient-card border-border/50 shadow-card">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-primary font-semibold">Chauhan Shaktijeet</span>, a passionate Computer Engineering student at 
              LDRP Institute of Technology & Research with a strong foundation in software development, web applications, 
              and AI-driven solutions. I enjoy building intelligent, data-centric systems — from developing ETL pipelines 
              and APIs to creating full-stack web and AgriTech AI applications using technologies like MERN stack, Python, 
              Django, React, TensorFlow, and MongoDB.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Driven by curiosity and problem-solving, I aim to leverage data and technology to design scalable systems 
              that make a real-world impact, especially in agriculture and analytics.
            </p>
          </Card>
        </div>

        {/* Experience Timeline */}
        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 gradient-card border-border/50 shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <exp.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
              <p className="text-primary font-medium mb-1">{exp.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-2">{exp.organization}</p>
              <p className="text-xs text-accent font-medium mb-3">{exp.period}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
