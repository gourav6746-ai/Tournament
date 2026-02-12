import { Crown, TrendingUp, Medal } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "🔥 DESI_DESTROYER", clan: "Team Phoenix", kills: 2847, wins: 342, earnings: "₹1,25,000", avatar: "👑", change: "+2" },
  { rank: 2, name: "⚡ HEADSHOT_KING", clan: "Royal Esports", kills: 2654, wins: 298, earnings: "₹98,500", avatar: "🎯", change: "+1" },
  { rank: 3, name: "🎮 SNIPER_QUEEN", clan: "Warrior Girls", kills: 2501, wins: 287, earnings: "₹87,200", avatar: "👸", change: "-1" },
  { rank: 4, name: "💀 SHADOW_HUNTER", clan: "Dark Legion", kills: 2389, wins: 265, earnings: "₹72,000", avatar: "🥷", change: "+3" },
  { rank: 5, name: "🏆 PRO_GAMER_69", clan: "Elite Squad", kills: 2201, wins: 241, earnings: "₹65,800", avatar: "🦅", change: "0" },
  { rank: 6, name: "⭐ CLUTCH_GOD", clan: "Team Starter", kills: 2150, wins: 230, earnings: "₹58,400", avatar: "💪", change: "+5" },
  { rank: 7, name: "🔥 RUSH_MASTER", clan: "Speed Force", kills: 2089, wins: 215, earnings: "₹52,100", avatar: "🏃", change: "-2" },
  { rank: 8, name: "💎 DIAMOND_PLAYER", clan: "Gem Squad", kills: 1987, wins: 198, earnings: "₹45,300", avatar: "💎", change: "+1" },
];

export function Leaderboard() {
  return (
    <section id="leaderboard" className="relative py-20 bg-dark-bg">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-yellow/20 bg-neon-yellow/5 px-4 py-1.5 mb-4">
            <Crown className="h-4 w-4 text-neon-yellow" />
            <span className="text-xs font-semibold text-neon-yellow uppercase tracking-wider">Top Players</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            🏅 Global <span className="text-neon-yellow">Leaderboard</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Top performers of this season. Kya tum inhe beat kar sakte ho?
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="flex items-end justify-center gap-4 mb-12 max-w-2xl mx-auto">
          {/* 2nd Place */}
          <div className="flex-1 text-center">
            <div className="text-4xl mb-2 animate-float" style={{ animationDelay: "0.5s" }}>🥈</div>
            <div className="rounded-t-2xl bg-gradient-to-t from-gray-500/10 to-gray-400/5 border border-gray-500/20 p-4 h-32 flex flex-col justify-end">
              <div className="text-xl mb-1">🎯</div>
              <div className="text-sm font-bold text-white truncate">HEADSHOT_KING</div>
              <div className="text-xs text-gray-400">₹98,500</div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex-1 text-center">
            <div className="text-5xl mb-2 animate-float">👑</div>
            <div className="rounded-t-2xl bg-gradient-to-t from-neon-yellow/10 to-neon-yellow/5 border border-neon-yellow/20 p-4 h-44 flex flex-col justify-end animate-pulse-glow">
              <div className="text-2xl mb-1">🔥</div>
              <div className="text-base font-bold text-neon-yellow truncate">DESI_DESTROYER</div>
              <div className="text-sm text-gray-400">₹1,25,000</div>
              <div className="text-xs text-neon-green mt-1">Season MVP</div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex-1 text-center">
            <div className="text-4xl mb-2 animate-float" style={{ animationDelay: "1s" }}>🥉</div>
            <div className="rounded-t-2xl bg-gradient-to-t from-amber-700/10 to-amber-600/5 border border-amber-600/20 p-4 h-24 flex flex-col justify-end">
              <div className="text-xl mb-1">👸</div>
              <div className="text-sm font-bold text-white truncate">SNIPER_QUEEN</div>
              <div className="text-xs text-gray-400">₹87,200</div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="rounded-2xl border border-dark-border bg-dark-card overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 px-4 sm:px-6 py-3 bg-dark-bg/50 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-dark-border">
            <div className="col-span-1 text-center">#</div>
            <div className="col-span-4 sm:col-span-3">Player</div>
            <div className="col-span-2 hidden sm:block text-center">Kills</div>
            <div className="col-span-2 hidden sm:block text-center">Wins</div>
            <div className="col-span-4 sm:col-span-2 text-center">Earnings</div>
            <div className="col-span-3 sm:col-span-2 text-center">Trend</div>
          </div>

          {/* Table Rows */}
          {leaderboardData.map((player) => (
            <div
              key={player.rank}
              className={`grid grid-cols-12 gap-2 px-4 sm:px-6 py-4 items-center border-b border-dark-border/50 transition hover:bg-dark-card-hover ${
                player.rank <= 3 ? "bg-neon-yellow/[0.02]" : ""
              }`}
            >
              {/* Rank */}
              <div className="col-span-1 text-center">
                {player.rank <= 3 ? (
                  <Medal className={`h-5 w-5 mx-auto ${
                    player.rank === 1 ? "text-neon-yellow" : player.rank === 2 ? "text-gray-400" : "text-amber-600"
                  }`} />
                ) : (
                  <span className="text-sm font-bold text-gray-500">{player.rank}</span>
                )}
              </div>

              {/* Player */}
              <div className="col-span-4 sm:col-span-3 flex items-center gap-2">
                <span className="text-lg">{player.avatar}</span>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-white truncate">{player.name}</div>
                  <div className="text-xs text-gray-500 truncate">{player.clan}</div>
                </div>
              </div>

              {/* Kills */}
              <div className="col-span-2 hidden sm:block text-center text-sm font-semibold text-gray-300">
                {player.kills.toLocaleString()}
              </div>

              {/* Wins */}
              <div className="col-span-2 hidden sm:block text-center text-sm font-semibold text-gray-300">
                {player.wins}
              </div>

              {/* Earnings */}
              <div className="col-span-4 sm:col-span-2 text-center text-sm font-bold text-neon-green">
                {player.earnings}
              </div>

              {/* Trend */}
              <div className="col-span-3 sm:col-span-2 flex items-center justify-center gap-1">
                <TrendingUp className={`h-4 w-4 ${
                  player.change.startsWith("+") ? "text-neon-green" : player.change === "0" ? "text-gray-500" : "text-neon-red"
                }`} />
                <span className={`text-xs font-bold ${
                  player.change.startsWith("+") ? "text-neon-green" : player.change === "0" ? "text-gray-500" : "text-neon-red"
                }`}>
                  {player.change === "0" ? "—" : player.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
