import {
  LayoutDashboard, RefreshCw, Upload, Barcode, Scan,
  FileDown, Map, ArrowRight, Check,
  ClipboardList, Monitor, Phone, Clipboard, FileSpreadsheet, AlertCircle
} from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'
import ProductHero from '../components/products/ProductHero'
import HowItWorks from '../components/products/HowItWorks'
import SectionHeading from '../components/shared/SectionHeading'
import ScrollReveal from '../components/shared/ScrollReveal'
import Badge from '../components/shared/Badge'
import Button from '../components/shared/Button'
import TrackerDashboardMockup from '../components/mockups/TrackerDashboardMockup'
import TrackerStatusMockup from '../components/mockups/TrackerStatusMockup'
import TrackerImportMockup from '../components/mockups/TrackerImportMockup'
import TrackerBarcodeMockup from '../components/mockups/TrackerBarcodeMockup'
import TrackerScanMockup from '../components/mockups/TrackerScanMockup'
import TrackerExportMockup from '../components/mockups/TrackerExportMockup'
import TrackerYardMockup from '../components/mockups/TrackerYardMockup'
import vlxMark from '../assets/vlx-mark.png'

const features = [
  {
    badge: 'Dashboard',
    icon: LayoutDashboard,
    title: 'Operations Center — not just a pipe list',
    description: "See what's receiving today, what needs attention, and what's ready to ship. Your dashboard is organized around work orders — because that's how you think about your day.",
    visual: <TrackerDashboardMockup />,
  },
  {
    badge: 'Status',
    icon: RefreshCw,
    title: 'Status that updates itself',
    description: "Pipe status flows automatically from receiving through processing, QC, and shipping. Work order status is derived from pipe states — when all pipes are shipped, the WO is shipped. No manual clicks.",
    visual: <TrackerStatusMockup />,
  },
  {
    badge: 'Import',
    icon: Upload,
    title: 'Get pipes into the system in minutes, not hours',
    description: "Upload an Excel manifest — columns auto-map to pipe fields. Or upload a client's PDF bundle and let AI classify and extract pipe data. Pipes arrive in the system before the truck arrives at your gate.",
    visual: <TrackerImportMockup />,
  },
  {
    badge: 'Barcode',
    icon: Barcode,
    title: 'Print. Stick. Scan. Done.',
    description: 'Generate unique barcodes for every pipe at the final bench. Print directly to Zebra thermal printers. Each barcode encodes the work order, heat number, length, and sequence number.',
    visual: <TrackerBarcodeMockup />,
  },
  {
    badge: 'Field',
    icon: Scan,
    title: 'Mobile inspections that actually connect to your inventory',
    description: "VLX-powered inspections at inbound, post-coating, and outbound. Scan a barcode — inspection data syncs to the pipe's digital record. No manual data transfer ever.",
    visual: <TrackerScanMockup />,
  },
  {
    badge: 'Export',
    icon: FileDown,
    title: 'One click. Complete documentation.',
    description: 'Generate shipping manifests (PDF), tally spreadsheets (Excel), or full product passports (PDF with cover, tally, MTRs, and inspection reports). Your clients get a professional documentation package.',
    visual: <TrackerExportMockup />,
  },
  {
    badge: 'Mapping',
    icon: Map,
    title: 'Satellite view of every pipe in your yard',
    description: 'Mapbox-powered satellite map with custom storage zones. See capacity utilization at a glance. Know exactly where pipes are staged.',
    visual: <TrackerYardMockup />,
  },
]

const howItWorks = [
  {
    title: 'Discovery',
    description: 'We map your receiving-to-shipping workflow and identify where time and accuracy are lost.',
  },
  {
    title: 'Configure',
    description: 'Platform adapted to your stages, status rules, and barcode format.',
  },
  {
    title: 'Deploy',
    description: 'Go live with trained operators and migrated data.',
  },
  {
    title: 'Optimize',
    description: 'Continuous tuning as your operation runs. Dedicated support.',
  },
]

