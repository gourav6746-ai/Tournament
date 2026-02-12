import { Navbar } from "./components/Navbar"; // 'i' ko small kiya
import { HeroSection } from "./components/HeroSection";
import { LiveTournaments } from "./components/LiveTournaments";
import { GamesSection } from "./components/GamesSection";
import { Leaderboard } from "./components/Leaderboard";
import { HowItWorks } from "./components/HowItWorks";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white antialiased">
      <Navbar />
      <HeroSection />
      <LiveTournaments />
      <GamesSection />
      <Leaderboard />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
}
