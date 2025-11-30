import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, CheckCircle2, Activity, FileText } from "lucide-react";

export const Tutorial = () => {
  const steps = [
    {
      icon: PlayCircle,
      title: "Select Your Brand",
      description: "Choose your laptop manufacturer from our extensive list of supported brands including Dell, HP, Lenovo, and more.",
      color: "text-primary"
    },
    {
      icon: CheckCircle2,
      title: "Identify Symptoms",
      description: "Select all symptoms that match your laptop's issues. You can choose multiple symptoms for more accurate diagnosis.",
      color: "text-secondary"
    },
    {
      icon: Activity,
      title: "Get Analysis",
      description: "Our forward chaining expert system analyzes your inputs and provides detailed diagnostics with confidence scores.",
      color: "text-accent"
    },
    {
      icon: FileText,
      title: "Follow Recommendations",
      description: "Receive prioritized action items and troubleshooting steps tailored to your specific issues.",
      color: "text-primary"
    }
  ];

  return (
    <section id="tutorial" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our intuitive process makes laptop diagnosis simple and accurate for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-strong transition-smooth animate-fade-in hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-2xl font-bold text-muted-foreground/30">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="gradient-card shadow-strong">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Why Forward Chaining?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our expert system uses <span className="font-semibold text-foreground">forward chaining</span>, 
                a data-driven inference method that starts with known facts (your symptoms) and applies logical 
                rules to derive conclusions (diagnosis). This approach ensures:
              </p>
              <ul className="space-y-2">
                {[
                  "High accuracy through systematic analysis",
                  "Transparent reasoning you can understand",
                  "Comparative diagnostics showing all possibilities",
                  "Confidence scoring for each diagnosis"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
