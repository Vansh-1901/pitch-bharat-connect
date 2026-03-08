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
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-3 block tracking-wider">THE PROCESS</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">How It Works</h2>
          <p className="text-muted-foreground text-lg">Four simple steps from application to funding.</p>
        </motion.div>

        {/* Connecting line (desktop) */}
        <div className="hidden lg:block absolute top-[58%] left-[15%] right-[15%] h-px">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative text-center group"
            >
              {/* Step number badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.3 + i * 0.12 }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-accent bg-accent/15 rounded-full w-7 h-7 flex items-center justify-center z-10 border border-accent/20"
              >
                {i + 1}
              </motion.div>

              <div className="glass rounded-2xl p-6 pt-8 h-full hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="text-primary" size={26} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
