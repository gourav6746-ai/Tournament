import { UserPlus, Gamepad2, Swords, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Account Banao",
    description: "Free mein register karo. Sirf 30 seconds lagte hain!",
    color: "text-neon-green",
    bgColor: "bg-neon-green/10",
    borderColor: "border-neon-green/20",
    step: "01",
  },
  {
    icon: Gamepad2,
    title: "Game Select Karo",
    description: "Free Fire, PUBG ya koi bhi game choose karo jo tum khelte ho.",
    color: "text-neon-blue",
    bgColor: "bg-neon-blue/10",
    borderColor: "border-neon-blue/20",
    step: "02",
  },
  {
    icon: Swords,
    title: "Tournament Join Karo",
    description: "Free ya paid tournaments join karo aur apni team ke saath compete karo.",
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
    borderColor: "border-neon-purple/20",
    step: "03",
  },
  {
    icon: Trophy,
    title: "Jeeto Aur Kamao",
    description: "Matches jeeto, leaderboard mein climb karo, aur real cash prizes kamao!",
    color: "text-neon-yellow",
    bgColor: "bg-neon-yellow/10",
    borderColor: "border-neon-yellow/20",
    step: "04",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 bg-dark-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-neon-green/3 blur-[150px]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-green/20 bg-neon-green/5 px-4 py-1.5 mb-4">
            <Gamepad2 className="h-4 w-4 text-neon-green" />
            <span className="text-xs font-semibold text-neon-green uppercase tracking-wider">Easy Steps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            📋 Kaise <span className="text-neon-green">Kaam Karta Hai?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Bus 4 simple steps mein shuru karo apna gaming journey!
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-dark-border to-transparent"></div>
              )}

              <div className={`rounded-2xl border ${step.borderColor} bg-dark-card p-6 text-center transition-all hover:bg-dark-card-hover hover:shadow-xl group-hover:scale-105`}>
                {/* Step Number */}
                <div className="text-5xl font-black text-dark-border/50 mb-4">{step.step}</div>

                {/* Icon */}
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${step.bgColor} mb-4`}>
                  <step.icon className={`h-7 w-7 ${step.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
