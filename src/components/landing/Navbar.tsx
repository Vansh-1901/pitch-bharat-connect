import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-xl font-bold text-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Karo<span className="text-accent">Pitch</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#startups" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Startups</a>
          <a href="#investors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Investors</a>
          <Button size="sm">Apply to Pitch</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-3">
          <a href="#about" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>About</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#startups" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Startups</a>
          <a href="#investors" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Investors</a>
          <Button size="sm" className="w-fit">Apply to Pitch</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
