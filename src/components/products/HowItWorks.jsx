import SectionHeading from '../shared/SectionHeading'
import ScrollReveal from '../shared/ScrollReveal'

export default function HowItWorks({ steps, accentColor = 'orange' }) {
  const dotColor = accentColor === 'cyan' ? 'bg-secondary' : 'bg-accent'
  const numColor = accentColor === 'cyan' ? 'text-secondary' : 'text-accent'

  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="How It Works"
          title="Up and running in minutes"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
              <div className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-32px)] h-0.5 bg-border" />
                )}
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${accentColor === 'cyan' ? 'bg-cyan-100' : 'bg-orange-100'} mb-4`}>
                    <span className={`font-display text-2xl font-bold ${numColor}`}>{i + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
