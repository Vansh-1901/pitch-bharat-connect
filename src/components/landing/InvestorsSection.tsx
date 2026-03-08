import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const investors = [
  { name: "Priya Sharma", role: "Angel Investor", initials: "PS" },
  { name: "Rahul Mehta", role: "VC Partner", initials: "RM" },
  { name: "Anita Desai", role: "Seed Fund Manager", initials: "AD" },
  { name: "Vikram Singh", role: "Angel Network Lead", initials: "VS" },
];

const InvestorsSection = () => {
  return (
    <section id="investors" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Investors Looking for the Next Big Startup</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Top investors attend our pitch events to discover and fund promising startups from across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {investors.map((inv, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <Avatar className="w-16 h-16 mx-auto mb-4">
                <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                  {inv.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold">{inv.name}</h3>
              <p className="text-sm text-muted-foreground">{inv.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
