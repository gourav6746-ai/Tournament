import { useState } from "react";
import { Menu, X, Gamepad2, Trophy, Users, Bell } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-dark-border bg-dark-bg/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-neon-green to-neon-blue">
              <Gamepad2 className="h-6 w-6 text-dark-bg" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              BATTLE<span className="text-neon-green">ZONE</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#tournaments" className="text-sm font-medium text-neon-green transition hover:text-neon-green/80">Tournaments</a>
            <a href="#games" className="text-sm font-medium text-gray-400 transition hover:text-white">Games</a>
            <a href="#leaderboard" className="text-sm font-medium text-gray-400 transition hover:text-white">Leaderboard</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-400 transition hover:text-white">How It Works</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="relative p-2 text-gray-400 hover:text-white transition">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-neon-red"></span>
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-dark-border px-4 py-2 text-sm font-medium text-white transition hover:border-neon-green/50 hover:text-neon-green">
              <Users className="h-4 w-4" />
              Login
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-neon-green to-emerald-500 px-4 py-2 text-sm font-bold text-dark-bg transition hover:opacity-90">
              <Trophy className="h-4 w-4" />
              Join Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-gray-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-dark-border bg-dark-bg/95 backdrop-blur-xl">
          <div className="space-y-1 px-4 py-4">
            <a href="#tournaments" className="block rounded-lg px-3 py-2 text-sm font-medium text-neon-green">Tournaments</a>
            <a href="#games" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:text-white">Games</a>
            <a href="#leaderboard" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:text-white">Leaderboard</a>
            <a href="#how-it-works" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:text-white">How It Works</a>
            <div className="flex gap-2 pt-3">
              <button className="flex-1 rounded-lg border border-dark-border px-4 py-2 text-sm font-medium text-white">Login</button>
              <button className="flex-1 rounded-lg bg-gradient-to-r from-neon-green to-emerald-500 px-4 py-2 text-sm font-bold text-dark-bg">Join Now</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
