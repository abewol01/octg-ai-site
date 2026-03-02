import ScrollReveal from '../shared/ScrollReveal'
import AnimatedCounter from '../shared/AnimatedCounter'

const metrics = [
  {
    value: 40,
    suffix: '+',
    unit: 'hrs/month saved',
    context: 'Eliminated manual data entry across receiving, QC, and shipping',
  },
  {
    label: 'Zero',
    unit: 're-entry',
    context: 'Information entered once flows to every report, manifest, and passport',
  },
  {
    value: 100,
    suffix: '%',
    unit: 'traceability',
    context: 'Every pipe tracked from arrival to delivery with full audit history',
  },
  {
    label: 'Minutes',
    unit: 'not days',
    context: 'AI checks MTRs against specs in seconds — no manual cross-referencing',
  },
]

export default function MetricsBar() {
  return (
    <section className="bg-primary py-20 section-divider-reverse">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, i) => (
            <ScrollReveal key={metric.unit} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-extrabold text-white mb-1">
                  {metric.value ? (
                    <AnimatedCounter target={metric.value} suffix={metric.suffix || ''} />
                  ) : (
                    metric.label
                  )}
                </div>
                <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                  {metric.unit}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {metric.context}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
