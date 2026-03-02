import { ArrowRight } from 'lucide-react'
import Button from '../shared/Button'
import ScrollReveal from '../shared/ScrollReveal'
import vlxLogo from '../../assets/vlx-logo.png'

export default function CtaSection() {
  return (
    <section className="py-24 bg-surface-alt dark:bg-primary section-divider">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text dark:text-white mb-4">
            Ready to modernize your pipe operations?
          </h2>
          <p className="text-text-muted text-lg mb-2">
            Every deployment starts with a conversation. Tell us about your operation and we'll show you what's possible.
          </p>
          <p className="text-text-muted text-sm mb-8">
            Custom-configured for your facility. Deployed in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="mailto:hello@octg.ai?subject=Demo%20Request" size="xl">
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <a
              href="mailto:hello@octg.ai"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-text dark:text-white border border-border dark:border-slate-600 rounded-xl hover:bg-surface dark:hover:bg-slate-800 transition-colors"
            >
              hello@octg.ai
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-12 opacity-40">
            <span className="text-text-muted text-xs">Powered by</span>
            <img src={vlxLogo} alt="VLX" className="h-4 brightness-0 dark:invert" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
