import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, DollarSign } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const REGISTER_URL = "https://mulastar.com/register.php?ref=NivLecK";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
            <MessageCircle size={14} />
            <span>Global opportunity — Open to everyone</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight text-text-bright md:text-6xl lg:text-7xl mb-6">
            Get Paid to Talk to{" "}
            <span className="text-gradient">Lonely People</span>{" "}
            Worldwide
          </h1>

          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto mb-10">
            Join thousands earning real money through friendly conversations. No experience needed — just your voice, your time, and your empathy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl cta-gradient px-8 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:scale-105 animate-pulse-glow"
            >
              Register Now <ArrowRight size={20} />
            </a>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-8 py-4 text-lg font-semibold text-primary transition-all hover:bg-primary/20"
            >
              <DollarSign size={20} /> Start Earning
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success" />
              <span>5,000+ Active Chatters</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>50+ Countries</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
