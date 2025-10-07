import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "AgriTech AI Solution",
      description: "College collaborative project focused on AI-driven agricultural solutions. Built scalable backend with Django and MongoDB, integrating machine learning models for crop prediction and disease detection.",
      technologies: ["Django", "Python", "MongoDB", "TensorFlow", "AI/ML", "REST API"],
      github: "#",
      live: "#",
      category: "Full-Stack & AI"
    },
    {
      title: "College Management System",
      description: "Comprehensive web application for managing college operations including student records, attendance tracking, course management, and faculty portal. Full CRUD functionality with modern UI.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Material-UI"],
      github: "#",
      live: "#",
      category: "Full-Stack"
    },
    {
      title: "Zerodha Clone",
      description: "Trading platform simulation replicating Zerodha's interface and core features. Includes real-time market data visualization, portfolio management, and order placement simulation.",
      technologies: ["React", "Node.js", "WebSocket", "Chart.js", "Redux"],
      github: "#",
      live: "#",
      category: "Full-Stack"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-lg font-medium mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="gradient-card border-border/50 shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 pb-0">
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-border text-muted-foreground text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="px-6 pb-6 flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
