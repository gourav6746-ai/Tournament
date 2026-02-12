import { Gamepad2, ChevronRight, Shield, Clock, Wallet } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-20 bg-dark-bg overflow-hidden">
      {/* BG Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 h-80 w-80 rounded-full bg-neon-green/10 blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/4 h-80 w-80 rounded-full bg-neon-blue/10 blur-[120px]"></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA Card */}
        <div className="rounded-3xl border border-neon-green/20 bg-gradient-to-b from-dark-card to-dark-bg p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute inset-0 animate-shimmer"></div>

          <div className="relative z-10">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-green to-neon-blue mx-auto mb-6 animate-float">
              <Gamepad2 className="h-8 w-8 text-dark-bg" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Ready to <span className="text-neon-green">Dominate?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto">
              Abhi join karo BattleZone aur ban jao next gaming champion! 
              <span className="text-neon-yellow font-semibold"> First tournament FREE hai! 🎉</span>
            </p>

            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield className="h-4 w-4 text-neon-green" />
                Secure Payments
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="h-4 w-4 text-neon-blue" />
                Instant Withdrawals
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Wallet className="h-4 w-4 text-neon-yellow" />
                UPI / Paytm Support
              </div>
            </div>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-green via-emerald-500 to-neon-blue px-10 py-4 text-lg font-bold text-dark-bg transition-all hover:scale-105 animate-pulse-glow">
              🚀 Start Playing Now
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-xs text-gray-600 mt-4">No credit card required. 100% free to join.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
