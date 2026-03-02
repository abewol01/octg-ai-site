import { Quote } from 'lucide-react'
import ScrollReveal from '../shared/ScrollReveal'

const testimonials = [
  {
    quote: "We went from spending 3 hours on shipping tallies to generating them in 30 seconds. OCTG.AI isn't just better software — it's a different category.",
    author: 'Operations Manager',
    company: 'Gulf Coast Coating Facility',
  },
  {
    quote: 'The MTR compliance engine caught a heat that was marginally out of spec. That\'s the kind of catch that used to require a quality engineer spending half a day with a calculator.',
    author: 'Quality Director',
    company: 'Permian Basin E&P',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.15}>
              <div className="bg-white border border-border rounded-2xl p-8 h-full">
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                <blockquote className="text-lg text-primary leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-sm text-primary">{t.author}</div>
                  <div className="text-sm text-text-muted">{t.company}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-text-muted mt-10 text-sm">
            Join the facilities modernizing their pipe operations
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
