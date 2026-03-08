import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-8">
          <Sparkles size={14} className="text-accent" />
          By KaroStartup
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          Pitch Your Startup to India's{" "}
          <span className="text-primary">Top Investors</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Karo Pitch is a platform where founders from across India can showcase their startups, pitch to investors, and unlock funding opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-8 gap-2">
            Apply to Pitch <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8">
            Explore Startups
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div><span className="font-semibold text-foreground text-lg">500+</span><br />Startups Pitched</div>
          <div className="w-px h-10 bg-border" />
          <div><span className="font-semibold text-foreground text-lg">50+</span><br />Investors</div>
          <div className="w-px h-10 bg-border" />
          <div><span className="font-semibold text-foreground text-lg">₹10Cr+</span><br />Funding Raised</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
