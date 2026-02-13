import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const REGISTER_URL = "https://mulastar.com/register.php?ref=NivLecK";

const earningsData = [
  { period: "Per Hour", amount: "KES 500 - 1,500", note: "Based on active chat minutes" },
  { period: "Per Day", amount: "KES 2,000 - 8,000", note: "With 4-6 hours of chatting" },
  { period: "Per Month", amount: "KES 50,000 - 200,000+", note: "Consistent daily activity" },
];

const EarningsSection = () => {
  return (
    <section id="earnings" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-5xl mb-4">
            Your Earning <span className="text-gradient">Potential</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            See how much you could earn in Kenya Shillings (KES)
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-10">
          {earningsData.map((item, i) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`glass rounded-2xl p-8 text-center ${
                i === 2 ? "border-primary/40 glow-box" : ""
              }`}
            >
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">{item.period}</p>
              <p className="font-display text-3xl font-bold text-text-bright md:text-4xl mb-2">{item.amount}</p>
              <p className="text-muted-foreground text-sm">{item.note}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-text-dim mb-8 max-w-md mx-auto">
          * Earnings vary based on activity level, chat duration, and demand. These are illustrative examples, not guaranteed income.
        </p>

        <div className="text-center">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl cta-gradient px-8 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Start Earning Now <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EarningsSection;
