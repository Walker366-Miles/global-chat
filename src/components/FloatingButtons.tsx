import { MessageCircle, Send } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(145,65%,45%)] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="https://t.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(200,80%,50%)] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on Telegram"
      >
        <Send size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
