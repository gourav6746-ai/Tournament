import { Trophy, Users, Flame, ChevronRight } from "lucide-react";

const games = [
  {
    name: "Free Fire MAX",
    icon: "🔥",
    gradient: "from-orange-500 to-red-600",
    bgGlow: "bg-orange-500/10",
    borderColor: "border-orange-500/20 hover:border-orange-500/50",
    activeTournaments: 12,
    onlinePlayers: "15K+",
    description: "Garena Free Fire ka ultimate battle royale experience. Squad, Solo, Clash Squad modes available!",
    modes: ["Battle Royale", "Clash Squad", "Solo", "Duo", "Custom Room"],
    rating: "4.5",
  },
  {
    name: "PUBG Mobile",
    icon: "🎯",
    gradient: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/10",
    borderColor: "border-blue-500/20 hover:border-blue-500/50",
    activeTournaments: 15,
    onlinePlayers: "20K+",
    description: "PUBG Mobile ke intense gun fights aur tactical gameplay. Winner Winner Chicken Dinner!",
    modes: ["Classic", "TDM", "Arena", "Payload", "Metro Royale"],
    rating: "4.7",
  },
  {
    name: "BGMI",
    icon: "🎮",
    gradient: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/10",
    borderColor: "border-purple-500/20 hover:border-purple-500/50",
    activeTournaments: 8,
    onlinePlayers: "12K+",
    description: "Battlegrounds Mobile India - India ka apna battle royale. Compete karo aur jeeto!",
    modes: ["Classic", "TDM", "Domination", "Infection", "Custom"],
    rating: "4.3",
  },
  {
    name: "COD Mobile",
    icon: "💀",
    gradient: "from-green-500 to-emerald-600",
    bgGlow: "bg-green-500/10",
    borderColor: "border-green-500/20 hover:border-green-500/50",
    activeTournaments: 6,
    onlinePlayers: "8K+",
    description: "Call of Duty Mobile ke fast-paced action aur multiple game modes. Ready for duty?",
    modes: ["Multiplayer", "Battle Royale", "Zombies", "Ranked"],
    rating: "4.6",
  },
];

export function GamesSection() {
  return (
    <section id="games" className="relative py-20 bg-dark-bg">
      {/* BG glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px] bg-neon-purple/5 blur-[150px] rounded-full"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-blue/20 bg-neon-blue/5 px-4 py-1.5 mb-4">
            <Flame className="h-4 w-4 text-neon-blue" />
            <span className="text-xs font-semibold text-neon-blue uppercase tracking-wider">Popular Games</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            🎮 Apna <span className="text-neon-blue">Game</span> Choose Karo
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            India ke sabse popular mobile games ke tournaments yahan available hain.
          </p>
        </div>

        {/* Game Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {games.map((game) => (
            <div
              key={game.name}
              className={`group relative rounded-2xl border ${game.borderColor} bg-dark-card p-6 transition-all hover:bg-dark-card-hover hover:shadow-2xl`}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 ${game.bgGlow} blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>

              <div className="relative z-10">
                {/* Game header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${game.gradient} text-3xl shadow-lg`}>
                      {game.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{game.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-neon-yellow">
                        ⭐ {game.rating}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-neon-green text-sm font-semibold">
                      <span className="h-2 w-2 rounded-full bg-neon-green animate-countdown"></span>
                      {game.onlinePlayers} Online
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{game.description}</p>

                {/* Modes */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {game.modes.map((mode) => (
                    <span key={mode} className="rounded-lg bg-dark-bg/60 border border-dark-border px-2.5 py-1 text-xs font-medium text-gray-300">
                      {mode}
                    </span>
                  ))}
                </div>

                {/* Stats & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <Trophy className="h-4 w-4 text-neon-yellow" />
                      <span className="text-white font-semibold">{game.activeTournaments}</span> Active
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <Users className="h-4 w-4 text-neon-blue" />
                      <span className="text-white font-semibold">{game.onlinePlayers}</span>
                    </div>
                  </div>
                  <button className={`flex items-center gap-1 rounded-lg bg-gradient-to-r ${game.gradient} px-4 py-2 text-sm font-bold text-white transition hover:opacity-90`}>
                    Play Now
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
