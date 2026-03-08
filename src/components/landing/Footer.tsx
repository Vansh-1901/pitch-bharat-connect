const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-bold text-foreground tracking-tight">
          Karo<span className="gradient-text">Pitch</span>
          <span className="font-normal text-muted-foreground ml-2">by KaroStartup</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors duration-200">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors duration-200">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors duration-200">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} KaroStartup. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
