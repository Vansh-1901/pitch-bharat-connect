import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10" />
      <div className="container relative mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Pitch Your Startup?</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Join hundreds of founders who have pitched on Karo Pitch and taken their startups to the next level.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-8 gap-2">
            Apply Now <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
