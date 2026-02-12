import { Gamepad2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-bg py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-neon-green to-neon-blue">
                <Gamepad2 className="h-6 w-6 text-dark-bg" />
              </div>
              <span className="text-xl font-extrabold text-white">
                BATTLE<span className="text-neon-green">ZONE</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              India ka #1 gaming tournament platform. Free Fire, PUBG aur bahut saare games ke tournaments daily!
            </p>
            <div className="flex gap-3">
              {["📱 Instagram", "🐦 Twitter", "📺 YouTube"].map((social) => (
                <button key={social} className="rounded-lg border border-dark-border px-3 py-1.5 text-xs text-gray-400 hover:border-neon-green/30 hover:text-neon-green transition">
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Tournaments", "Leaderboard", "Prize Pool", "How It Works", "FAQs"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-neon-green transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Games */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Games</h4>
            <ul className="space-y-2">
              {["🔥 Free Fire MAX", "🎯 PUBG Mobile", "🎮 BGMI", "💀 COD Mobile", "⚔️ Valorant"].map((game) => (
                <li key={game}>
                  <a href="#" className="text-sm text-gray-500 hover:text-neon-green transition">{game}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              {["Contact Us", "Privacy Policy", "Terms & Conditions", "Refund Policy", "Report Bug"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-neon-green transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2025 BattleZone. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-gray-600">
            Made with <Heart className="h-3 w-3 text-neon-red fill-neon-red" /> in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
