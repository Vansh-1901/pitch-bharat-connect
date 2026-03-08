import { Target, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Karo Pitch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Thousands of founders across India — especially from Tier-2 and Tier-3 cities — are building strong businesses but lack access to investors. Karo Pitch bridges this gap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Target className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Structured Pitch Platform</h3>
            <p className="text-muted-foreground leading-relaxed">
              We provide a structured platform where startups can present their ideas to a curated panel of investors, gaining visibility and actionable feedback.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Users className="text-accent" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Bharat-First Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              We believe the next wave of innovation is coming from India's heartland. Karo Pitch is designed to give every founder an equal shot at raising capital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
