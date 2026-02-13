import { motion } from "framer-motion";
import { MessageSquare, Clock, Banknote, Smile } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    icon: MessageSquare,
    title: "Start a Conversation",
    description: "Connect with someone who needs to talk. Be their friend.",
    color: "text-primary",
  },
  {
    icon: Clock,
    title: "Time = Money",
    description: "Every minute you chat, you earn. It's that simple.",
    color: "text-accent",
  },
  {
    icon: Banknote,
    title: "Get Paid Weekly",
    description: "Reliable payments straight to your mobile money or bank.",
    color: "text-success",
  },
  {
    icon: Smile,
    title: "Make Someone's Day",
    description: "Your conversations genuinely improve lives around the world.",
    color: "text-gold",
  },
];

const SliderSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-surface/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-5xl mb-4">
            How Easy It <span className="text-gradient">Is</span>
          </h2>
        </motion.div>

        <div className="relative max-w-lg mx-auto h-64">
          {slides.map((slide, i) => (
            <motion.div
              key={slide.title}
              initial={false}
              animate={{
                opacity: i === current ? 1 : 0,
                x: i === current ? 0 : i < current ? -60 : 60,
                scale: i === current ? 1 : 0.9,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center glass rounded-2xl p-8 text-center"
              style={{ pointerEvents: i === current ? "auto" : "none" }}
            >
              <slide.icon size={48} className={`${slide.color} mb-4`} />
              <h3 className="font-display text-2xl font-bold text-text-bright mb-3">{slide.title}</h3>
              <p className="text-muted-foreground text-lg">{slide.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
