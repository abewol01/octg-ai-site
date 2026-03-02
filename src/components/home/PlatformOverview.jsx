import { Package, FlaskConical, ShieldCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../shared/SectionHeading'
import ScrollReveal from '../shared/ScrollReveal'
import vlxIcon from '../../assets/vlx-icon.png'

const products = [
  {
    name: 'AI Native Pipe Management',
    tagline: 'See every pipe. Track every stage. Ship with confidence.',
    description: 'Work order-centric inventory management that matches how your facility actually operates. From receiving to load out, every joint has a digital identity.',
    features: [
      'Work order-based tracking with derived status',
      'Barcode generation for Zebra thermal printers',
      'Digital pipe passports with full audit trail',
      'Automated shipping manifests and tally exports',
    ],
    icon: Package,
    borderColor: '#10b981',
    accentBg: 'bg-slate-50 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.06] group-hover:border-emerald-500 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20',
    hoverText: 'group-hover:text-emerald-500',
    iconDefault: 'text-slate-600 dark:text-slate-400 group-hover:text-emerald-500',
    shadowHover: 'hover:shadow-xl hover:shadow-emerald-500/5',
    link: '/tracker',
    cta: 'See Pipe Tracking',
  },
  {
    name: 'MTR.AI',
    tagline: 'Upload a Mill Test Report. Get compliance in seconds.',
    description: 'AI reads your Mill Test Reports, extracts chemical and mechanical properties, and verifies them against API 5L & 5CT specifications — automatically.',
    features: [
      'AI-powered PDF classification and extraction',
      'Compliance checks against industry standards',
      'Per-heat verification with pass/fail results',
      'Compliance records linked to pipe passports',
    ],
    icon: FlaskConical,
    borderColor: '#6366f1',
    accentBg: 'bg-slate-50 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.06] group-hover:border-secondary group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20',
    hoverText: 'group-hover:text-secondary',
    iconDefault: 'text-slate-600 dark:text-slate-400 group-hover:text-secondary',
    shadowHover: 'hover:shadow-xl hover:shadow-indigo-500/5',
    link: '/mtr',
    cta: 'See MTR Compliance',
  },
  {
    name: 'VLX Field Intelligence',
    tagline: 'Credible, tamper-proof field evidence for every pipe.',
    description: 'The verified data capture layer underneath every OCTG.AI product. Every inspection, scan, and reading is captured with evidence your clients can trust.',
    features: [
      'Mobile inspections with offline data capture',
      'Geotagged and timestamped photo evidence',
      'KYPiT metadata verification on every data point',
      'Real-time sync via webhooks and REST API',
    ],
    icon: null,
    useVlxIcon: true,
    borderColor: '#ff5722',
    accentBg: 'bg-slate-50 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.06] group-hover:border-orange-600 group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20',
    hoverText: 'group-hover:text-[#ff5722]',
    iconDefault: '',
    shadowHover: 'hover:shadow-xl hover:shadow-orange-500/5',
    link: '/field-intelligence',
    cta: 'See Field Evidence',
  },
]

export default function PlatformOverview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="The Platform"
          title="One platform. Complete pipe intelligence."
          description="OCTG.AI combines pipe inventory management, MTR processing, and API spec compliance into one platform — configured for your operation. Start with what solves your biggest problem."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.12}>
              <Link
                to={product.link}
                className={`group flex flex-col bg-surface border border-border/60 dark:border-white/[0.08] rounded-2xl p-8 ${product.shadowHover} dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 h-full`}
                style={{ borderTopWidth: '4px', borderTopColor: product.borderColor }}
              >
                <div className={`w-14 h-14 rounded-full ${product.accentBg} flex items-center justify-center mb-5 transition-all duration-300`}>
                  {product.useVlxIcon ? (
                    <img src={vlxIcon} alt="VLX" className="w-7 h-7 object-contain" />
                  ) : (
                    <product.icon className={`w-7 h-7 ${product.iconDefault} transition-colors duration-300`} />
                  )}
                </div>

                <h3 className="font-display text-2xl font-bold text-text mb-2">{product.name}</h3>
                <p className="text-sm font-medium text-text mb-3">{product.tagline}</p>
                <p className="text-text-muted text-sm leading-relaxed mb-5">{product.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-slate-400 dark:bg-slate-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className={`mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-text-muted ${product.hoverText} group-hover:gap-2.5 transition-all`}>
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
