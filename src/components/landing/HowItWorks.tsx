import { ClipboardList, CheckCircle, Presentation, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: ClipboardList, title: "Apply with Your Pitch Deck", description: "Submit your startup details and pitch deck through our simple application." },
  { icon: CheckCircle, title: "Get Shortlisted", description: "Our team reviews applications and shortlists the most promising startups." },
  { icon: Presentation, title: "Pitch Live to Investors", description: "Present your startup to a curated panel of experienced investors." },
  { icon: Rocket, title: "Raise Funding & Scale", description: "Connect with interested investors, close your round, and grow." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-3 block">THE PROCESS</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">How It Works</h2>
          <p className="text-muted-foreground text-lg">Four simple steps from application to funding.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center group"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-accent bg-accent/10 rounded-full w-6 h-6 flex items-center justify-center z-10">
                {i + 1}
              </div>

              <div className="glass rounded-2xl p-6 pt-8 h-full hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                  <step.icon className="text-primary" size={26} />
                </div>
                <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-border/60" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
