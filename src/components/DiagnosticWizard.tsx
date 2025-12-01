import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, AlertCircle, CheckCircle, Info } from "lucide-react";
import { toast } from "sonner";

// Expert System Knowledge Base
const laptopBrands = ["Dell", "HP", "Lenovo", "Asus", "Acer", "Apple", "MSI", "Razer"];

const symptoms = [
  { id: "power", label: "Won't turn on / No power", category: "power" },
  { id: "screen", label: "Black/blank screen", category: "display" },
  { id: "slow", label: "Running very slow", category: "performance" },
  { id: "overheat", label: "Overheating", category: "thermal" },
  { id: "noise", label: "Strange noises", category: "hardware" },
  { id: "battery", label: "Battery not charging", category: "power" },
  { id: "keyboard", label: "Keyboard issues", category: "hardware" },
  { id: "wifi", label: "WiFi connectivity problems", category: "network" },
  { id: "crash", label: "Frequent crashes/freezes", category: "system" },
  { id: "physical", label: "Physical damage visible", category: "hardware" },
];

// Forward Chaining Rules
const diagnosticRules = {
  power: {
    diagnoses: ["Power adapter failure", "Battery malfunction", "Motherboard issue", "Power button defect"],
    confidence: 85,
    recommendations: ["Test with different power adapter", "Remove battery and test with AC only", "Check power LED indicators"]
  },
  screen: {
    diagnoses: ["LCD panel failure", "Graphics card issue", "Display cable problem", "RAM failure"],
    confidence: 80,
    recommendations: ["Connect to external monitor", "Reseat RAM modules", "Check brightness settings"]
  },
  slow: {
    diagnoses: ["Insufficient RAM", "Hard drive failure", "Malware infection", "Too many startup programs"],
    confidence: 90,
    recommendations: ["Upgrade RAM", "Replace with SSD", "Run malware scan", "Disable unnecessary startup items"]
  },
  overheat: {
    diagnoses: ["Blocked cooling vents", "Thermal paste degradation", "Fan failure", "Dust accumulation"],
    confidence: 95,
    recommendations: ["Clean cooling system", "Replace thermal paste", "Test/replace cooling fan"]
  },
  noise: {
    diagnoses: ["Failing hard drive", "Fan obstruction", "Loose components", "Optical drive issue"],
    confidence: 75,
    recommendations: ["Backup data immediately", "Inspect and clean fans", "Check for loose screws"]
  },
  battery: {
    diagnoses: ["Battery degradation", "Charging circuit failure", "Power adapter issue", "BIOS/firmware problem"],
    confidence: 85,
    recommendations: ["Replace battery", "Update BIOS", "Test with new adapter"]
  },
  keyboard: {
    diagnoses: ["Liquid damage", "Loose keyboard connector", "Driver issues", "Physical key damage"],
    confidence: 80,
    recommendations: ["Clean keyboard", "Reseat keyboard cable", "Update drivers", "Replace keyboard"]
  },
  wifi: {
    diagnoses: ["WiFi adapter driver issue", "Hardware switch disabled", "Antenna problem", "Router compatibility"],
    confidence: 85,
    recommendations: ["Update WiFi drivers", "Check hardware switches", "Reset network settings"]
  },
  crash: {
    diagnoses: ["RAM failure", "Overheating", "Corrupted OS", "Hard drive errors"],
    confidence: 80,
    recommendations: ["Run memory diagnostics", "Check temperatures", "Scan disk for errors", "Clean install OS"]
  },
  physical: {
    diagnoses: ["Impact damage", "Liquid damage", "Cracked components", "Bent chassis"],
    confidence: 95,
    recommendations: ["Professional inspection required", "Replace damaged components", "Data recovery if needed"]
  }
};

