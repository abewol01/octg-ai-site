import { Quote } from 'lucide-react'
import ScrollReveal from '../shared/ScrollReveal'
import SectionHeading from '../shared/SectionHeading'
import vlxLogo from '../../assets/vlx-logo.png'
import pipeExchangeLogo from '../../assets/pipe-exchange-logo.png'
import corpacLogo from '../../assets/corpac-logo.webp'
import tubaceroLogo from '../../assets/tubacero-logo.png'

const testimonials = [
  {
    quote: "We went from spending 3 hours on shipping tallies to generating them in 30 seconds. The implementation team understood our workflow from day one.",
    author: 'Operations Manager',
    company: 'Gulf Coast Coating Facility (200k+ joints/year)',
  },
  {
    quote: 'The MTR compliance engine caught a heat that was marginally out of spec. That\'s the kind of catch that used to require a quality engineer spending half a day with a calculator.',
    author: 'Quality Director',
    company: '50,000 BOE/day E&P Operator, Permian Basin',
  },
]

const logos = [
  { src: vlxLogo, alt: 'VLX' },
  { src: pipeExchangeLogo, alt: 'Pipe Exchange' },
  { src: corpacLogo, alt: 'Corpac' },
  { src: tubaceroLogo, alt: 'Tubacero' },
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Testimonials"
          title="Trusted across the pipe supply chain"
        />

        {/* Customer logo strip */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-10 md:gap-14 flex-wrap mt-10 mb-14">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-7 md:h-8 object-contain opacity-40 hover:opacity-70 transition-opacity dark:brightness-0 dark:invert"
              />
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.15}>
              <div className="bg-surface border border-gray-200/60 dark:border-white/[0.06] rounded-2xl p-8 h-full shadow-sm dark:shadow-black/20">
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                <blockquote className="text-lg text-text leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-sm text-text">{t.author}</div>
                  <div className="text-sm text-text-muted">{t.company}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-text-muted mt-10 text-sm">
            Join the coating facilities and yards running on OCTG.AI
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
