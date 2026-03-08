import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const investors = [
  { name: "Priya Sharma", role: "Angel Investor", initials: "PS", focus: "D2C & Consumer", desc: "Backed 20+ consumer startups across India" },
  { name: "Rahul Mehta", role: "VC Partner", initials: "RM", focus: "SaaS & DeepTech", desc: "Partner at a leading early-stage fund" },
  { name: "Anita Desai", role: "Seed Fund Manager", initials: "AD", focus: "AgriTech & Rural", desc: "Investing in Bharat-focused innovation" },
  { name: "Vikram Singh", role: "Angel Network Lead", initials: "VS", focus: "Manufacturing", desc: "Connecting capital with industrial startups" },
];

const InvestorsSection = () => {
  return (
    <section id="investors" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent mb-3 block tracking-wider">INVESTORS</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Meet Investors Looking for the{" "}
            <span className="gradient-text">Next Big Startup.</span>
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
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-[40px]" />
              </div>

              <div className="relative">
                <Avatar className="w-16 h-16 mx-auto mb-4 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300 group-hover:scale-105">
                  <AvatarFallback className="text-base font-semibold bg-primary/10 text-primary">
                    {inv.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-0.5">{inv.name}</h3>
                <p className="text-sm text-primary/80 mb-1">{inv.role}</p>
                <p className="text-xs text-muted-foreground mb-2">{inv.desc}</p>
                <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                  {inv.focus}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
