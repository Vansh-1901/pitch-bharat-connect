import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const investors = [
  { name: "Priya Sharma", role: "Angel Investor", initials: "PS", focus: "D2C & Consumer" },
  { name: "Rahul Mehta", role: "VC Partner", initials: "RM", focus: "SaaS & DeepTech" },
  { name: "Anita Desai", role: "Seed Fund Manager", initials: "AD", focus: "AgriTech & Rural" },
  { name: "Vikram Singh", role: "Angel Network Lead", initials: "VS", focus: "Manufacturing" },
];

const InvestorsSection = () => {
  return (
    <section id="investors" className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container relative mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent mb-3 block">INVESTORS</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Meet Investors Looking for the{" "}
            <span className="gradient-text">Next Big Startup</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Top investors attend our pitch events to discover and fund promising startups from across India.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {investors.map((inv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
            >
              <Avatar className="w-16 h-16 mx-auto mb-4 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <AvatarFallback className="text-base font-semibold bg-primary/10 text-primary">
                  {inv.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mb-0.5">{inv.name}</h3>
              <p className="text-sm text-primary/80 mb-2">{inv.role}</p>
              <p className="text-xs text-muted-foreground">Focus: {inv.focus}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
