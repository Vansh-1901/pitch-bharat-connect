import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Lightbulb, Zap } from "lucide-react";
import { motion } from "framer-motion";

const floatingCards = [
  { icon: TrendingUp, label: "₹2Cr Raised", x: "left-[5%]", y: "top-[25%]", delay: 0 },
  { icon: Lightbulb, label: "SaaS Pitch", x: "right-[8%]", y: "top-[20%]", delay: 0.5 },
  { icon: Zap, label: "D2C Brand", x: "left-[10%]", y: "bottom-[20%]", delay: 1 },
  { icon: Sparkles, label: "Funded!", x: "right-[5%]", y: "bottom-[25%]", delay: 1.5 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Complex gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      {/* Floating cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + card.delay * 0.3, duration: 0.6 }}
          className={`absolute ${card.x} ${card.y} hidden lg:flex items-center gap-2 glass rounded-xl px-4 py-2.5 animate-float`}
          style={{ animationDelay: `${card.delay}s` }}
        >
          <card.icon size={16} className="text-primary" />
          <span className="text-xs font-medium text-foreground/80">{card.label}</span>
        </motion.div>
      ))}

      <div className="container relative mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          Backed by KaroStartup
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          Pitch Your Startup to{" "}
          <br className="hidden sm:block" />
          India's <span className="gradient-text">Top Investors</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Karo Pitch connects ambitious founders from across Bharat with investors who are looking for the next big startup.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="text-base px-8 gap-2 glow-primary rounded-xl h-12">
            Apply to Pitch <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 rounded-xl h-12 border-border/60 hover:bg-secondary/50">
            Explore Startups
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-md mx-auto"
        >
          {[
            { value: "500+", label: "Startups Pitched" },
            { value: "50+", label: "Active Investors" },
            { value: "₹10Cr+", label: "Funding Raised" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
