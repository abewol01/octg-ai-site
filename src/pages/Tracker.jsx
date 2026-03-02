import {
  LayoutDashboard, RefreshCw, Upload, Barcode, Scan,
  FileDown, Map, AlertTriangle, ArrowRight, Check
} from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'
import ProductHero from '../components/products/ProductHero'
import HowItWorks from '../components/products/HowItWorks'
import SectionHeading from '../components/shared/SectionHeading'
import ScrollReveal from '../components/shared/ScrollReveal'
import Badge from '../components/shared/Badge'
import Button from '../components/shared/Button'

const features = [
  {
    badge: 'Dashboard',
    icon: LayoutDashboard,
    title: 'Operations Center — not just a pipe list',
    description: "See what's receiving today, what needs attention, and what's ready to ship. Your dashboard is organized around work orders — because that's how you think about your day.",
  },
  {
    badge: 'Status',
    icon: RefreshCw,
    title: 'Status that updates itself',
    description: "Pipe status flows automatically from receiving through processing, QC, and shipping. Work order status is derived from pipe states — when all pipes are shipped, the WO is shipped. No manual clicks.",
  },
  {
    badge: 'Import',
    icon: Upload,
    title: 'Get pipes into the system in minutes, not hours',
    description: "Upload an Excel manifest — columns auto-map to pipe fields. Or upload a client's PDF bundle and let AI classify and extract pipe data. Pipes arrive in the system before the truck arrives at your gate.",
  },
  {
    badge: 'Barcode',
    icon: Barcode,
    title: 'Print. Stick. Scan. Done.',
    description: 'Generate unique barcodes for every pipe at the final bench. Print directly to Zebra thermal printers. Each barcode encodes the work order, heat number, length, and sequence number.',
  },
  {
    badge: 'Field',
    icon: Scan,
    title: 'Mobile inspections that actually connect to your inventory',
    description: "VLX-powered inspections at inbound, post-coating, and outbound. Scan a barcode — inspection data syncs to the pipe's digital record. No manual data transfer ever.",
  },
  {
    badge: 'Export',
    icon: FileDown,
    title: 'One click. Complete documentation.',
    description: 'Generate shipping manifests (PDF), tally spreadsheets (Excel), or full product passports (PDF with cover, tally, MTRs, and inspection reports). Your clients get a professional documentation package.',
  },
  {
    badge: 'Mapping',
    icon: Map,
    title: 'Satellite view of every pipe in your yard',
    description: 'Mapbox-powered satellite map with custom storage zones. See capacity utilization at a glance. Know exactly where pipes are staged.',
  },
]

const howItWorks = [
  {
    title: 'Import',
    description: 'Upload manifests (Excel or PDF). Pipes are created with work order, heat, and spec data.',
  },
  {
    title: 'Track',
    description: 'Pipes flow through your workflow. Status updates automatically via VLX scans or manual progression.',
  },
  {
    title: 'Ship',
    description: 'Generate barcodes, scan at load out, export manifests. Full documentation in one click.',
  },
  {
    title: 'Verify',
    description: 'Digital product passports combine everything: inventory data, inspection reports, MTRs, compliance records.',
  },
]

export default function Tracker() {
  return (
    <PageLayout>
      <ProductHero
        label="OCTG Tracker"
        headline="Every pipe. Every stage. One system."
        subheadline="OCTG Tracker is work order-centric inventory management built for how coating facilities, pipe yards, and distributors actually operate."
      />

      {/* Problem section */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Your pipe tracking shouldn't require three systems and a spreadsheet."
          />
          <div className="max-w-3xl mx-auto mt-8 space-y-4">
            {[
              'Receiving: someone writes pipe numbers on a clipboard',
              "Processing: status lives in someone's head",
              'Shipping: a hand-written tally gets typed into Excel, then cross-referenced against inventory',
            ].map((pain, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-3 bg-white border border-border rounded-xl p-5">
                  <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                  <p className="text-text-muted text-sm">{pain}</p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.3}>
              <p className="text-center text-lg font-semibold text-primary pt-4">Sound familiar?</p>
            </ScrollReveal>
          </div>
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
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mt-3 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">{feature.description}</p>
                </ScrollReveal>

                <ScrollReveal
                  direction={i % 2 === 0 ? 'right' : 'left'}
                  delay={0.15}
                  className={i % 2 === 1 ? 'md:order-1' : ''}
                >
                  <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                    <div className="w-full h-48 rounded-lg bg-orange-50 flex items-center justify-center">
                      <feature.icon className="w-12 h-12 text-accent" />
                    </div>
                  </div>
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
            <div className="bg-white border border-border rounded-2xl p-8 md:p-12">
              <SectionHeading
                label="Integrations"
                title="Connects to your workflow"
                centered={false}
              />
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { text: 'Built on VLX for field-ready mobile inspections', icon: Scan },
                  { text: 'Zebra thermal printer support for barcode labels', icon: Barcode },
                  { text: 'Export to PDF, Excel, or integrate via API', icon: FileDown },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
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
      <section className="py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Start tracking pipes the modern way
            </h2>
            <p className="text-slate-300 mb-8">
              14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://app.octg.ai/signup" size="xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button to="/pricing" variant="secondary" size="xl" className="!border-slate-600 !text-white hover:!bg-slate-800">
                See Pricing
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  )
}
