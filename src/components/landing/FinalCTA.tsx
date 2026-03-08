import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div className="container relative mx-auto px-4 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5">
            Ready to Pitch Your{" "}
            <span className="gradient-text">Startup?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Join hundreds of founders who have pitched on Karo Pitch and taken their startups to the next level. Apply now and get discovered by investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 gap-2 glow-primary rounded-xl h-12">
              Apply Now <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 rounded-xl h-12 border-border/60 hover:bg-secondary/50">
              Partner With Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
