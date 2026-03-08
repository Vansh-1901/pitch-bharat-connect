import { ShoppingBag, Users, Factory, Monitor, Wrench, MapPin } from "lucide-react";

const categories = [
  { icon: ShoppingBag, label: "D2C Brands" },
  { icon: Users, label: "Consumer Startups" },
  { icon: Factory, label: "MSMEs" },
  { icon: Monitor, label: "SaaS Startups" },
  { icon: Wrench, label: "Manufacturing" },
  { icon: MapPin, label: "Bharat-focused Startups" },
];

const WhoCanApply = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Can Apply</h2>
          <p className="text-muted-foreground text-lg">Early-stage startups across these categories are welcome to pitch.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md hover:border-primary/30 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <cat.icon className="text-primary" size={22} />
              </div>
              <span className="font-medium text-sm">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
