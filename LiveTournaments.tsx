import { useState } from "react";
import { Clock, Users, Zap, Crown, ChevronRight, Flame, Star } from "lucide-react";

type Tournament = {
  id: number;
  game: string;
  gameIcon: string;
  title: string;
  prizePool: string;
  entryFee: string;
  players: string;
  maxPlayers: string;
  time: string;
  status: "live" | "upcoming" | "filling";
  mode: string;
  map: string;
  tier: "free" | "paid" | "premium";
};

const tournaments: Tournament[] = [
  {
    id: 1, game: "Free Fire", gameIcon: "🔥", title: "Free Fire MAX - Squad Showdown",
    prizePool: "₹10,000", entryFee: "FREE", players: "88", maxPlayers: "100",
    time: "LIVE NOW", status: "live", mode: "Squad (4v4)", map: "Bermuda", tier: "free"
  },
  {
    id: 2, game: "PUBG Mobile", gameIcon: "🎯", title: "PUBG Classic - Erangel Battle",
    prizePool: "₹25,000", entryFee: "₹50", players: "72", maxPlayers: "100",
    time: "LIVE NOW", status: "live", mode: "Squad (4v4)", map: "Erangel", tier: "paid"
  },
  {
    id: 3, game: "Free Fire", gameIcon: "🔥", title: "Free Fire Solo Sniper Challenge",
    prizePool: "₹5,000", entryFee: "₹20", players: "42", maxPlayers: "50",
    time: "Starts in 45 min", status: "filling", mode: "Solo", map: "Kalahari", tier: "paid"
  },
  {
    id: 4, game: "PUBG Mobile", gameIcon: "🎯", title: "PUBG Duo - Miramar Madness",
    prizePool: "₹15,000", entryFee: "₹30", players: "56", maxPlayers: "100",
    time: "Starts in 1 hr", status: "filling", mode: "Duo", map: "Miramar", tier: "paid"
  },
  {
    id: 5, game: "Free Fire", gameIcon: "🔥", title: "Free Fire Clash Squad Tournament",
    prizePool: "₹8,000", entryFee: "FREE", players: "30", maxPlayers: "64",
    time: "Starts in 2 hrs", status: "upcoming", mode: "Clash Squad", map: "Bermuda", tier: "free"
  },
  {
    id: 6, game: "PUBG Mobile", gameIcon: "🎯", title: "PUBG Premium League - TDM",
    prizePool: "₹50,000", entryFee: "₹100", players: "18", maxPlayers: "32",
    time: "Starts in 3 hrs", status: "upcoming", mode: "TDM (4v4)", map: "Warehouse", tier: "premium"
  },
];

export function LiveTournaments() {
  const [filter, setFilter] = useState<"all" | "Free Fire" | "PUBG Mobile">("all");

  const filtered = filter === "all" ? tournaments : tournaments.filter(t => t.game === filter);

  return (
    <section id="tournaments" className="relative py-20 bg-dark-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-red/20 bg-neon-red/5 px-4 py-1.5 mb-4">
            <Flame className="h-4 w-4 text-neon-red animate-countdown" />
            <span className="text-xs font-semibold text-neon-red uppercase tracking-wider">Live & Upcoming</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            🏆 Tournament <span className="text-neon-green">Arena</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Abhi join karo aur jeeto real cash prizes! Har roz naye tournaments.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          {[
            { label: "All Games", value: "all" as const, icon: "🎮" },
            { label: "Free Fire", value: "Free Fire" as const, icon: "🔥" },
            { label: "PUBG Mobile", value: "PUBG Mobile" as const, icon: "🎯" },
          ].map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                filter === f.value
                  ? "bg-neon-green text-dark-bg shadow-lg shadow-neon-green/20"
                  : "border border-dark-border text-gray-400 hover:border-neon-green/30 hover:text-white"
              }`}
            >
              <span>{f.icon}</span>
              {f.label}
            </button>
          ))}
        </div>

        {/* Tournament Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="group relative rounded-2xl border border-dark-border bg-dark-card p-5 transition-all hover:border-neon-green/30 hover:bg-dark-card-hover hover:shadow-xl hover:shadow-neon-green/5"
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{t.gameIcon}</span>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase">{t.game}</div>
                    <div className="text-xs text-gray-600">{t.mode} • {t.map}</div>
                  </div>
                </div>
                <div className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                  t.status === "live" 
                    ? "bg-neon-red/10 text-neon-red border border-neon-red/20" 
                    : t.status === "filling" 
                    ? "bg-neon-yellow/10 text-neon-yellow border border-neon-yellow/20"
                    : "bg-neon-blue/10 text-neon-blue border border-neon-blue/20"
                }`}>
                  {t.status === "live" && <span className="h-2 w-2 rounded-full bg-neon-red animate-countdown"></span>}
                  {t.status === "live" ? "LIVE" : t.status === "filling" ? "FILLING" : "UPCOMING"}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-green transition">{t.title}</h3>

              {/* Prize & Entry */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 rounded-xl bg-gradient-to-r from-neon-yellow/10 to-transparent border border-neon-yellow/10 p-3 text-center">
                  <div className="text-xs text-gray-500 font-medium mb-0.5">Prize Pool</div>
                  <div className="text-lg font-black text-neon-yellow flex items-center justify-center gap-1">
                    <Crown className="h-4 w-4" />
                    {t.prizePool}
                  </div>
                </div>
                <div className="flex-1 rounded-xl bg-dark-bg/50 border border-dark-border p-3 text-center">
                  <div className="text-xs text-gray-500 font-medium mb-0.5">Entry Fee</div>
                  <div className={`text-lg font-black ${t.entryFee === "FREE" ? "text-neon-green" : "text-white"}`}>
                    {t.entryFee === "FREE" && <Zap className="h-4 w-4 inline mr-1" />}
                    {t.entryFee}
                  </div>
                </div>
              </div>

              {/* Players & Time */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">
                    <span className="text-white font-semibold">{t.players}</span>/{t.maxPlayers}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{t.time}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-dark-bg mb-4 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    Number(t.players) / Number(t.maxPlayers) > 0.8
                      ? "bg-gradient-to-r from-neon-red to-orange-500"
                      : "bg-gradient-to-r from-neon-green to-neon-blue"
                  }`}
                  style={{ width: `${(Number(t.players) / Number(t.maxPlayers)) * 100}%` }}
                ></div>
              </div>

              {/* Tier badge & Join */}
              <div className="flex items-center justify-between">
                <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md ${
                  t.tier === "free" ? "bg-neon-green/10 text-neon-green"
                  : t.tier === "premium" ? "bg-neon-purple/10 text-neon-purple"
                  : "bg-neon-blue/10 text-neon-blue"
                }`}>
                  <Star className="h-3 w-3" />
                  {t.tier.toUpperCase()}
                </div>
                <button className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-neon-green to-emerald-500 px-5 py-2 text-sm font-bold text-dark-bg transition hover:opacity-90">
                  Join Now
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 rounded-xl border border-dark-border px-8 py-3 text-sm font-semibold text-gray-400 transition hover:border-neon-green/30 hover:text-neon-green">
            View All Tournaments
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
