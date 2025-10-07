import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6 animate-fade-in-left">
          <div className="space-y-2">
            <p className="text-primary text-lg font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Chauhan Shaktijeet
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Computer Engineering Student &<br />
              <span className="text-primary">Aspiring Software Developer</span>
            </h2>
          </div>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Passionate about building intelligent, data-centric systems and AI-driven solutions. 
            Specializing in full-stack development, AgriTech applications, and scalable web technologies.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group"
            >
              Get in Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="flex justify-center animate-fade-in-right">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse" />
            <img
              src={profilePicture}
              alt="Chauhan Shaktijeet"
              className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover border-4 border-primary shadow-glow"
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent rounded-full opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-primary rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
