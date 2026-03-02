import { motion } from 'framer-motion'
import {
  ArrowRight, Quote, Factory, Warehouse, Droplets,
  ClipboardCheck, Building2, Check, TrendingUp, Clock, ShieldCheck
} from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'
import SectionHeading from '../components/shared/SectionHeading'
import ScrollReveal from '../components/shared/ScrollReveal'
import Badge from '../components/shared/Badge'
import Button from '../components/shared/Button'
import AnimatedCounter from '../components/shared/AnimatedCounter'
import vlxLogo from '../assets/vlx-logo.png'
import vlxMark from '../assets/vlx-mark.png'

const logoStrip = [
  { name: 'VLX', image: vlxLogo },
]

const stats = [
  { value: 40, suffix: '+', label: 'hrs/month saved', detail: 'per facility on average' },
  { value: 98, suffix: '%', label: 'accuracy', detail: 'AI extraction on MTR data' },
  { value: 15, suffix: 'k+', label: 'joints tracked', detail: 'per facility with zero re-entry' },
  { value: 30, suffix: 's', label: 'tally generation', detail: 'down from 3+ hours manual' },
]

const testimonials = [
  {
    quote: "We went from spending 3 hours on shipping tallies to generating them in 30 seconds. OCTG.AI isn't just better software — it's a different category.",
    author: 'Operations Manager',
    company: 'Gulf Coast Coating Facility (200k+ joints/year)',
    vertical: 'Coating',
    color: 'orange',
  },
  {
    quote: "The MTR compliance engine caught a heat that was marginally out of spec. That's the kind of catch that used to require a quality engineer spending half a day with a calculator.",
    author: 'Quality Director',
    company: '50,000 BOE/day E&P Operator, Permian Basin',
    vertical: 'E&P',
    color: 'indigo',
  },
  {
    quote: "VLX inspections syncing directly into the pipe record changed everything for our field teams. No more paper forms, no more manual data transfer. Scan and go.",
    author: 'Field Operations Lead',
    company: 'Texas Inspection Services',
    vertical: 'Inspection',
    color: 'blue',
  },
  {
    quote: "Our clients used to wait days for documentation packages. Now we hand them a complete pipe passport — MTRs, inspections, compliance — before the truck leaves the yard.",
    author: 'VP of Operations',
    company: 'Midstream Pipe Distributors',
    vertical: 'Distribution',
    color: 'purple',
  },
]

const verticals = [
  {
    name: 'Coating Facilities',
    icon: Factory,
    results: [
      '3-hour tally generation reduced to 30 seconds',
      'Zero manual status updates — pipe state drives WO state',
      'Barcode labels printed at the final bench eliminate hand-writing errors',
    ],
    products: ['AI Native Pipe Management', 'VLX Inspections'],
  },
  {
    name: 'Pipe Yards & Distributors',
    icon: Warehouse,
    results: [
      'Satellite yard mapping shows capacity utilization at a glance',
      'Client-ready documentation packages generated in one click',
      'Receiving reconciliation automated — manifest vs. physical count',
    ],
    products: ['AI Native Pipe Management', 'Yard Mapping'],
  },
  {
    name: 'E&P Operators',
    icon: Droplets,
    results: [
      'API 5CT & 5L compliance verified before pipe arrives on site',
      'Custom spec management catches project-specific requirements',
      'Full traceability from mill cert to field installation',
    ],
    products: ['MTR.AI', 'Pipe Passports'],
  },
  {
    name: 'Inspection Companies',
    icon: ClipboardCheck,
    vlx: true,
    results: [
      'VLX mobile inspections sync bidirectionally with inventory',
      'Inspection data becomes part of the pipe\'s permanent digital record',
      'Clients receive reports linked to actual pipe records, not standalone PDFs',
    ],
    products: ['VLX Inspections', 'AI Native Pipe Management'],
  },
  {
    name: 'Pipe Mills',
    icon: Building2,
    results: [
      'Digital pipe passports shipped with every order',
      'MTR compliance pre-verified against customer specs',
      'Differentiate on transparency and data quality',
    ],
    products: ['MTR.AI', 'Pipe Passports'],
  },
]

