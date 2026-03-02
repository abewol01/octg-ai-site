import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Package, FlaskConical } from 'lucide-react'
import Button from '../shared/Button'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 font-display text-xl font-bold">
          <span className="text-primary">OCTG</span>
          <span className="text-accent">.AI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-primary transition-colors cursor-pointer">
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-border rounded-xl shadow-xl p-2">
                <Link
                  to="/tracker"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-alt transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                    <Package className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-primary">OCTG Tracker</div>
                    <div className="text-xs text-text-muted mt-0.5">Pipe lifecycle management</div>
                  </div>
                </Link>
                <Link
                  to="/mtr"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-alt transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center shrink-0">
                    <FlaskConical className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-primary">MTR.AI</div>
                    <div className="text-xs text-text-muted mt-0.5">AI compliance engine</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/pricing"
            className={`text-sm font-medium transition-colors ${isActive('/pricing') ? 'text-primary' : 'text-text-muted hover:text-primary'}`}
          >
            Pricing
          </Link>

          <Button href="https://app.octg.ai/signup" size="sm">
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-primary cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-4 space-y-4">
            <div className="space-y-1">
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Products</div>
              <Link
                to="/tracker"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-alt"
                onClick={() => setMobileOpen(false)}
              >
                <Package className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-medium text-sm">OCTG Tracker</div>
                  <div className="text-xs text-text-muted">Pipe lifecycle management</div>
                </div>
              </Link>
              <Link
                to="/mtr"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-alt"
                onClick={() => setMobileOpen(false)}
              >
                <FlaskConical className="w-5 h-5 text-secondary" />
                <div>
                  <div className="font-medium text-sm">MTR.AI</div>
                  <div className="text-xs text-text-muted">AI compliance engine</div>
                </div>
              </Link>
            </div>
            <Link
              to="/pricing"
              className="block p-3 rounded-lg font-medium text-sm hover:bg-surface-alt"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Button href="https://app.octg.ai/signup" size="lg" className="w-full">
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
