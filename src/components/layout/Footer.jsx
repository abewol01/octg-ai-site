import { Link } from 'react-router-dom'
import vlxLogo from '../../assets/vlx-logo.png'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-xl font-bold">
              <span className="text-white">OCTG</span>
              <span className="text-accent">.AI</span>
            </Link>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              AI-native pipe intelligence for oil and gas
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/tracker" className="text-slate-400 text-sm hover:text-white transition-colors">
                  AI Powered Pipe Management
                </Link>
              </li>
              <li>
                <Link to="/mtr" className="text-slate-400 text-sm hover:text-white transition-colors">
                  MTR.AI
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-slate-400 text-sm">About</span>
              </li>
              <li>
                <a href="mailto:hello@octg.ai" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-slate-400 text-sm">Privacy Policy</span>
              </li>
              <li>
                <span className="text-slate-400 text-sm">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; 2026 OCTG.AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <span>Powered by</span>
            <img src={vlxLogo} alt="VLX — Verify Then Trust" className="h-5 brightness-0 invert opacity-70" />
          </div>
        </div>
      </div>
    </footer>
  )
}
