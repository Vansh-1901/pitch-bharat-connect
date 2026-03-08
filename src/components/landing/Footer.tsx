import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border/40 py-10"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-bold text-foreground tracking-tight">
          Karo<span className="gradient-text">Pitch</span>
          <span className="font-normal text-muted-foreground ml-2">by KaroStartup</span>
        </div>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </div>
        <div>© {new Date().getFullYear()} KaroStartup. All rights reserved.</div>
      </div>
    </motion.footer>
  );
};

export default Footer;
