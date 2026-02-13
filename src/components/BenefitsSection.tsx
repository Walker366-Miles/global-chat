import { motion } from "framer-motion";
import { Globe, Clock, Heart, Wallet, Sparkles, Users } from "lucide-react";

const benefits = [
  { icon: Sparkles, title: "No Experience Required", desc: "Just be yourself and have natural conversations." },
  { icon: Globe, title: "Work From Anywhere", desc: "All you need is a phone or laptop and internet." },
  { icon: Clock, title: "Flexible Hours", desc: "Chat whenever you want — mornings, evenings, weekends." },
  { icon: Heart, title: "Make a Difference", desc: "Help lonely people feel connected and appreciated." },
  { icon: Wallet, title: "Easy Income", desc: "Turn your conversation skills into real money." },
  { icon: Users, title: "Global Exposure", desc: "Meet people from 50+ countries and cultures." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-surface/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-5xl mb-4">
            Why <span className="text-gradient">Join Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A flexible, rewarding way to earn from conversations
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <b.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-text-bright mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
