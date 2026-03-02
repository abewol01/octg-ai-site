import ScrollReveal from '../shared/ScrollReveal'
import Badge from '../shared/Badge'

export default function ProductFeatures({ features, accentColor = 'orange' }) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={`grid md:grid-cols-2 gap-12 items-center`}
          >
            <ScrollReveal
              direction={i % 2 === 0 ? 'left' : 'right'}
              className={i % 2 === 1 ? 'md:order-2' : ''}
            >
              <Badge color={accentColor}>{feature.badge || `Feature ${i + 1}`}</Badge>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-text mt-3 mb-4">
                {feature.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </ScrollReveal>

            <ScrollReveal
              direction={i % 2 === 0 ? 'right' : 'left'}
              delay={0.15}
              className={i % 2 === 1 ? 'md:order-1' : ''}
            >
              {feature.visual ? (
                feature.visual
              ) : (
                <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
                  <div className={`w-full h-48 rounded-lg ${accentColor === 'cyan' ? 'bg-cyan-50 dark:bg-cyan-900/20' : 'bg-orange-50 dark:bg-orange-900/20'} flex items-center justify-center`}>
                    <div className="text-center">
                      <feature.icon className={`w-10 h-10 mx-auto mb-2 ${accentColor === 'cyan' ? 'text-secondary' : 'text-accent'}`} />
                      <span className="text-sm text-text-muted">{feature.title}</span>
                    </div>
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  )
}
