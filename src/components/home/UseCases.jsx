import { useState } from 'react'
import { Factory, Warehouse, Droplets, ClipboardCheck, Building2 } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import ScrollReveal from '../shared/ScrollReveal'
import vlxMark from '../../assets/vlx-mark.png'

const verticals = [
  {
    name: 'Coating Facilities',
    icon: Factory,
    description: 'We configure the platform around your blast-to-ship workflow. Track every joint from receiving through blasting, coating, QC, and load out. Generate barcodes at the final bench. Export manifests with one click.',
    features: ['Work order tracking', 'Barcode generation', 'VLX QC integration', 'Manifest export'],
  },
  {
    name: 'Pipe Yards & Distributors',
    icon: Warehouse,
    description: 'Configured for your yard layout, storage zones, and client delivery requirements. Track pipe by condition — new, surplus, used, reconditioned. Know exactly where every joint is and when it\'s moving. Give your clients real-time visibility.',
    features: ['Yard zone mapping', 'Condition tracking', 'Client-ready exports', 'Barcode scanning'],
  },
  {
    name: 'E&P Operators',
    icon: Droplets,
    description: 'Configured with your project specifications and supplier quality standards. MTR.AI checks compliance against API 5CT & 5L and your custom specs — not just industry minimums. Digital pipe passports give your engineering team full traceability from mill cert to field.',
    features: ['API 5CT & 5L compliance', 'Custom spec management', 'Pipe passport review', 'Supplier quality tracking'],
  },
  {
    name: 'Inspection Companies',
    icon: ClipboardCheck,
    vlx: true,
    description: "Inspection templates built around API RP 5A5, DS-1, and client-specific requirements. Integrated with your VLX inspection workflow. Your inspection data doesn't just live in a report — it becomes part of the pipe's permanent digital record.",
    features: ['VLX mobile inspections', 'Bidirectional sync', 'DS-1 / API RP 5A5 templates', 'Digital passports'],
  },
  {
    name: 'Pipe Mills',
    icon: Building2,
    description: 'Configured for your production tracking and customer documentation delivery. MTR data, compliance verification, and full production records — all in one platform your customers can access. Differentiate on transparency.',
    features: ['MTR management', 'Compliance documentation', 'Digital passport generation', 'Customer portal (future)'],
  },
]

export default function UseCases() {
  const [active, setActive] = useState(0)
  const current = verticals[active]

  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Use Cases"
          title="Deployed across the pipe supply chain"
          description="Whether you coat pipe, store pipe, buy pipe, or inspect pipe — OCTG.AI is configured for your specific operation."
        />

        <ScrollReveal>
          <div className="mt-12">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {verticals.map((v, i) => (
                <button
                  key={v.name}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    active === i
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-surface border border-border text-text-muted hover:border-text hover:text-text'
                  }`}
                >
                  <v.icon className="w-4 h-4" />
                  {v.name}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="bg-surface border border-border rounded-2xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    {current.vlx ? (
                      <img src={vlxMark} alt="VLX" className="w-8 h-8 object-contain" />
                    ) : (
                      <current.icon className="w-7 h-7 text-accent" />
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-text mb-3">{current.name}</h3>
                  <p className="text-text-muted leading-relaxed">{current.description}</p>
                </div>
                <div className="flex items-center">
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {current.features.map((feature) => (
                      <div key={feature} className="bg-surface-alt rounded-lg p-4 flex items-center gap-2">
                        {feature.startsWith('VLX') && (
                          <img src={vlxMark} alt="VLX" className="w-4 h-4 object-contain shrink-0" />
                        )}
                        <span className="text-sm font-medium text-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
