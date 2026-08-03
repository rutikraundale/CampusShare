import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Code, Users, Rocket, Shield, Globe, Zap, Menu, X, 
  Target, Award, Heart, Sparkles, ArrowRight, Github, Twitter, Linkedin
} from "lucide-react";

export default function AboutUs() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    { label: "Active Builders", value: "50+", icon: Users, color: "from-blue-500 to-cyan-400" },
    { label: "Hackathons Hosted", value: "5+", icon: Rocket, color: "from-indigo-500 to-purple-400" },
    { label: "Projects Built", value: "10+", icon: Code, color: "from-amber-500 to-orange-400" }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We exist to remove friction from innovation. Our platform empowers creators to turn abstract concepts into impactful software.",
      accent: "border-blue-500/30 hover:border-blue-500/60 shadow-blue-500/5"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Great code starts with great team dynamics. We foster an inclusive global ecosystem where talent meets opportunity regardless of background.",
      accent: "border-indigo-500/30 hover:border-indigo-500/60 shadow-indigo-500/5"
    },
    {
      icon: Sparkles,
      title: "Continuous Innovation",
      description: "We equip developers with modern, real-time collaboration tools and GitHub integrations to build faster and smarter.",
      accent: "border-purple-500/30 hover:border-purple-500/60 shadow-purple-500/5"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "From fair hackathon judging to secure data handling, we maintain total transparency and reliability for organizers and hackers.",
      accent: "border-emerald-500/30 hover:border-emerald-500/60 shadow-emerald-500/5"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
              H
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white hidden sm:block">HACKMEET</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</Link>
            <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Community</Link>
            <Link to="/about" className="text-sm font-medium text-blue-400 font-semibold transition-colors">About Us</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="text-sm font-semibold text-slate-300 hover:text-white transition px-4 py-2">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 py-6 px-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4">
            <Link to="/#features" className="text-base font-medium text-slate-300 p-2 hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
            <Link to="/login" className="text-base font-medium text-slate-300 p-2 hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Community</Link>
            <Link to="/about" className="text-base font-medium text-blue-400 p-2 hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/login" className="text-base font-medium text-slate-300 p-2 hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
            <Link to="/signup" className="mt-2 text-center text-base font-semibold bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started Free
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden flex flex-col items-center text-center px-4 sm:px-6">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] bg-blue-600/15 rounded-full blur-[110px] -z-10 pointer-events-none" />
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[90px] -z-10 pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 sm:mb-8">
          <Sparkles size={16} className="text-amber-400" />
          About HackMeet
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6 sm:mb-8 max-w-4xl tracking-tight leading-[1.15]">
          Uniting Creators. Accelerating Innovation.
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-2">
          HackMeet was built to bridge the gap between talented developers, designers, and visionaries across the globe. We provide the all-in-one ecosystem for team discovery, real-time networking, and seamless hackathon execution.
        </p>
      </section>

      {/* Impact Stats Grid */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-800 text-center hover:border-slate-700 transition-all duration-300">
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${stat.color} p-0.5 mb-4`}>
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                      <Icon size={22} />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story / Mission Section */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Born out of a passion for hackathon collaboration
              </h2>
              <p className="text-slate-400 leading-relaxed text-base sm:text-lg mb-6">
                Finding the right hackathon teammates used to mean posting across fragmented forums, Discord channels, and social media with little context about skills or stack preferences.
              </p>
              <p className="text-slate-400 leading-relaxed text-base sm:text-lg mb-8">
                HackMeet changes that. We built an intelligent platform that simplifies team formation, tracks real-time GitHub activity, and gives hackathon organizers an end-to-end command center to deliver world-class competitions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20"
                >
                  Join the Community <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-1">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Instant Matchmaking</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Match with developers based on technical stack, timezone, and project interests.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 mt-1">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Global Hackathon Hub</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Discover top international hackathons and manage your applications in one dashboard.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Verified Showcase</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Highlight your past wins, team achievements, and live GitHub commit feeds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 sm:py-28 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Values that Drive Us</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
              Our principles shape how we build HackMeet and serve our global community of innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div 
                  key={idx} 
                  className={`bg-slate-950 p-8 rounded-3xl border transition-all duration-300 ${v.accent} hover:-translate-y-1`}
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-slate-800">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2 pr-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-blue-500/20">
                  H
                </div>
                <span className="font-extrabold text-xl tracking-tight text-white">HACKMEET</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                Empowering the next generation of builders. We provide the infrastructure for innovation, bringing talent and opportunity together in one seamless platform.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/#features" className="hover:text-blue-400 transition-colors">Features</Link></li>
                <li><Link to="/login" className="hover:text-blue-400 transition-colors">Community</Link></li>
                <li><Link to="/login" className="hover:text-blue-400 transition-colors">Integrations</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/login" className="hover:text-blue-400 transition-colors">Documentation</Link></li>
                <li><Link to="/login" className="hover:text-blue-400 transition-colors">Community Blog</Link></li>
                <li><Link to="/login" className="hover:text-blue-400 transition-colors">Hackathon Guide</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/login" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                <li><Link to="/login" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} HackMeet Inc. All rights reserved. Built for builders.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