export default function Tracker() {
  return (
    <PageLayout>
      <ProductHero
        label="AI Native Pipe Management"
        headline="Every pipe. Every stage. One system."
        subheadline="AI Native Pipe Management is work order-centric inventory management built for how coating facilities, pipe yards, and distributors actually operate."
      />

      {/* Problem section — dark navy */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center max-w-3xl mx-auto leading-tight">
              Your pipe tracking shouldn&apos;t require three systems and a spreadsheet.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {/* Card 1: Receiving */}
            <ScrollReveal delay={0}>
              <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full flex flex-col hover:border-slate-600 transition-colors">
                {/* Top visual mockup */}
                <div className="bg-slate-800 rounded-lg p-4 mb-5 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Clipboard className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Manual Tally</span>
                  </div>
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-green-400">✓</span> Pipe #2847 — 42.3 ft
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-green-400">✓</span> Pipe #2848 — 41.8 ft
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <span className="text-amber-400">?</span> Pipe #2849 — <span className="text-amber-400 italic">illegible</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">Receiving</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  Someone writes pipe numbers on a clipboard. Then types them into a spreadsheet. Then re-enters them somewhere else. Three entries for the same pipe — and every keystroke is a chance for error.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <span className="text-amber-400 text-sm font-semibold">~15 min per truck</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Processing */}
            <ScrollReveal delay={0.1}>
              <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full flex flex-col hover:border-slate-600 transition-colors">
                {/* Top visual mockup */}
                <div className="bg-slate-800 rounded-lg p-4 mb-5 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Status Check: WO-2025-003</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-col items-center gap-1">
                      <Monitor className="w-5 h-5 text-slate-500" />
                      <span className="text-[10px] text-slate-500">System</span>
                      <span className="text-[10px] text-amber-400">Pending</span>
                    </div>
                    <div className="w-4 h-px bg-slate-700 relative">
                      <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 text-red-400 text-[10px]">✕</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <ClipboardList className="w-5 h-5 text-slate-500" />
                      <span className="text-[10px] text-slate-500">Log</span>
                      <span className="text-[10px] text-green-400">Done</span>
                    </div>
                    <div className="w-4 h-px bg-slate-700 relative">
                      <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 text-red-400 text-[10px]">✕</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Phone className="w-5 h-5 text-slate-500" />
                      <span className="text-[10px] text-slate-500">Call</span>
                      <span className="text-[10px] text-slate-500">???</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">Processing</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  Where is WO-2025-003? It depends on who you ask. The blast crew says done. The coating log says pending. The actual pipe? Nobody checked.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <span className="text-amber-400 text-sm font-semibold">~3 phone calls per status check</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Shipping */}
            <ScrollReveal delay={0.2}>
              <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full flex flex-col hover:border-slate-600 transition-colors">
                {/* Top visual mockup */}
                <div className="bg-slate-800 rounded-lg p-4 mb-5 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <FileSpreadsheet className="w-5 h-5 text-slate-500" />
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Tally.xlsx</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-[10px]">
                    <div className="flex gap-2">
                      <span className="text-slate-500 w-16">H#A1B2C3</span>
                      <span className="text-slate-400">42.3 ft</span>
                      <span className="text-green-400/60">✓</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-red-400 w-16 line-through">H#A1B2C4</span>
                      <span className="text-slate-400">41.8 ft</span>
                      <span className="flex items-center gap-0.5">
                        <AlertCircle className="w-2.5 h-2.5 text-red-400" />
                        <span className="text-red-400">Mismatch</span>
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-500 w-16">H#A1B2C5</span>
                      <span className="text-amber-400">??? ft</span>
                      <span className="text-amber-400">Missing</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">Shipping</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  A hand-written tally gets typed into Excel. Then cross-referenced against inventory. Then cross-referenced against the BOL. One typo in a heat number means a documentation nightmare.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <span className="text-amber-400 text-sm font-semibold">~3 hours per shipment</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sound familiar? */}
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-14">
              <p className="text-white text-xl font-semibold mb-2">Sound familiar?</p>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Every hour your team spends on data entry is an hour they&apos;re not spending on operations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features walkthrough */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Features"
            title="Everything your facility needs"
          />
          <div className="space-y-20 mt-12">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <ScrollReveal
                  direction={i % 2 === 0 ? 'left' : 'right'}
                  className={i % 2 === 1 ? 'md:order-2' : ''}
                >
                  <Badge color="orange">{feature.badge}</Badge>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-text mt-3 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">{feature.description}</p>
                </ScrollReveal>

                <ScrollReveal
                  direction={i % 2 === 0 ? 'right' : 'left'}
                  delay={0.15}
                  className={i % 2 === 1 ? 'md:order-1' : ''}
                >
                  {feature.visual}
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks steps={howItWorks} accentColor="orange" />

      {/* Integration callout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-surface border border-border rounded-2xl p-8 md:p-12">
              <SectionHeading
                label="Integrations"
                title="Connects to your workflow"
                centered={false}
              />
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { text: 'Built on VLX for field-ready mobile inspections', image: vlxMark },
                  { text: 'Zebra thermal printer support for barcode labels', icon: Barcode },
                  { text: 'Export to PDF, Excel, or integrate via API', icon: FileDown },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                      {item.image ? (
                        <img src={item.image} alt="VLX" className="w-6 h-6 object-contain" />
                      ) : (
                        <item.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      )}
                    </div>
                    <p className="text-sm text-text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-alt dark:bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text dark:text-white mb-4">
              Start managing pipes the modern way
            </h2>
            <p className="text-text-muted mb-8">
              Custom-configured for your facility. Deployed in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:hello@octg.ai?subject=Demo%20Request" size="xl">
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="mailto:hello@octg.ai?subject=Consultation" variant="secondary" size="xl">
                Talk to Our Team
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  )
}
