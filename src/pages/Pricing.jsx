import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'
import SectionHeading from '../components/shared/SectionHeading'
import Button from '../components/shared/Button'
import ScrollReveal from '../components/shared/ScrollReveal'
import PricingToggle from '../components/pricing/PricingToggle'
import TierCards from '../components/pricing/TierCards'
import FeatureMatrix from '../components/pricing/FeatureMatrix'
import PricingFaq from '../components/pricing/PricingFaq'

export default function Pricing() {
  const [product, setProduct] = useState('platform')
  const [billing, setBilling] = useState('annual')

  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-20 pb-8 bg-blueprint">
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <SectionHeading
            title="Simple, transparent pricing"
            description="Choose the plan that fits your operation. Start with a 14-day free trial."
          />
          <PricingToggle
            product={product}
            setProduct={setProduct}
            billing={billing}
            setBilling={setBilling}
          />
        </div>
      </section>

      {/* Tier Cards */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <TierCards product={product} billing={billing} />
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <FeatureMatrix />
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <PricingFaq />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Start your 14-day free trial
            </h2>
            <p className="text-slate-300 mb-8">
              No credit card required. Upgrade anytime.
            </p>
            <Button href="https://app.octg.ai/signup" size="xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  )
}
