import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Lightbulb, Target } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Award,
      title: "Expertise",
      description: "20+ years combined experience in hardware diagnostics and AI systems"
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Designed for both beginners and professionals with intuitive interfaces"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge AI and forward chaining technology for accurate results"
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "95%+ diagnostic accuracy validated by certified technicians"
    }
  ];

  const team = [
    {
      role: "Hardware Specialist",
      name: "Senior Technician",
      expertise: "15+ years laptop repair"
    },
    {
      role: "AI Engineer",
      name: "ML Expert",
      expertise: "Expert systems architect"
    },
    {
      role: "UX Designer",
      name: "Design Lead",
      expertise: "User experience specialist"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">About Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Expert System, Expert Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built by hardware technicians and AI specialists to bring professional diagnostics to everyone
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="gradient-card shadow-strong animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We created LaptopDiag to democratize professional hardware diagnostics. Too often, 
                users face expensive repair quotes without understanding the real issue. Our expert 
                system uses <span className="font-semibold text-foreground">forward chaining inference</span> - 
                the same logical reasoning certified technicians use - to provide accurate, transparent 
                diagnostics instantly.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a home user trying to fix your laptop or a technician seeking a second 
                opinion, our platform provides professional-grade analysis with visual decision trees 
                that show exactly how we reached each conclusion.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-strong transition-smooth text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Our Expert Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-strong transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full gradient-hero mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <Badge className="mb-2">{member.role}</Badge>
                  <div className="font-semibold mb-1">{member.name}</div>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <Card className="mt-16 max-w-4xl mx-auto shadow-strong gradient-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">The Technology Behind LaptopDiag</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our expert system uses <span className="font-semibold text-foreground">forward chaining</span>, 
                a proven AI inference method that starts with known facts (your symptoms) and systematically 
                applies diagnostic rules to reach conclusions.
              </p>
              <p>
                Unlike simple decision trees, our system performs <span className="font-semibold text-foreground">
                comparative analysis</span>, evaluating multiple possible diagnoses simultaneously and ranking 
                them by confidence level, allowing you to see not just the most likely issue, but all 
                plausible alternatives.
              </p>
              <p>
                Every diagnostic rule in our knowledge base has been validated by certified hardware 
                technicians with decades of combined experience, ensuring professional-grade accuracy 
                for every analysis.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
