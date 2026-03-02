import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../shared/Button'
import vlxLogo from '../../assets/vlx-logo.png'
import pipeExchangeLogo from '../../assets/pipe-exchange-logo.png'
import corpacLogo from '../../assets/corpac-logo.webp'
import tubaceroLogo from '../../assets/tubacero-logo.png'

export default function Hero() {
  return (
    <section className="relative bg-blueprint overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full border border-accent/10" />
        <div className="absolute top-32 right-[12%] w-48 h-48 rounded-full border border-accent/5" />
        <div className="absolute bottom-20 left-[5%] w-32 h-32 rounded-full border border-secondary/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
              AI-Native Pipe Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-text leading-[1.1] mb-6"
          >
            Your pipe operations are buried in spreadsheets.{' '}
            <span className="text-accent">We built the way out.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl"
          >
            OCTG.AI is the AI-native platform that tracks every pipe from mill to field — with full traceability, automated compliance, and zero manual re-entry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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

        {/* Hero visual — abstract pipe flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 md:mt-20"
        >
          <div className="relative bg-surface border border-border rounded-2xl shadow-xl dark:shadow-black/30 p-8 overflow-hidden">
            {/* Abstract pipeline visualization */}
            <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2">
              {[
                { label: 'Arrival', color: 'bg-info', icon: '📥' },
                { label: 'Processing', color: 'bg-warning', icon: '⚙️' },
                { label: 'QC Inspection', color: 'bg-purple-500', icon: '🔍' },
                { label: 'Coating', color: 'bg-accent', icon: '🎨' },
                { label: 'Shipping', color: 'bg-success', icon: '🚛' },
              ].map((stage, i) => (
                <div key={stage.label} className="flex items-center gap-3 shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.15, type: 'spring' }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className={`w-14 h-14 rounded-xl ${stage.color} flex items-center justify-center text-2xl shadow-sm`}>
                      {stage.icon}
                    </div>
                    <span className="text-xs font-medium text-text-muted whitespace-nowrap">{stage.label}</span>
                  </motion.div>
                  {i < 4 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.9 + i * 0.15 }}
                      className="w-8 md:w-16 h-0.5 bg-border origin-left"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Data points appearing */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Heat #', value: 'A1B2C3D4' },
                { label: 'Grade', value: 'API 5L X52' },
                { label: 'Length', value: '42.3 ft' },
                { label: 'Status', value: 'Ready to Ship', color: 'text-success' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + i * 0.1 }}
                  className="bg-surface-alt rounded-lg p-3"
                >
                  <div className="text-[11px] text-text-muted font-medium uppercase tracking-wider">{item.label}</div>
                  <div className={`text-sm font-semibold mt-0.5 ${item.color || 'text-text'}`}>{item.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-text-muted mb-6">
            Trusted by coating facilities and pipe operations across the Gulf Coast
          </p>
          <div className="flex items-center justify-center gap-10 md:gap-14 flex-wrap">
            <img src={vlxLogo} alt="VLX" className="h-6 md:h-7 opacity-40 hover:opacity-70 transition-opacity dark:brightness-0 dark:invert" />
            <img src={pipeExchangeLogo} alt="Pipe Exchange" className="h-6 md:h-7 opacity-40 hover:opacity-70 transition-opacity dark:brightness-0 dark:invert" />
            <img src={corpacLogo} alt="Corpac" className="h-6 md:h-7 opacity-40 hover:opacity-70 transition-opacity dark:brightness-0 dark:invert" />
            <img src={tubaceroLogo} alt="Tubacero" className="h-7 md:h-8 opacity-40 hover:opacity-70 transition-opacity dark:brightness-0 dark:invert" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
