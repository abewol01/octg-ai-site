import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Truck, Settings, SearchCheck, Layers, PackageCheck } from 'lucide-react'
import Button from '../shared/Button'
import lspLogo from '../../assets/lsp-logo.png'
import pipeExchangeLogo from '../../assets/pipe-exchange-logo.png'
import corpacLogo from '../../assets/corpac-logo.webp'
import tubaceroLogo from '../../assets/tubacero-logo.png'

const stages = [
  { label: 'Arrival', icon: Truck },
  { label: 'Processing', icon: Settings },
  { label: 'QC', icon: SearchCheck },
  { label: 'Coating', icon: Layers },
  { label: 'Shipping', icon: PackageCheck },
]

const statusStages = [
  { text: 'Receiving', color: 'bg-[#DBEAFE] text-[#1D4ED8]' },
  { text: 'Processing', color: 'bg-[#FEF3C7] text-[#B45309]' },
  { text: 'QC Complete', color: 'bg-[#F3E8FF] text-[#7E22CE]' },
  { text: 'Coated', color: 'bg-[#FFEDD5] text-[#C2410C]' },
  { text: 'Ready to Ship', color: 'bg-[#DCFCE7] text-[#15803D]' },
]

const tickerItems = [
  'AI Document Classification',
  'Automated MTR Compliance',
  'VLX Mobile Inspections',
  'Chemical Composition Extraction',
  'AI-Driven Status Tracking',
  'Digital Product Passports',
  'VLX Barcode Scanning',
  'Satellite Yard Mapping',
  'One-Click Compliance Checks',
  'Real-Time Pipe Tracking',
  'Automated Tally Generation',
  'VLX Field Inspections',
  'AI PDF Processing',
  'End-to-End Traceability',
]

const CYCLE_DURATION = 10000 // 10s per full pipeline cycle
const FLIP_INTERVAL = 2500 // 2.5s per feature flip

