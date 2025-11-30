import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Shield, BarChart3, Workflow, FileSearch } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms trained on thousands of laptop issues",
      features: ["Neural network diagnostics", "Pattern recognition", "Continuous learning"],
      color: "from-primary to-secondary"
    },
    {
      icon: Workflow,
      title: "Visual Decision Trees",
      description: "Interactive flowcharts showing the logical path to your diagnosis",
      features: ["Step-by-step visualization", "Interactive exploration", "PDF export"],
      color: "from-secondary to-accent"
    },
    {
      icon: BarChart3,
      title: "Comparative Analysis",
      description: "See multiple possible diagnoses ranked by probability and severity",
      features: ["Confidence scoring", "Risk assessment", "Priority ranking"],
      color: "from-accent to-primary"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get comprehensive diagnostics in seconds, not days",
      features: ["Real-time processing", "No waiting periods", "Immediate access"],
      color: "from-primary to-accent"
    },
    {
      icon: Shield,
      title: "Expert Validation",
      description: "All diagnostic rules verified by certified hardware technicians",
      features: ["Professional accuracy", "Industry standards", "Regular updates"],
      color: "from-secondary to-primary"
    },
    {
      icon: FileSearch,
      title: "Detailed Reports",
      description: "Comprehensive breakdown of issues, causes, and recommended solutions",
      features: ["Technical details", "Action plans", "Cost estimates"],
      color: "from-accent to-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Diagnostic Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-leading tools and methodologies for accurate laptop troubleshooting
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-strong transition-smooth group animate-fade-in hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          <Card className="gradient-card shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl">Success Metrics</CardTitle>
              <CardDescription>Real results from our diagnostic system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { label: "Diagnostic Accuracy", value: "95%", color: "bg-accent" },
                  { label: "Average Resolution Time", value: "24hrs", color: "bg-primary" },
                  { label: "User Satisfaction", value: "4.8/5", color: "bg-secondary" },
                  { label: "Issues Resolved", value: "10K+", color: "bg-accent" }
                ].map((metric, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{metric.label}</span>
                      <span className="text-primary">{metric.value}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${metric.color} transition-all duration-1000 ease-out`}
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl">Case Study Example</CardTitle>
              <CardDescription>How our system diagnosed a complex issue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold mb-2">Problem:</div>
                  <p className="text-sm text-muted-foreground">
                    Dell laptop with intermittent black screen, overheating, and random shutdowns
                  </p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="font-semibold mb-2 text-primary">Analysis:</div>
                  <ul className="text-sm space-y-1">
                    <li>✓ Forward chaining identified thermal category</li>
                    <li>✓ Cross-referenced with display issues</li>
                    <li>✓ 92% confidence in GPU thermal failure</li>
                  </ul>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="font-semibold mb-2 text-accent">Solution:</div>
                  <p className="text-sm">
                    GPU thermal paste replacement + cooling system cleaning. 
                    Issue resolved with 100% success rate.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
