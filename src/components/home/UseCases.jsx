import { useState } from 'react'
import { Factory, Warehouse, Droplets, ClipboardCheck, Building2 } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import ScrollReveal from '../shared/ScrollReveal'
import vlxMark from '../../assets/vlx-mark.png'

const verticals = [
  {
    name: 'Coating Facilities',
    icon: Factory,
    description: 'Track pipes from arrival through blasting, coating, QC, and load out. Generate barcodes at the final bench. Export manifests with one click. Replace your TDS and your spreadsheets.',
    features: ['Work order tracking', 'Barcode generation', 'VLX QC integration', 'Manifest export'],
  },
  {
    name: 'Pipe Yards & Distributors',
    icon: Warehouse,
    description: 'Manage inventory across storage zones with satellite yard mapping. Know exactly where every pipe is, what condition it\'s in, and when it\'s moving. Give your clients real-time visibility.',
    features: ['Yard zone mapping', 'Storage capacity tracking', 'Client-ready exports', 'Barcode scanning'],
  },
  {
    name: 'E&P Operators',
    icon: Droplets,
    description: 'Verify incoming pipe meets your project specifications before it reaches the field. MTR.AI checks compliance against your custom specs — not just industry minimums. Digital product passports give your engineering team full traceability.',
    features: ['MTR compliance verification', 'Custom spec management', 'Product passport review', 'Supplier quality tracking'],
  },
  {
    name: 'Inspection Companies',
    icon: ClipboardCheck,
    vlx: true,
    description: "VLX-powered field inspections feed directly into OCTG.AI. Your inspection data doesn't just live in a report — it becomes part of the pipe's permanent digital record. Deliver more value to your clients.",
    features: ['VLX mobile inspections', 'Bidirectional sync', 'Inspection report integration', 'Digital passports'],
  },
  {
    name: 'Pipe Mills',
    icon: Building2,
    description: 'Provide digital product passports with every shipment. MTR data, compliance verification, and full production records — all in one platform your customers can access. Differentiate on transparency.',
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
          title="Built for every link in the pipe supply chain"
          description="Whether you coat pipe, store pipe, buy pipe, or inspect pipe — OCTG.AI gives you the visibility and automation you need."
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
