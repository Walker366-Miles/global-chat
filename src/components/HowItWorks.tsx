import { motion } from "framer-motion";
import { UserPlus, Users, Coins } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up Free",
    description: "Anyone from any country can join. Create your account in under 2 minutes.",
  },
  {
    icon: Users,
    title: "Get Matched",
    description: "Our platform connects you with lonely foreigners looking for friendly conversation.",
  },
  {
    icon: Coins,
    title: "Chat & Earn",
    description: "Have genuine conversations and earn money for every minute you spend chatting.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-5xl mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Start earning in three simple steps
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative glass rounded-2xl p-8 text-center group hover:border-primary/40 transition-colors"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full cta-gradient text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <step.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-text-bright mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
