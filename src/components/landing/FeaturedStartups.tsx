import { Badge } from "@/components/ui/badge";

const startups = [
  { name: "FarmKart", category: "AgriTech", description: "Helping farmers sell produce directly to consumers, cutting out middlemen and increasing farmer income." },
  { name: "GlowLeaf", category: "D2C", description: "Sustainable skincare brand using natural ingredients sourced from Indian farms." },
  { name: "BuildEase", category: "SaaS", description: "Project management platform built specifically for the construction industry." },
  { name: "QuickKart", category: "Hyperlocal", description: "Ultra-fast hyperlocal delivery startup connecting local stores with nearby customers." },
];

const FeaturedStartups = () => {
  return (
    <section id="startups" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Startups</h2>
          <p className="text-muted-foreground text-lg">Discover some of the startups that have pitched on Karo Pitch.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {startups.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center font-bold text-accent text-sm">
                  {s.name[0]}
                </div>
                <div>
                  <h3 className="font-semibold">{s.name}</h3>
                  <Badge variant="secondary" className="text-xs">{s.category}</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStartups;
