import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { LiveTournaments } from "./LiveTournaments";
import { GamesSection } from "./GamesSection";
import { Leaderboard } from "./Leaderboard";
import { HowItWorks } from "./HowItWorks";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";

export function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
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
