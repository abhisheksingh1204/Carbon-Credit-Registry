import { Button } from "../../components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const handleGetStarted = () => {
    const roleSection = document.getElementById("role-selector");
    if (roleSection) {
      roleSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-primary/5 to-accent/5 px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Building Stronger Communities
          <span className="text-primary block mt-2">Together</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Connect NGOs, administrators, and validators in one transparent
          platform. Foster accountability, collaboration, and meaningful impact
          in your community.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-orange-accent hover:bg-orange-accent/90 text-white font-semibold px-8"
            onClick={handleGetStarted}
            data-testid="button-get-started"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-8"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>Transparent Operations</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>Community-Driven</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>Secure Platform</span>
          </div>
        </div>
      </div>
    </section>
  );
}
