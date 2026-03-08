import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Sprout, Sparkles, HardHat, ShoppingCart } from "lucide-react";

const startups = [
  { name: "FarmKart", category: "AgriTech", icon: Sprout, description: "Helping farmers sell produce directly to consumers, cutting out middlemen and boosting farmer income across rural India." },
  { name: "GlowLeaf", category: "D2C", icon: Sparkles, description: "Sustainable skincare brand using natural ingredients sourced ethically from Indian farms." },
  { name: "BuildEase", category: "SaaS", icon: HardHat, description: "Project management platform built specifically for the Indian construction industry." },
  { name: "QuickKart", category: "Hyperlocal", icon: ShoppingCart, description: "Ultra-fast hyperlocal delivery startup connecting local kirana stores with nearby customers." },
];

const FeaturedStartups = () => {
  return (
    <section id="startups" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-3 block">SHOWCASE</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Featured Startups</h2>
          <p className="text-muted-foreground text-lg">Discover startups that have pitched on Karo Pitch.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {startups.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-300">
                  <s.icon className="text-accent" size={22} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="font-semibold">{s.name}</h3>
                    <Badge variant="secondary" className="text-[10px] px-2 py-0 h-5 bg-primary/10 text-primary border-0">
                      {s.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStartups;
