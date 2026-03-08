import { Target, Globe } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Target,
    title: "Structured Pitch Platform",
    description: "A curated pitch platform where founders can present their ideas to a panel of experienced investors, gaining visibility, feedback, and real funding opportunities.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Globe,
    title: "Bharat-First Approach",
    description: "We believe the next wave of innovation is coming from India's heartland. Karo Pitch gives every founder — from metros to small towns — an equal shot at raising capital.",
    gradient: "from-accent/20 to-accent/5",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="container relative mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-3 block tracking-wider">THE MISSION</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">About Karo Pitch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Thousands of founders across India are building strong businesses but lack access to investors. Karo Pitch bridges this gap by creating a structured pitch platform where startups can present their ideas directly to investors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <card.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
