import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu } from "lucide-react";

export const Hero = () => {
  const scrollToDiagnose = () => {
    document.getElementById("diagnose")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-hero mb-8 animate-scale-in shadow-strong">
            <Cpu className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Expert Laptop
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Damage Diagnosis
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Advanced AI-powered expert system for accurate laptop troubleshooting. 
            Get instant diagnostics with visual decision trees and comparative analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gradient-hero text-white hover:opacity-90 transition-smooth shadow-strong group"
              onClick={scrollToDiagnose}
            >
              Start Diagnosis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-muted transition-smooth"
              onClick={() => document.getElementById("tutorial")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            {[
              { number: "500+", label: "Laptops Supported" },
              { number: "95%", label: "Accuracy Rate" },
              { number: "1000+", label: "Issues Diagnosed" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
