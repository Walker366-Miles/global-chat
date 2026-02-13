import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can I join from any country?",
    a: "Yes! Global Chat is open to people from all over the world. As long as you have an internet connection, you can sign up and start earning.",
  },
  {
    q: "Do I need any experience?",
    a: "No experience is required. We're looking for friendly, empathetic people who enjoy conversations. If you can chat, you can earn.",
  },
  {
    q: "How do I get paid?",
    a: "Payments are made via Mobile Money (M-Pesa, etc.) or direct bank transfer, depending on your location. Payouts are processed weekly.",
  },
  {
    q: "Is this part-time or full-time?",
    a: "It's completely up to you! Many members treat it as a side hustle, while others chat full-time. You choose your own schedule.",
  },
  {
    q: "What devices do I need?",
    a: "Any smartphone, tablet, or computer with an internet connection works. There's nothing to download — everything runs in your browser.",
  },
  {
    q: "Is there a registration fee?",
    a: "Signing up is quick and easy. Visit our registration page to get started and see current joining options.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-5xl mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass rounded-xl border border-border/50 px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-text-bright hover:text-primary hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
