import { ClipboardList, CheckCircle, Presentation, Rocket } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Apply with Your Pitch Deck", description: "Submit your startup details and pitch deck through our simple application form." },
  { icon: CheckCircle, title: "Get Shortlisted", description: "Our team at KaroStartup reviews applications and shortlists promising startups." },
  { icon: Presentation, title: "Pitch Live to Investors", description: "Present your startup to a panel of experienced investors in a live pitch session." },
  { icon: Rocket, title: "Raise Funding & Scale", description: "Connect with interested investors, close your round, and scale your startup." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">Four simple steps to pitch your startup and raise funding.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <step.icon className="text-primary" size={28} />
              </div>
              <span className="absolute top-0 right-1/2 translate-x-10 -translate-y-1 text-xs font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
