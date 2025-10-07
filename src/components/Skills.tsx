import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 75 },
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Material-UI", level: 75 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 80 },
        { name: "Django", level: 75 },
        { name: "REST APIs", level: 85 },
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 75 },
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
      ]
    },
    {
      category: "AI & Data Science",
      skills: [
        { name: "TensorFlow", level: 70 },
        { name: "Machine Learning", level: 70 },
        { name: "Data Analysis", level: 75 },
        { name: "NumPy/Pandas", level: 75 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-lg font-medium mb-2">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <Card
              key={catIndex}
              className="p-6 gradient-card border-border/50 shadow-card hover:shadow-glow transition-smooth animate-scale-in"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <span className="w-1 h-6 bg-primary mr-3 rounded" />
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-12 text-center animate-fade-in">
          <Card className="p-8 gradient-card border-border/50 shadow-card inline-block">
            <h3 className="text-xl font-bold text-foreground mb-4">Also Familiar With</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Docker", "AWS Basics", "Redux", "WebSocket", "Postman", "Figma", "Agile/Scrum"].map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/30 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
