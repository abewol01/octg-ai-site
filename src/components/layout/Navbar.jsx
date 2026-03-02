import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Package, FlaskConical, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import Button from '../shared/Button'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 font-display text-xl font-bold">
          <span className="text-text">OCTG</span>
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
            <button className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-text transition-colors cursor-pointer">
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 w-72 pt-2">
              <div className="bg-surface border border-border rounded-xl shadow-xl dark:shadow-black/30 p-2">
                <Link
                  to="/tracker"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-alt transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                    <Package className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-text">AI Powered Pipe Management</div>
                    <div className="text-xs text-text-muted mt-0.5">Pipe lifecycle management</div>
                  </div>
                </Link>
                <Link
                  to="/mtr"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-alt transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                    <FlaskConical className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-text">MTR.AI</div>
                    <div className="text-xs text-text-muted mt-0.5">AI compliance engine</div>
                  </div>
                </Link>
              </div>
              </div>
            )}
          </div>

          <Link
            to="/customers"
            className={`text-sm font-medium transition-colors ${isActive('/customers') ? 'text-text' : 'text-text-muted hover:text-text'}`}
          >
            Customers
          </Link>

          <Link
            to="/pricing"
            className={`text-sm font-medium transition-colors ${isActive('/pricing') ? 'text-text' : 'text-text-muted hover:text-text'}`}
          >
            Pricing
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-text-muted hover:text-text hover:bg-surface-alt transition-colors cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <Button href="https://app.octg.ai/signup" size="sm">
            Start Free Trial
          </Button>
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-text-muted hover:text-text cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            className="p-2 text-text cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-border">
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
                  <div className="font-medium text-sm">AI Powered Pipe Management</div>
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
              to="/customers"
              className="block p-3 rounded-lg font-medium text-sm hover:bg-surface-alt"
              onClick={() => setMobileOpen(false)}
            >
              Customers
            </Link>
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
