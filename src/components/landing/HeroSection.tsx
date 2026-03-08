import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Lightbulb, Zap, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const floatingCards = [
  { icon: TrendingUp, label: "₹2Cr Raised", x: "left-[3%]", y: "top-[28%]", delay: 0 },
  { icon: Lightbulb, label: "SaaS Pitch", x: "right-[6%]", y: "top-[22%]", delay: 0.6 },
  { icon: Zap, label: "D2C Brand", x: "left-[8%]", y: "bottom-[22%]", delay: 1.2 },
  { icon: Sparkles, label: "Funded!", x: "right-[3%]", y: "bottom-[28%]", delay: 1.8 },
  { icon: Rocket, label: "Series A", x: "right-[15%]", y: "top-[45%]", delay: 2.2 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-primary/8 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[90px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
        <div className="absolute inset-0 dot-pattern opacity-25" />
      </div>

      {/* Floating particle dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Floating cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.2, duration: 0.7, type: "spring" }}
          className={`absolute ${card.x} ${card.y} hidden lg:flex items-center gap-2.5 glass rounded-xl px-4 py-2.5 animate-float cursor-default hover:border-primary/40 transition-colors duration-300`}
          style={{ animationDelay: `${card.delay}s` }}
        >
          <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center">
            <card.icon size={14} className="text-primary" />
          </div>
          <span className="text-xs font-medium text-foreground/80">{card.label}</span>
        </motion.div>
      ))}

      <div className="container relative mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm text-muted-foreground mb-8 hover:border-primary/30 transition-colors duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Backed by KaroStartup
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
        >
          Pitch Your Startup to{" "}
          <br className="hidden sm:block" />
          India's <span className="gradient-text">Top Investors.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Karo Pitch connects ambitious founders from across India, especially Tier-2 and Tier-3 cities, with investors looking for the next big startup.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="text-base px-8 gap-2 glow-primary rounded-xl h-12 group">
            Apply to Pitch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 rounded-xl h-12 border-border/60 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300">
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
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="text-center cursor-default"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
