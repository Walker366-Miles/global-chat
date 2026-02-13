import { motion } from "framer-motion";
import { Star } from "lucide-react";
import reviewer1 from "@/assets/reviewer1.jpg";
import reviewer2 from "@/assets/reviewer2.jpg";
import reviewer3 from "@/assets/reviewer3.jpg";
import reviewer4 from "@/assets/reviewer4.jpg";

const reviews = [
  {
    name: "Amina K.",
    country: "Kenya 🇰🇪",
    image: reviewer1,
    text: "I started two months ago and I've already made over KES 80,000. The conversations are fun and the people are lovely!",
    stars: 5,
  },
  {
    name: "Raj P.",
    country: "India 🇮🇳",
    image: reviewer2,
    text: "Perfect side income. I chat during my free hours and it genuinely feels rewarding — both financially and emotionally.",
    stars: 5,
  },
  {
    name: "Maria G.",
    country: "Philippines 🇵🇭",
    image: reviewer3,
    text: "No interview, no CV, just sign up and start. I wish I found this sooner. Already recommended it to all my friends.",
    stars: 5,
  },
  {
    name: "Carlos M.",
    country: "Colombia 🇨🇴",
    image: reviewer4,
    text: "I was skeptical at first, but the payments are real and consistent. This changed my financial situation completely.",
    stars: 4,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-5xl mb-4">
            What Our <span className="text-gradient">Chatters Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">Real people, real results</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="font-display font-semibold text-text-bright">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.country}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className={j < review.stars ? "fill-gold text-gold" : "text-muted-foreground/30"}
                  />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
