import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, TrendingUp } from "lucide-react";

const proofs = [
  {
    icon: CheckCircle,
    title: "KES 15,200 Received",
    subtitle: "Weekly payout — Mobile Money",
    date: "Feb 7, 2026",
  },
  {
    icon: TrendingUp,
    title: "KES 42,800 Received",
    subtitle: "Monthly earnings — Bank Transfer",
    date: "Jan 31, 2026",
  },
  {
    icon: CheckCircle,
    title: "KES 8,500 Received",
    subtitle: "Weekly payout — Mobile Money",
    date: "Jan 24, 2026",
  },
];

const PaymentProofSection = () => {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <ShieldCheck size={20} />
            <span className="text-sm font-medium uppercase tracking-wider">Verified Payments</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-5xl mb-4">
            Payment <span className="text-gradient">Proof</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Consistent, reliable payouts to our community members
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {proofs.map((proof, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-6 border-success/20 hover:border-success/40 transition-colors"
            >
              <proof.icon size={28} className="text-success mb-4" />
              <p className="font-display text-xl font-bold text-text-bright mb-1">{proof.title}</p>
              <p className="text-muted-foreground text-sm mb-3">{proof.subtitle}</p>
              <p className="text-xs text-text-dim">{proof.date}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-text-dim mt-8 max-w-md mx-auto">
          * Payment amounts shown are illustrative. Actual earnings depend on individual activity and performance.
        </p>
      </div>
    </section>
  );
};

export default PaymentProofSection;