export const DiagnosticWizard = () => {
  const [step, setStep] = useState(1);
  const [brand, setBrand] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [diagnosis, setDiagnosis] = useState<any>(null);

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(s => s !== symptomId)
        : [...prev, symptomId]
    );
  };

  const runDiagnosis = () => {
    if (selectedSymptoms.length === 0) {
      toast.error("Please select at least one symptom");
      return;
    }

    // Forward chaining logic
    const categories = selectedSymptoms
      .map(id => symptoms.find(s => s.id === id)?.category)
      .filter((cat): cat is string => Boolean(cat));

    if (categories.length === 0) {
      toast.error("Unable to categorize symptoms. Please try again.");
      return;
    }

    const categoryCount: Record<string, number> = {};
    categories.forEach(cat => {
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    });

    const primaryCategory = Object.entries(categoryCount)
      .sort(([,a], [,b]) => b - a)[0]?.[0];

    if (!primaryCategory) {
      toast.error("Unable to determine primary issue category");
      return;
    }

    const result = diagnosticRules[primaryCategory as keyof typeof diagnosticRules];

    if (!result) {
      toast.error("No diagnostic rules found for this category");
      return;
    }

    setDiagnosis({
      brand,
      symptoms: selectedSymptoms.map(id => symptoms.find(s => s.id === id)?.label).filter(Boolean),
      primaryCategory,
      ...result,
      allCategories: Object.keys(categoryCount)
    });

    setStep(3);
    toast.success("Diagnosis complete!");
  };

  const reset = () => {
    setStep(1);
    setBrand("");
    setSelectedSymptoms([]);
    setDiagnosis(null);
  };

  return (
    <section id="diagnose" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Smart Diagnostic Tool
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our step-by-step wizard to identify your laptop issues using advanced forward chaining analysis
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-strong animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-smooth ${
                      s === step
                        ? "bg-primary text-white"
                        : s < step
                        ? "bg-accent text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s < step ? <CheckCircle className="w-4 h-4" /> : s}
                  </div>
                ))}
              </div>
              <span className="ml-4">
                {step === 1 && "Select Brand"}
                {step === 2 && "Identify Symptoms"}
                {step === 3 && "View Diagnosis"}
              </span>
            </CardTitle>
            <CardDescription>
              {step === 1 && "Choose your laptop brand to begin"}
              {step === 2 && "Select all symptoms that match your laptop's issues"}
              {step === 3 && "Review the expert system analysis and recommendations"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Brand Selection */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <label className="text-sm font-medium">Laptop Brand</label>
                <Select value={brand} onValueChange={setBrand}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your laptop brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {laptopBrands.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  className="w-full gradient-hero text-white"
                  disabled={!brand}
                  onClick={() => setStep(2)}
                >
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Step 2: Symptom Selection */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {symptoms.map((symptom) => (
                    <div
                      key={symptom.id}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-smooth cursor-pointer"
                      onClick={() => handleSymptomToggle(symptom.id)}
                    >
                      <Checkbox
                        checked={selectedSymptoms.includes(symptom.id)}
                        onCheckedChange={() => handleSymptomToggle(symptom.id)}
                      />
                      <label className="text-sm cursor-pointer flex-1">
                        {symptom.label}
                      </label>
                      <Badge variant="secondary" className="text-xs">
                        {symptom.category}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    className="flex-1 gradient-hero text-white"
                    onClick={runDiagnosis}
                    disabled={selectedSymptoms.length === 0}
                  >
                    Analyze
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Diagnosis Results */}
            {step === 3 && diagnosis && (
              <div className="space-y-6 animate-fade-in">
                {/* Header */}
                <div className="text-center p-6 gradient-card rounded-xl">
                  <AlertCircle className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold mb-2">Diagnosis Complete</h3>
                  <p className="text-muted-foreground">
                    Analyzed {diagnosis.symptoms.length} symptom(s) for {diagnosis.brand} laptop
                  </p>
                </div>

                {/* Possible Diagnoses */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    Possible Issues (Confidence: {diagnosis.confidence}%)
                  </h4>
                  <div className="space-y-2">
                    {diagnosis.diagnoses?.map((d: string, i: number) => (
                      <div
                        key={i}
                        className="p-3 border border-border rounded-lg hover:bg-muted/50 transition-smooth"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="font-medium">{d}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    Recommended Actions
                  </h4>
                  <div className="space-y-2">
                    {diagnosis.recommendations?.map((rec: string, i: number) => (
                      <div
                        key={i}
                        className="p-3 bg-accent/10 border border-accent/20 rounded-lg"
                      >
                        <span className="text-sm">{i + 1}. {rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Decision Tree */}
                <div className="p-6 gradient-card rounded-xl">
                  <h4 className="font-semibold mb-4 text-center">Forward Chaining Analysis</h4>
                  <div className="flex flex-col items-center gap-3">
                    <Badge className="bg-primary text-white">Symptoms Detected</Badge>
                    <div className="w-px h-8 bg-border" />
                    <div className="flex gap-2 flex-wrap justify-center">
                      {diagnosis.allCategories?.map((cat: string, i: number) => (
                        <Badge key={i} variant="secondary">{cat}</Badge>
                      ))}
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <Badge className="bg-accent text-white">Primary Category: {diagnosis.primaryCategory}</Badge>
                    <div className="w-px h-8 bg-border" />
                    <Badge className="bg-secondary text-white">Diagnosis Generated</Badge>
                  </div>
                </div>

                <Button
                  className="w-full"
                  variant="outline"
                  onClick={reset}
                >
                  Start New Diagnosis
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
