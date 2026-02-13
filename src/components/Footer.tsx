const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="font-display text-lg font-bold text-text-bright mb-2">
          GLOBAL<span className="text-gradient"> CHAT</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Global Chat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
