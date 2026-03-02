import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'

const lifecycleStages = [
  {
    title: 'Inbound Receiving',
    color: '#06b6d4',
    description: 'Truck arrives, pipes unloaded and inspected against advance PDFs',
    evidence: ['Pipe count verification', 'Damage photos', 'Tally reconciliation', 'MTR matching'],
  },
  {
    title: 'Blasting & Prep',
    color: '#14b8a6',
    description: 'Surface preparation documented with environmental conditions',
    evidence: ['Surface profile readings', 'Ambient conditions', 'Blast media records'],
  },
  {
    title: 'Coating & Application',
    color: '#22c55e',
    description: 'Coating thickness, adhesion testing, cure verification per pipe',
    evidence: ['DFT readings', 'Adhesion pull tests', 'Batch numbers', 'Temperature logs'],
  },
  {
    title: 'Final Bench QC',
    color: '#f97316',
    description: 'Mill thickness readings, quality checks, barcode generation',
    evidence: ['Mill readings', 'Damage comments', 'Pass/fail status', 'Barcode assignment'],
  },
  {
    title: 'Load Out',
    color: '#a855f7',
    description: 'Barcode scanning per pipe onto trucks, BOL generation',
    evidence: ['Per-pipe scan log', 'Truck assignment', 'Inspector signature', 'Load photos'],
  },
  {
    title: 'Shipping & Manifest',
    color: '#3b82f6',
    description: 'Automated manifests, product passports, client deliverables',
    evidence: ['Pipe manifest CSV', 'Product passport PDF', 'Full audit trail'],
  },
]

export default function LifecycleTimeline() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Full Lifecycle Coverage"
          title="Evidence at every stage."
          description="VLX captures verified data at each touchpoint in the pipe lifecycle — not just one or two stages."
        />

        {/* Desktop timeline */}
        <div className="hidden lg:block mt-16">
          {/* Gradient line */}
          <div className="relative h-1 rounded-full overflow-hidden"
            style={{
              background: `linear-gradient(to right, ${lifecycleStages.map((s, i) => `${s.color} ${(i / (lifecycleStages.length - 1)) * 100}%`).join(', ')})`
            }}
          />

          {/* Dots row */}
          <div className="grid grid-cols-6 gap-4 -mt-[10px]">
            {lifecycleStages.map((stage) => (
              <div key={`dot-${stage.title}`} className="flex justify-center">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: stage.color, boxShadow: `0 0 12px ${stage.color}40` }}
                />
              </div>
            ))}
          </div>

          {/* Title + description row (fixed height) */}
          <div className="grid grid-cols-6 gap-4 mt-4">
            {lifecycleStages.map((stage, i) => (
              <ScrollReveal key={`info-${stage.title}`} delay={i * 0.08}>
                <div className="text-center">
                  <h4 className="font-display text-sm font-bold text-text mb-1">{stage.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed min-h-[3rem]">{stage.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Evidence cards row (aligned) */}
          <div className="grid grid-cols-6 gap-4 mt-3">
            {lifecycleStages.map((stage, i) => (
              <ScrollReveal key={`evidence-${stage.title}`} delay={i * 0.08 + 0.05}>
                <div className="w-full bg-surface border border-border rounded-lg p-3 h-full">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-[10px] font-semibold text-green-400 uppercase tracking-wider">
                      Evidence Captured
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {stage.evidence.map((item) => (
                      <li key={item} className="text-[11px] text-text-muted font-mono flex items-start gap-1.5"><span className="text-green-400 mt-px">&#8226;</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile / tablet — vertical layout */}
        <div className="lg:hidden mt-12 space-y-6">
          {lifecycleStages.map((stage, i) => (
            <ScrollReveal key={stage.title} delay={i * 0.05}>
              <div className="flex gap-4">
                {/* Left line + dot */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: stage.color }}
                  />
                  {i < lifecycleStages.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-6">
                  <h4 className="font-display text-sm font-bold text-text mb-1">{stage.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed mb-3">{stage.description}</p>
                  <div className="bg-surface border border-border rounded-lg p-3">
                    <div className="flex items-center gap-1 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="text-[10px] font-semibold text-green-400 uppercase tracking-wider">
                        Evidence Captured
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {stage.evidence.map((item) => (
                        <li key={item} className="text-[11px] text-text-muted font-mono flex items-start gap-1.5"><span className="text-green-400 mt-px">&#8226;</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
