import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { DiagnosticWizard } from "@/components/DiagnosticWizard";
import { Tutorial } from "@/components/Tutorial";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <DiagnosticWizard />
      <Tutorial />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
