const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          <span className="font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Karo<span className="text-accent">Pitch</span>
          </span>{" "}
          by KaroStartup
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} KaroStartup. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