export default function Customers() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-blueprint overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4"
            >
              Customers
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-text leading-[1.1] mb-6"
            >
              Trusted by the facilities that{' '}
              <span className="text-accent">move the pipe.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl"
            >
              From coating operations on the Gulf Coast to quality teams in the Permian Basin — OCTG.AI and VLX power pipe intelligence for the companies that keep energy infrastructure moving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="mailto:hello@octg.ai?subject=Demo%20Request" size="xl">
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href="mailto:hello@octg.ai?subject=Consultation"
                variant="secondary"
                size="xl"
              >
                Talk to Our Team
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-text-muted mb-8">
            Powered by
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {logoStrip.map((logo) => (
              <img
                key={logo.name}
                src={logo.image}
                alt={logo.name}
                className="h-8 md:h-10 object-contain dark:brightness-0 dark:invert opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 dark:from-[#0B0F1A] dark:via-[#111827] dark:to-[#0B0F1A] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-extrabold text-text mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                    {stat.label}
                  </div>
                  <p className="text-text-muted text-sm">{stat.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Testimonials"
            title="What our customers say"
            description="Hear from the operations managers, quality directors, and field teams who use OCTG.AI every day."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 0.1}>
                <div className="bg-surface border border-border rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <Badge color={t.color}>{t.vertical}</Badge>
                    <Quote className="w-6 h-6 text-accent/20" />
                  </div>
                  <blockquote className="text-text leading-relaxed mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <span className="text-sm font-bold text-text-muted">
                        {t.author.split(' ').map(w => w[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-text">{t.author}</div>
                      <div className="text-xs text-text-muted">{t.company}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals / Results */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Industries"
            title="Results across the pipe supply chain"
            description="Every link in the chain — from mill to field — gets measurable value from OCTG.AI."
          />

          <div className="space-y-6 mt-12">
            {verticals.map((v, i) => (
              <ScrollReveal key={v.name} delay={i * 0.08}>
                <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
                  <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
                    {/* Left: vertical info */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        {v.vlx ? (
                          <img src={vlxMark} alt="VLX" className="w-7 h-7 object-contain" />
                        ) : (
                          <v.icon className="w-6 h-6 text-accent" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-text">{v.name}</h3>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {v.products.map((p) => (
                            <span key={p} className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                              {p.startsWith('VLX') && (
                                <img src={vlxMark} alt="" className="w-2.5 h-2.5 object-contain" />
                              )}
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: results */}
                    <ul className="space-y-2.5">
                      {v.results.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-sm text-text-muted">
                          <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VLX Partnership banner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-surface border border-border rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left: content */}
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <img src={vlxLogo} alt="VLX" className="h-8 dark:brightness-0 dark:invert" />
                    <span className="text-text-muted text-sm">+</span>
                    <span className="font-display text-xl font-bold">
                      <span className="text-text">OCTG</span>
                      <span className="text-accent">.AI</span>
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-text mb-4">
                    Powered by VLX.{' '}
                    <span className="text-accent">Verify, then trust.</span>
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-6">
                    OCTG.AI is built on the VLX platform — the verification infrastructure trusted by inspection companies, operators, and service providers across the energy sector. Every barcode scan, every field inspection, every compliance check flows through VLX.
                  </p>
                  <ul className="space-y-3">
                    {[
                      { icon: ShieldCheck, text: 'SOC 2 compliant infrastructure' },
                      { icon: TrendingUp, text: 'Bidirectional sync between field and office' },
                      { icon: Clock, text: 'Real-time inspection data on every pipe' },
                    ].map((item) => (
                      <li key={item.text} className="flex items-center gap-3 text-sm text-text-muted">
                        <item.icon className="w-4 h-4 text-accent shrink-0" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: VLX visual */}
                <div className="bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center p-8 md:p-12 gap-6">
                  <img src={vlxMark} alt="VLX" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                  <div className="text-center">
                    <p className="font-display text-lg font-bold text-text mb-1">Verify Then Trust</p>
                    <p className="text-sm text-text-muted">Field-ready verification infrastructure</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Mobile Inspections', 'Barcode Scanning', 'Bidirectional Sync', 'Digital Records'].map((tag) => (
                      <span key={tag} className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-white dark:bg-slate-700 border border-border text-text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-alt dark:bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text dark:text-white mb-4">
              Join the yards and facilities running on OCTG.AI
            </h2>
            <p className="text-text-muted mb-8">
              Custom-configured for your facility. Deployed in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:hello@octg.ai?subject=Demo%20Request" size="xl">
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href="mailto:hello@octg.ai?subject=Consultation"
                variant="secondary"
                size="xl"
              >
                Talk to Our Team
              </Button>
            </div>

            {/* VLX footer mark */}
            <div className="flex items-center justify-center gap-2 mt-12 opacity-50">
              <span className="text-text-muted text-xs">Powered by</span>
              <img src={vlxLogo} alt="VLX" className="h-4 brightness-0 dark:invert" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  )
}
