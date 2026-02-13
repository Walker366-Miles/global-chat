const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="font-display text-lg font-bold text-text-bright mb-2">
          GLOBALCHAT<span className="text-gradient"> CONNECT</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} GlobalChat Connect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
