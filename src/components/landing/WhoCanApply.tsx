import { ShoppingBag, Users, Factory, Monitor, Wrench, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { icon: ShoppingBag, label: "D2C Brands", desc: "Direct-to-consumer products" },
  { icon: Users, label: "Consumer Startups", desc: "B2C digital platforms" },
  { icon: Factory, label: "MSMEs", desc: "Micro & small enterprises" },
  { icon: Monitor, label: "SaaS Startups", desc: "Software-as-a-service tools" },
  { icon: Wrench, label: "Manufacturing", desc: "Industrial & production" },
  { icon: MapPin, label: "Bharat-focused", desc: "Tier-2/3 market solutions" },
];

const WhoCanApply = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container relative mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-3 block">ELIGIBILITY</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Who Can Apply</h2>
          <p className="text-muted-foreground text-lg">Early-stage startups across these categories are welcome.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/30 hover:bg-card/80 transition-all duration-300 cursor-default group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <cat.icon className="text-primary" size={22} />
              </div>
              <span className="font-semibold text-sm mb-1">{cat.label}</span>
              <span className="text-xs text-muted-foreground">{cat.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
