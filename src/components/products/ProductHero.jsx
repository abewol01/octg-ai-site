import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../shared/Button'

export default function ProductHero({
  label,
  headline,
  subheadline,
  accentColor = 'text-accent',
}) {
  return (
    <section className="relative bg-blueprint overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-block text-xs font-semibold tracking-widest uppercase ${accentColor} mb-4`}
          >
            {label}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] mb-6"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="https://app.octg.ai/signup" size="xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button to="/pricing" variant="secondary" size="xl">
              See Pricing
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