export default function Hero() {
  const [activeStage, setActiveStage] = useState(-1)
  const [tickerIndex, setTickerIndex] = useState(0)

  useEffect(() => {
    let frame = -1
    const tick = () => {
      frame = (frame + 1) % (stages.length + 1)
      setActiveStage(frame === stages.length ? -1 : frame)
    }

    tick()
    const interval = setInterval(tick, CYCLE_DURATION / (stages.length + 1))
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex(prev => (prev + 1) % tickerItems.length)
    }, FLIP_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-blueprint overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full border border-accent/10" />
        <div className="absolute top-32 right-[12%] w-48 h-48 rounded-full border border-accent/5" />
        <div className="absolute bottom-20 left-[5%] w-32 h-32 rounded-full border border-secondary/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-16">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — Copy + CTAs */}
          <div>
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
              className="font-display text-4xl md:text-5xl lg:text-[3.25rem] xl:text-5xl font-extrabold text-text leading-[1.1] mb-6"
            >
              Your pipe operations are buried in spreadsheets.{' '}
              <span className="text-accent">We engineer the way out.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-text-muted leading-relaxed mb-8"
            >
              OCTG.AI is a configurable AI platform that adapts to your facility's exact workflow — from receiving through coating, QC, and shipping. One deployment. Your operation. Full traceability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="mailto:hello@octg.ai?subject=Demo%20Request" size="xl">
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="mailto:hello@octg.ai?subject=Consultation" variant="secondary" size="xl">
                Talk to Our Team
              </Button>
            </motion.div>
          </div>

          {/* Right column — Animated Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative rounded-2xl p-6 md:p-8 bg-white border border-gray-200 shadow-lg shadow-gray-200/60 dark:bg-[#111827]/80 dark:backdrop-blur-xl dark:border-white/[0.06] dark:shadow-2xl dark:shadow-black/40 dark:ring-1 dark:ring-inset dark:ring-white/[0.05]">
              {/* Dot grid background pattern */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none opacity-[0.04]" style={{
                backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />

              <div className="relative">
                {/* Split-flap feature display — no box wrapper */}
                <div className="flex items-center justify-center mb-5 overflow-hidden" style={{ height: 32, perspective: 600 }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={tickerIndex}
                      initial={{ rotateX: 90, opacity: 0 }}
                      animate={{ rotateX: 0, opacity: 1 }}
                      exit={{ rotateX: -90, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="text-lg md:text-xl font-bold text-slate-700 dark:text-slate-200 tracking-wide"
                      style={{ transformOrigin: 'center center', backfaceVisibility: 'hidden' }}
                    >
                      {tickerItems[tickerIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Pipeline track */}
                <div className="flex items-center justify-between relative px-2 py-4">
                  {/* Background line */}
                  <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-0.5 bg-gray-200 dark:bg-slate-700 z-0" />

                  {/* Animated glow pulse */}
                  <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-0.5 z-0 overflow-hidden">
                    <motion.div
                      className="h-full w-1/4 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent, var(--color-accent), var(--color-accent), transparent)',
                      }}
                      animate={{ x: ['-100%', '500%'] }}
                      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>

                  {/* Stage nodes */}
                  {stages.map((stage, i) => (
                    <div key={stage.label} className="flex flex-col items-center gap-2.5 z-10" style={{ flex: 1 }}>
                      <motion.div
                        animate={{
                          borderColor: activeStage === i ? '#F97316' : '',
                          scale: activeStage === i ? 1.08 : 1,
                        }}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 transition-colors duration-300 bg-slate-50 dark:bg-[#111827] ${
                          activeStage === i
                            ? 'border-accent shadow-[0_0_16px_rgba(249,115,22,0.3)]'
                            : 'border-gray-200 dark:border-white/[0.1]'
                        }`}
                      >
                        <stage.icon className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${
                          activeStage === i ? 'text-accent' : 'text-slate-600 dark:text-slate-400'
                        }`} />
                      </motion.div>
                      <span className={`text-xs md:text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                        activeStage === i ? 'text-accent' : 'text-slate-600 dark:text-slate-400'
                      }`}>
                        {stage.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Data card below pipeline */}
                <div className="mt-6 rounded-xl p-5 md:p-6 bg-gray-50 border border-gray-100 dark:bg-white/[0.04] dark:border-white/[0.06]">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-300 font-medium uppercase tracking-wider">Heat #</div>
                      <div className="text-base font-semibold text-slate-900 dark:text-white mt-0.5 font-mono">H-84521</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-300 font-medium uppercase tracking-wider">Grade</div>
                      <div className="text-base font-semibold text-slate-900 dark:text-white mt-0.5">API 5L X52</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-300 font-medium uppercase tracking-wider">OD × Wall</div>
                      <div className="text-base font-semibold text-slate-900 dark:text-white mt-0.5">16&quot; × 0.375&quot;</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-300 font-medium uppercase tracking-wider">Status</div>
                      <div className="mt-1">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={activeStage >= 0 ? statusStages[activeStage].text : 'idle'}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25 }}
                            className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                              activeStage >= 0 ? statusStages[activeStage].color : 'bg-gray-100 text-gray-500 dark:bg-slate-700 dark:text-slate-400'
                            }`}
                          >
                            {activeStage >= 0 ? statusStages[activeStage].text : '\u2014'}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partner logos — full-width centered row below hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 md:mt-20"
        >
          <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest text-center mb-6">
            Powering the Pipe Industry
          </p>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <img src={lspLogo} alt="LSP" className="h-7 md:h-8 opacity-40 logo-partner hover:opacity-70 transition-all duration-300" />
            <img src={pipeExchangeLogo} alt="Pipe Exchange" className="h-7 md:h-8 opacity-40 logo-partner hover:opacity-70 transition-all duration-300" />
            <img src={corpacLogo} alt="Corpac" className="h-7 md:h-8 opacity-40 logo-partner hover:opacity-70 transition-all duration-300" />
            <img src={tubaceroLogo} alt="Tubacero" className="h-8 md:h-9 opacity-40 logo-partner hover:opacity-70 transition-all duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
