import { Zap, Users, Trophy, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-neon-green/5 blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-neon-blue/5 blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-neon-purple/3 blur-[150px]"></div>
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-neon-green/20 bg-neon-green/5 px-4 py-1.5 mb-8">
          <Zap className="h-4 w-4 text-neon-green" />
          <span className="text-xs font-semibold text-neon-green uppercase tracking-wider">Season 5 Live Now</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6">
          COMPETE.{" "}
          <span className="bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple bg-clip-text text-transparent">
            CONQUER.
          </span>
          <br />
          <span className="text-neon-green">WIN.</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
          🎮 <strong className="text-white">Free Fire</strong> aur <strong className="text-white">PUBG</strong> ke sabse bade tournaments mein hissa lo. 
          Daily matches, huge prize pools, aur real-time leaderboards. 
          <span className="text-neon-yellow"> ₹50,000+</span> daily prizes! 🏆
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-green to-emerald-500 px-8 py-4 text-lg font-bold text-dark-bg transition-all hover:scale-105 animate-pulse-glow">
            <Trophy className="h-5 w-5" />
            Join Tournament
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="flex items-center gap-2 rounded-xl border border-dark-border px-8 py-4 text-lg font-medium text-white transition hover:border-neon-blue/50 hover:text-neon-blue">
            <Users className="h-5 w-5" />
            Browse Matches
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "50K+", label: "Active Players", icon: "👥" },
            { value: "₹5L+", label: "Prize Given", icon: "💰" },
            { value: "1000+", label: "Tournaments", icon: "🏆" },
            { value: "24/7", label: "Live Support", icon: "🎧" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-dark-border bg-dark-card/50 p-4 backdrop-blur-sm hover:border-neon-green/30 transition">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </section>
  );
}
