import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const AboutKaroStartup = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden group hover:border-primary/20 transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-700" />

          <div className="relative">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
            >
              <BookOpen className="text-primary" size={26} />
            </motion.div>
            <span className="text-sm font-medium text-primary mb-3 block tracking-wider">THE PARENT PLATFORM</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">About KaroStartup</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              KaroStartup is one of India's leading startup storytelling platforms. We've published thousands of founder stories and built a thriving community of entrepreneurs across the country.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From inspiring success stories to practical resources, KaroStartup empowers founders at every stage. Karo Pitch is our initiative to take this mission further — by directly connecting founders with the capital they need to grow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutKaroStartup;
