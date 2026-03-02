import { Package, FlaskConical, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../shared/SectionHeading'
import ScrollReveal from '../shared/ScrollReveal'

const products = [
  {
    name: 'AI Native Pipe Management',
    tagline: 'See every pipe. Track every stage. Ship with confidence.',
    description: 'Work order-centric inventory management that matches how your facility actually operates. From receiving to shipping, every pipe has a digital identity.',
    features: [
      'Work order-based tracking with derived status',
      'Barcode generation for Zebra thermal printers',
      'Digital product passports with full audit trail',
      'Automated shipping manifests and tally exports',
    ],
    icon: Package,
    accent: 'orange',
    accentBg: 'bg-slate-50 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.06] group-hover:border-accent group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20',
    accentText: 'text-accent',
    accentBorder: 'border-accent',
    iconDefault: 'text-slate-600 dark:text-slate-400 group-hover:text-accent',
    shadowHover: 'hover:shadow-xl hover:shadow-orange-500/5',
    link: '/tracker',
    cta: 'See Capabilities',
  },
  {
    name: 'MTR.AI',
    tagline: 'Upload an MTR. Get compliance in seconds.',
    description: 'AI reads your Mill Test Reports, extracts chemical and mechanical properties, and checks them against API 5L and custom specs — automatically.',
    features: [
      'AI-powered PDF classification and data extraction',
      'Automated compliance checks against industry standards',
      'Per-heat verification with pass/warning/fail results',
      'Attach compliance records to digital product passports',
    ],
    icon: FlaskConical,
    accent: 'indigo',
    accentBg: 'bg-slate-50 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.06] group-hover:border-secondary group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20',
    accentText: 'text-secondary',
    accentBorder: 'border-secondary',
    iconDefault: 'text-slate-600 dark:text-slate-400 group-hover:text-secondary',
    shadowHover: 'hover:shadow-xl hover:shadow-indigo-500/5',
    link: '/mtr',
    cta: 'See Capabilities',
  },
]

export default function PlatformOverview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="The Platform"
          title="One platform. Complete pipe intelligence."
          description="OCTG.AI combines inventory tracking, document processing, and compliance verification into a single AI-native platform. Choose what you need — or use everything together."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.15}>
              <Link
                to={product.link}
                className={`group block bg-surface border border-border/60 dark:border-white/[0.08] rounded-2xl p-8 ${product.shadowHover} dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 h-full border-t-4 ${product.accentBorder}`}
              >
                <div className={`w-14 h-14 rounded-full ${product.accentBg} flex items-center justify-center mb-5 transition-all duration-300`}>
                  <product.icon className={`w-7 h-7 ${product.iconDefault} transition-colors duration-300`} />
                </div>

                <h3 className="font-display text-2xl font-bold text-text mb-2">{product.name}</h3>
                <p className={`text-sm font-medium ${product.accentText} mb-3`}>{product.tagline}</p>
                <p className="text-text-muted text-sm leading-relaxed mb-5">{product.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${product.accent === 'orange' ? 'bg-accent' : 'bg-secondary'} shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${product.accentText} group-hover:gap-2.5 transition-all`}>
                  {product.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
