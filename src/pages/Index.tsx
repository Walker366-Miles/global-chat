import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import EarningsSection from "@/components/EarningsSection";
import SliderSection from "@/components/SliderSection";
import ReviewsSection from "@/components/ReviewsSection";
import PaymentProofSection from "@/components/PaymentProofSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWorks />
      <BenefitsSection />
      <EarningsSection />
      <SliderSection />
      <ReviewsSection />
      <PaymentProofSection />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
