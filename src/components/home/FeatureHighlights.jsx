import { LayoutDashboard, FileCheck, Scan } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import ScrollReveal from '../shared/ScrollReveal'
import Badge from '../shared/Badge'

const features = [
  {
    label: 'Inventory Tracking',
    title: 'Your facility thinks in work orders. Now your software does too.',
    description: "Most pipe software forces you to manage individual pipes. But your operators think in work orders — 'Is WO-2025-003 ready to ship?' OCTG Tracker derives work order status automatically from pipe states. No manual status updates. No reconciliation. Just real-time visibility.",
    bullets: [
      'Operations Center dashboard shows what needs attention today — not a wall of 6,000 pipes',
      'Status flows automatically: receiving → processing → QC → ready to ship → loaded → shipped',
      'One-click export: manifest PDFs, shipping tallies, or full product passports',
    ],
    icon: LayoutDashboard,
    color: 'orange',
    visual: 'dashboard',
  },
  {
    label: 'MTR Compliance',
    title: 'Upload a stack of PDFs. AI does the rest.',
    description: "Clients send advance PDF bundles — MTRs, shipping tallies, cover sheets — all mixed together. MTR.AI classifies every page, extracts pipe data from tallies, pulls chemical and mechanical properties from MTRs, and runs compliance checks against your specs. What used to take your quality team hours now takes minutes.",
    bullets: [
      'AI classifies every page: MTR, tally, cover sheet, or other — with confidence scores',
      "Extracted data creates pipe records automatically with 'expected' status before trucks arrive",
      'Compliance checks against API 5L specs with parameter-level pass/warning/fail results',
    ],
    icon: FileCheck,
    color: 'cyan',
    visual: 'mtr',
  },
  {
    label: 'Field Integration',
    title: 'Scan a barcode. See everything.',
    description: "Every pipe gets a unique barcode printed on a Zebra thermal label at the final bench. Field operators scan with VLX on their phones — inspection data syncs automatically to inventory. No manual data transfer. No disconnected tallies.",
    bullets: [
      'Barcode encodes work order, heat number, length, and sequence — parseable by any standard reader',
      'VLX mobile inspections at inbound, post-coating, and outbound sync bidirectionally',
      'Digital product passports combine inventory data, inspection reports, MTRs, and compliance records into one downloadable PDF',
    ],
    icon: Scan,
    color: 'blue',
    visual: 'scan',
  },
]

function FeatureVisual({ type }) {
  if (type === 'dashboard') {
    return (
      <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-success" />
          <span className="text-xs font-medium text-text-muted">Operations Center</span>
        </div>
        {[
          { wo: 'WO-2025-003', status: 'Ready to Ship', color: 'bg-purple-100 text-purple-700', progress: 95 },
          { wo: 'WO-2025-004', status: 'Processing', color: 'bg-amber-100 text-amber-700', progress: 60 },
          { wo: 'WO-2025-005', status: 'Receiving', color: 'bg-blue-100 text-blue-700', progress: 20 },
        ].map((item) => (
          <div key={item.wo} className="flex items-center justify-between py-3 border-b border-border last:border-0">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-primary">{item.wo}</span>
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${item.color}`}>{item.status}</span>
            </div>
            <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full" style={{ width: `${item.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'mtr') {
    return (
      <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-secondary" />
          <span className="text-xs font-medium text-text-muted">MTR Compliance Check</span>
        </div>
        <div className="space-y-3">
          {[
            { param: 'Carbon (C)', value: '0.22%', range: '≤ 0.26%', status: 'pass' },
            { param: 'Yield Strength', value: '52,400 psi', range: '52,000–76,000', status: 'warning' },
            { param: 'Phosphorus (P)', value: '0.032%', range: '≤ 0.025%', status: 'fail' },
          ].map((row) => (
            <div key={row.param} className="flex items-center justify-between text-sm">
              <span className="text-text-muted">{row.param}</span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-primary">{row.value}</span>
                <span className={`w-2 h-2 rounded-full ${
                  row.status === 'pass' ? 'bg-success' :
                  row.status === 'warning' ? 'bg-warning' : 'bg-danger'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-info" />
        <span className="text-xs font-medium text-text-muted">VLX Barcode Scan</span>
      </div>
      <div className="text-center py-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 mb-3">
          <Scan className="w-8 h-8 text-info" />
        </div>
        <div className="font-mono text-xs text-text-muted mb-2">||||| |||| ||| |||||| ||||</div>
        <div className="text-sm font-semibold text-primary">WO-2025-003 / H#A1B2C3</div>
        <div className="text-xs text-text-muted mt-1">42.3 ft · Seq #047</div>
      </div>
    </div>
  )
}

export default function FeatureHighlights() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Features"
          title="Built for how you actually work"
        />

        <div className="space-y-24 mt-12">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}
            >
              <ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'} className={i % 2 === 1 ? 'md:order-2' : ''}>
                <Badge color={feature.color}>{feature.label}</Badge>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mt-3 mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-text-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal direction={i % 2 === 0 ? 'right' : 'left'} delay={0.15} className={i % 2 === 1 ? 'md:order-1' : ''}>
                <FeatureVisual type={feature.visual} />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
