import { ArrowRight, Package, Sparkles, ShieldCheck, Smartphone, Clock, Settings, Rocket, TrendingUp, Check } from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'
import SectionHeading from '../components/shared/SectionHeading'
import Button from '../components/shared/Button'
import ScrollReveal from '../components/shared/ScrollReveal'
import PricingFaq from '../components/pricing/PricingFaq'

const technologies = [
  {
    icon: Package,
    title: 'Inventory Intelligence Engine',
    description: 'Work order-centric tracking that derives status automatically from pipe states. Track by OD, wall, grade, weight, and connection type. Configurable pipeline stages, custom status workflows, and real-time visibility across your entire yard.',
  },
  {
    icon: Sparkles,
    title: 'AI Document Processing',
    description: 'Claude-powered document analysis classifies MTRs, tallies, and cover sheets. Extracts chemical composition, mechanical properties, and pipe identification data from any scanned PDF format your suppliers send.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Engine',
    description: 'Pre-loaded with API 5L & 5CT standards (line pipe and casing). Extended with your project-specific specs, custom parameter ranges, and warning thresholds. Per-heat verification with full audit trail.',
  },
  {
    icon: Smartphone,
    title: 'Field Integration Layer',
    description: 'VLX-powered mobile inspections at every stage. Barcode generation for Zebra printers. Bidirectional sync between field operators and your inventory system. Works offline.',
  },
]

const timeline = [
  {
    icon: Clock,
    step: '01',
    title: 'Discovery',
    description: 'We map your current workflow — receiving, processing, QC, shipping — and identify where time and accuracy are lost. We review your documentation formats, compliance requirements, and integration needs.',
    duration: '1-2 weeks',
  },
  {
    icon: Settings,
    step: '02',
    title: 'Configuration',
    description: 'We configure the platform to match your operation: custom status workflows, VLX inspection templates tailored to your QC process, spec libraries for your material standards, and barcode formats for your printer setup.',
    duration: '2-4 weeks',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Deployment & Training',
    description: "We deploy to your environment, migrate existing data, and train your operators on-site. Your team is hands-on from day one — not watching tutorials.",
    duration: '1-2 weeks',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Optimization',
    description: 'We monitor adoption, tune workflows based on real usage, and add capabilities as your operation evolves. Dedicated support. Continuous improvement.',
    duration: 'Ongoing',
  },
]

const platformIncludes = [
  'Custom-configured deployment',
  'Unlimited work orders and pipe tracking',
  'AI document processing (MTR classification + extraction)',
  'Compliance engine with standard + custom specs',
  'Barcode generation and printing',
  'Digital pipe passports',
  'Manifest and tally export (PDF + Excel)',
  'Activity logging and audit trail',
  'Role-based access control',
]

const supportIncludes = [
  'Dedicated implementation engineer',
  'Workflow mapping and configuration',
  'VLX template setup and field testing',
  'On-site or remote operator training',
  'Data migration from existing systems',
  'Priority support with direct access',
  'Quarterly business reviews',
  'Continuous platform updates',
]

export default function Pricing() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-20 pb-16 bg-blueprint">
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <SectionHeading
            label="Deployment"
            title="Configured for your operation. Not the other way around."
            description="Every OCTG.AI deployment is engineered around your facility's workflow, team size, inspection requirements, and compliance standards. We don't sell tiers — we build solutions."
          />
        </div>
      </section>

      {/* Core Platform Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text text-center mb-4">
              Core Platform Technologies
            </h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-12">
              The building blocks that get assembled into each client's deployment.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, i) => (
              <ScrollReveal key={tech.title} delay={i * 0.1}>
                <div className="bg-surface border border-border rounded-2xl p-6 h-full hover:border-accent/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <tech.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-text mb-2">{tech.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{tech.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text text-center mb-4">
              How It Works
            </h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-12">
              From discovery to deployment in weeks, not months.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="relative flex flex-col h-full">
                  <div className="text-5xl font-display font-extrabold text-accent/25 mb-2">{step.step}</div>
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <step.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-3 flex-1">{step.description}</p>
                  <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full self-start">
                    {step.duration}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text text-center mb-12">
              What's Included
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <ScrollReveal>
              <div>
                <h3 className="font-display text-lg font-bold text-text mb-6">Platform</h3>
                <ul className="space-y-3">
                  {platformIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="font-display text-lg font-bold text-text mb-6">Implementation & Support</h3>
                <ul className="space-y-3">
                  {supportIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scales With Your Operation */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text mb-4">
              Scales With Your Operation
            </h2>
            <p className="text-text-muted leading-relaxed">
              Start with one facility. Expand to multiple sites. Add pipe yards, E&P operations, or inspection teams. The same core platform adapts to each deployment while maintaining centralized visibility.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <PricingFaq />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-surface-alt dark:bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text dark:text-white mb-4">
              Let's map your operation.
            </h2>
            <p className="text-text-muted mb-8">
              Every deployment starts with understanding how your facility works. Schedule a 30-minute discovery call with our implementation team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="mailto:hello@octg.ai?subject=Discovery%20Call" size="xl">
                Schedule a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a href="mailto:hello@octg.ai" className="text-text-muted hover:text-text dark:hover:text-white transition-colors text-sm font-medium">
                hello@octg.ai
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  )
}
