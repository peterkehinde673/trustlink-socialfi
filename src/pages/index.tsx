import React from 'react';
import { Github, Twitter, Mail, ArrowRight, CheckCircle, TrendingUp, Users, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            TrustLink
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#leaderboard" className="hover:text-blue-400 transition">Leaderboard</a>
            <a href="#profiles" className="hover:text-blue-400 transition">Profiles</a>
            <a href="#footer" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <a
            href="https://github.com/peterkehinde673/trustlink-socialfi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition font-semibold"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-blue-950 border border-blue-800 rounded-full text-sm font-semibold text-blue-400">
                  🚀 Decentralized Reputation Platform
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Build On-Chain{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Trust
                  </span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed">
                  TrustLink is a Web3-native reputation system where users create verifiable profiles,
                  earn endorsements, and build lasting trust within decentralized communities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                  Get Started <ArrowRight size={20} />
                </button>
                <button className="border border-slate-700 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition">
                  Read Docs
                </button>
              </div>

              <div className="flex gap-8 text-sm text-slate-400">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">100%</span>
                  <span>On-Chain</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">Built on</span>
                  <span>Canopy</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">Open</span>
                  <span>Source</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Alex Morgan</p>
                    <p className="text-sm text-slate-400">@alexmorgan</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-400" />
                    <span className="text-slate-300">Endorsed in Smart Contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-400" />
                    <span className="text-slate-300">Endorsed in Web Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-400" />
                    <span className="text-slate-300">Endorsed in Community</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <p className="text-sm text-slate-400 mb-2">Reputation Score</p>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-blue-400">8,542</span>
                    <span className="text-green-400 text-sm">↑ 12%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-400">Everything you need to build and verify trust</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition">
              <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">User Profiles</h3>
              <p className="text-slate-400">Create your Web3 identity with verifiable credentials and achievement showcases.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition">
              <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">On-Chain Endorsements</h3>
              <p className="text-slate-400">Give and receive cryptographically signed endorsements recorded on the blockchain.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition">
              <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Reputation Scores</h3>
              <p className="text-slate-400">Earn points through quality endorsements with multi-dimensional scoring.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition">
              <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center mb-4">
                <svg className="text-blue-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Leaderboards</h3>
              <p className="text-slate-400">Discover top-ranked community members and benchmark your reputation.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition">
              <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center mb-4">
                <svg className="text-blue-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Wallet Integration</h3>
              <p className="text-slate-400">Seamless Web3 wallet connectivity with secure transaction signing.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition">
              <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center mb-4">
                <svg className="text-blue-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Immutable Records</h3>
              <p className="text-slate-400">All endorsements and reputation metrics are permanently recorded on-chain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section id="leaderboard" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Reputation Leaderboard</h2>
            <p className="text-xl text-slate-400">Top trusted members in the community</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="px-6 py-4 text-left font-semibold text-slate-400">Rank</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-400">Member</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-400">Category</th>
                    <th className="px-6 py-4 text-right font-semibold text-slate-400">Score</th>
                    <th className="px-6 py-4 text-right font-semibold text-slate-400">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {[
                    { rank: 1, name: 'Alex Morgan', category: 'Smart Contracts', score: 8542, change: '+12%', avatar: '🔵' },
                    { rank: 2, name: 'Jordan Chen', category: 'Web Development', score: 7821, change: '+8%', avatar: '🟡' },
                    { rank: 3, name: 'Sam Wilson', category: 'Community', score: 7456, change: '+5%', avatar: '🟢' },
                    { rank: 4, name: 'Casey Lopez', category: 'Security', score: 6892, change: '+3%', avatar: '🔴' },
                    { rank: 5, name: 'Morgan Davis', category: 'Design', score: 6234, change: '+1%', avatar: '🟣' },
                  ].map((member) => (
                    <tr key={member.rank} className="hover:bg-slate-700/50 transition">
                      <td className="px-6 py-4">
                        <span className="font-bold text-lg text-blue-400">#{member.rank}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{member.avatar}</div>
                          <span className="font-semibold">{member.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-400">{member.category}</td>
                      <td className="px-6 py-4 text-right font-bold text-white">{member.score.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-green-400 font-semibold">{member.change}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* User Profile Preview */}
      <section id="profiles" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">User Profiles</h2>
            <p className="text-xl text-slate-400">Showcase your skills and build your reputation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Card 1 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-lg">Jordan Chen</h3>
                  <p className="text-slate-400 text-sm">@jordanchen</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4 text-sm">Smart Contract Developer & Security Auditor</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Web Development</span>
                  <span className="bg-green-950 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">95%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Security</span>
                  <span className="bg-green-950 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">87%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Community</span>
                  <span className="bg-green-950 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">91%</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold transition text-sm">
                Endorse
              </button>
            </div>

            {/* Profile Card 2 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-lg">Alex Morgan</h3>
                  <p className="text-slate-400 text-sm">@alexmorgan</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4 text-sm">Full Stack Developer & Open Source Contributor</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Smart Contracts</span>
                  <span className="bg-green-950 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">92%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">DevOps</span>
                  <span className="bg-green-950 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">88%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Mentorship</span>
                  <span className="bg-green-950 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">89%</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold transition text-sm">
                Endorse
              </button>
            </div>

            {/* Profile Card 3 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-lg">Casey Lopez</h3>
                  <p className="text-slate-400 text-sm">@caseylopez</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4 text-sm">UI/UX Designer & Product Manager</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Design</span>
                  <span className="bg-green-950 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">96%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Product Strategy</span>
                  <span className="bg-green-950 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">90%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Leadership</span>
                  <span className="bg-green-950 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">85%</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold transition text-sm">
                Endorse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-slate-950 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                TrustLink
              </h3>
              <p className="text-slate-400">Building decentralized trust, one endorsement at a time.</p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-blue-400 transition">Features</a></li>
                <li><a href="#leaderboard" className="hover:text-blue-400 transition">Leaderboard</a></li>
                <li><a href="#profiles" className="hover:text-blue-400 transition">Profiles</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li>
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h4 className="font-bold mb-4">Developers</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="https://github.com/peterkehinde673/trustlink-socialfi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">API Reference</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Smart Contracts</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition">
                  <Twitter size={24} />
                </a>
                <a href="https://github.com/peterkehinde673/trustlink-socialfi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition">
                  <Github size={24} />
                </a>
                <a href="mailto:hello@trustlink.io" className="text-slate-400 hover:text-blue-400 transition">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>&copy; 2026 TrustLink. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition">Code of Conduct</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
