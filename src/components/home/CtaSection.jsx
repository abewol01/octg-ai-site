import { ArrowRight } from 'lucide-react'
import Button from '../shared/Button'
import ScrollReveal from '../shared/ScrollReveal'
import vlxLogo from '../../assets/vlx-logo.png'

export default function CtaSection() {
  return (
    <section className="py-24 bg-primary section-divider">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to leave spreadsheets behind?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Start your 14-day free trial. No credit card required. See results on day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://app.octg.ai/signup" size="xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              href="mailto:hello@octg.ai?subject=Demo%20Request"
              variant="secondary"
              size="xl"
              className="!border-slate-600 !text-white hover:!bg-slate-800"
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-12 opacity-40">
            <span className="text-slate-400 text-xs">Powered by</span>
            <img src={vlxLogo} alt="VLX" className="h-4 brightness-0 invert" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
