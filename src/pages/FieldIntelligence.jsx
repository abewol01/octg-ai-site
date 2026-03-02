import { motion } from 'framer-motion'
import {
  ArrowRight, Check, ShieldCheck, Smartphone, Barcode,
  Camera, ClipboardList, RefreshCw, Lock,
  Package, CheckSquare, Truck, FileText, PieChart,
  Fingerprint, MapPin, Clock, UserCheck,
  Globe, Webhook, ArrowLeftRight, Download
} from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'
import SectionHeading from '../components/shared/SectionHeading'
import ScrollReveal from '../components/shared/ScrollReveal'
import Button from '../components/shared/Button'
import LifecycleTimeline from '../components/shared/LifecycleTimeline'

/* ───────────────────────────────────────────────────
   Section 1: Hero — Two-column with animated VLX hub
   ─────────────────────────────────────────────────── */

function HeroAnimation() {
  const nodes = [
    { label: 'INBOUND',  color: '#06b6d4', x: '18%', y: '12%',  icon: Package },
    { label: 'QC',       color: '#22c55e', x: '78%', y: '12%',  icon: CheckSquare },
    { label: 'TALLY',    color: '#eab308', x: '6%',  y: '50%',  icon: ClipboardList },
    { label: 'REPORTS',  color: '#3b82f6', x: '90%', y: '50%',  icon: PieChart },
    { label: 'BARCODE',  color: '#f97316', x: '18%', y: '88%',  icon: Barcode },
    { label: 'OUTBOUND', color: '#a855f7', x: '78%', y: '88%',  icon: Truck },
  ]

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        {nodes.map((node, i) => {
          const nx = parseFloat(node.x) / 100 * 400
          const ny = parseFloat(node.y) / 100 * 400
          return (
            <g key={node.label}>
              {/* Static line */}
              <line
                x1={200} y1={200} x2={nx} y2={ny}
                stroke="rgba(59,130,246,0.12)" strokeWidth="1.5"
              />
              {/* Animated dashed overlay */}
              <line
                x1={200} y1={200} x2={nx} y2={ny}
                stroke="rgba(59,130,246,0.3)" strokeWidth="1.5"
                strokeDasharray="6 10"
                className="vlx-dash-flow"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
            </g>
          )
        })}
      </svg>

      {/* Central Hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="vlx-hub-pulse w-[100px] h-[100px] rounded-full flex items-center justify-center">
          <div className="w-[72px] h-[72px] rounded-full bg-[#0B0F1A] border-2 border-blue-500/40 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.2)]">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Orbiting Nodes */}
      {nodes.map((node, i) => {
        const Icon = node.icon
        return (
          <div
            key={node.label}
            className="absolute z-10 vlx-node-float"
            style={{
              left: node.x,
              top: node.y,
              transform: 'translate(-50%, -50%)',
              animationDelay: `${i * 0.8}s`,
            }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-12 h-12 rounded-xl bg-[#141416] border border-white/[0.08] flex items-center justify-center"
                style={{ boxShadow: `0 0 20px ${node.color}15` }}
              >
                <Icon className="w-5 h-5" style={{ color: node.color }} />
              </div>
              <span className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
                {node.label}
              </span>
            </div>
          </div>
        )
      })}

      {/* Data Particles */}
      {nodes.map((node, i) => (
        <div
          key={`particle-${node.label}`}
          className="vlx-particle absolute w-1.5 h-1.5 rounded-full z-20"
          style={{
            backgroundColor: node.color,
            boxShadow: `0 0 8px ${node.color}`,
            left: node.x,
            top: node.y,
            '--target-x': '50%',
            '--target-y': '50%',
            '--start-x': node.x,
            '--start-y': node.y,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      {/* KYPiT Verified badge */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 vlx-kypit-pulse">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
          <Check className="w-3 h-3 text-green-400" />
          <span className="text-[11px] font-semibold text-green-400 uppercase tracking-wider">
            KYPiT Verified
          </span>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative bg-blueprint overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 vlx-badge-pulse" />
              <span className="text-xs font-semibold text-blue-400 tracking-wide">Powered by VLX</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-text leading-[1.1] mb-6"
            >
              Credible field evidence for <em className="not-italic text-blue-400">every</em> pipe<span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-xl"
            >
              VLX Field Intelligence is the verified data capture layer underneath every OCTG.AI product. From the moment a pipe arrives to the moment it ships — every inspection, scan, and reading is captured with tamper-proof evidence your clients can trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="mailto:hello@octg.ai?subject=VLX%20Demo%20Request" size="xl">
                See It In Action
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="secondary"
                size="xl"
                onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Capabilities
              </Button>
            </motion.div>
          </div>

          {/* Right — Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden md:block"
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 2: Trust Bar
   ─────────────────────────────────────────────────── */

const trustStats = [
  { value: '100%', label: 'Evidence traceability', sublabel: 'Every data point linked to source' },
  { value: '0', label: 'Manual re-entry required', sublabel: 'Data captured once at the pipe' },
  { value: '6', label: 'Inspection touchpoints', sublabel: 'Covered across the full lifecycle' },
  { value: '1', label: 'Unified evidence layer', sublabel: 'One platform connecting everything' },
]

function TrustBar() {
  return (
    <section className="py-16 bg-surface-alt border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustStats.map((stat) => (
            <ScrollReveal key={stat.label}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-extrabold text-text">
                  {stat.value}<span className="text-accent">.</span>
                </div>
                <div className="text-sm font-semibold text-text mt-2">{stat.label}</div>
                <div className="text-xs text-text-muted mt-1">{stat.sublabel}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 3: What Is It — Definition + Architecture
   ─────────────────────────────────────────────────── */

function WhatIsIt() {
  const layers = [
    { label: 'AI Native Pipe Management', color: '#f97316', icon: '🖥', dimmed: false },
    { label: 'MTR.AI', color: '#a855f7', icon: '📄', dimmed: false },
    { label: 'VLX Field Intelligence', color: '#3b82f6', icon: '🛡', highlighted: true },
    { label: 'VLX Platform (Cloud + Mobile + API)', color: '#3b82f6', icon: '🌐', dimmed: true },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                <span className="w-6 h-px bg-accent inline-block" />
                WHAT IS IT
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text leading-tight mb-6">
                The intelligence layer your management software stands on.
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Every OCTG.AI product depends on one thing: credible, structured data from the field. VLX Field Intelligence is how that data gets captured, verified, and connected.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-text-muted leading-relaxed mb-4">
                Your operators are already walking the yard, checking pipes, reading gauges, scanning barcodes. VLX Field Intelligence turns those actions into structured, verified, tamper-proof digital evidence — automatically.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-muted leading-relaxed mb-4">
                Instead of scribbling on clipboards or typing into spreadsheets at the end of a shift, inspectors capture data in real-time through purpose-built templates on the VLX mobile app. Every photo is geotagged and timestamped. Every reading is tied to a specific pipe. Every inspection is auditable.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-text-muted leading-relaxed">
                This is the layer that makes AI Native Pipe Management and MTR.AI possible. Without verified field data flowing in, management software is just a prettier spreadsheet.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — Architecture stack */}
          <ScrollReveal direction="right">
            <div className="space-y-3">
              {layers.map((layer, i) => (
                <div key={layer.label}>
                  <div
                    className={`relative rounded-xl p-5 border transition-all ${
                      layer.highlighted
                        ? 'bg-blue-500/10 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                        : layer.dimmed
                          ? 'bg-surface border-border opacity-50'
                          : 'bg-surface border-border'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{layer.icon}</span>
                      <span className={`font-semibold text-sm ${layer.highlighted ? 'text-blue-400' : 'text-text'}`}>
                        {layer.label}
                      </span>
                    </div>
                  </div>
                  {i < layers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <span className="text-[10px] text-text-muted tracking-wider uppercase">
                        {layer.highlighted ? 'powered by' : 'depends on'}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 5: Capabilities Grid (6 cards)
   ─────────────────────────────────────────────────── */

const capabilities = [
  {
    icon: Smartphone,
    title: 'Mobile Field Inspections',
    description: 'Custom inspection templates deployed to iOS and Android. Offline-capable. Operators fill in structured forms with dropdowns, numeric fields, barcode scans, and photo capture — no training required.',
    tags: ['Templates', 'Offline', 'iOS/Android'],
    color: '#06b6d4',
  },
  {
    icon: Barcode,
    title: 'Barcode Scanning & Generation',
    description: 'Generate unique barcodes per joint at the final bench. Scan at load out to build manifests automatically. Barcode encodes Work Order / Heat-Lot / Length / Sequence — all parseable fields.',
    tags: ['Code128', 'ZPL', 'Zebra Printers'],
    color: '#f97316',
  },
  {
    icon: Camera,
    title: 'Photo & Media Evidence',
    description: 'Every photo is geotagged with GPS coordinates, timestamped to the second, and linked to the specific pipe record. Photos are stored in the cloud and accessible from any device.',
    tags: ['Geotagged', 'Timestamped', 'Cloud Storage'],
    color: '#22c55e',
  },
  {
    icon: ClipboardList,
    title: 'Automated Tallies',
    description: 'Replace hand-tallied joint counts with digital tallies that auto-reconcile against expected deliveries. Discrepancies flagged instantly. Tally data flows directly into inventory.',
    tags: ['Auto-reconcile', 'Digital', 'Real-time'],
    color: '#eab308',
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Sync',
    description: 'Inspection data syncs bidirectionally between VLX and the management system via webhooks and API. No batch uploads. No end-of-day data dumps. Changes propagate in seconds.',
    tags: ['Webhooks', 'REST API', 'Bidirectional'],
    color: '#a855f7',
  },
  {
    icon: Lock,
    title: 'Audit Trail & Compliance',
    description: 'Every data point has a complete chain of custody: who captured it, when, where, on what device. Immutable activity logs for regulatory compliance and client audits.',
    tags: ['Immutable Logs', 'Chain of Custody', 'Export'],
    color: '#3b82f6',
  },
]

function Capabilities() {
  return (
    <section id="capabilities" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Capabilities"
          title="What VLX Field Intelligence captures."
          description="Purpose-built inspection templates for every stage of pipe coating operations. Built around API RP 5A5, DS-1, and client-specific requirements."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <ScrollReveal key={cap.title} delay={i * 0.06}>
                <div className="group bg-surface border border-border rounded-2xl p-6 h-full flex flex-col hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/40 transition-all duration-200"
                  style={{ borderTopColor: cap.color, borderTopWidth: '2px' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${cap.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cap.color }} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-text mb-2">{cap.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed flex-1">{cap.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase"
                        style={{ backgroundColor: `${cap.color}12`, color: cap.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 6: Evidence Types — Deep Dive (4 cards)
   ─────────────────────────────────────────────────── */

const inspectionTypes = [
  {
    title: 'Inbound Inspection',
    subtitle: 'Verify what arrives matches what was promised.',
    description: "When a truck rolls in, operators scan or enter pipe details against the advance PDF tally from the client. VLX captures joint-by-joint condition, counts by heat/lot number, and flags any discrepancies — damaged joints, missing pieces, or MTR mismatches. The inbound inspection creates the digital birth certificate for every joint entering your facility.",
    features: [
      'Joint count reconciliation against advance tallies',
      'Damage documentation with geotagged photos',
      'Heat/lot number verification and MTR attachment',
      'Automatic inventory record creation on completion',
    ],
  },
  {
    title: 'Coating & QC Inspection',
    subtitle: 'Every reading. Every joint. Every time.',
    description: 'At the final bench, operators record mill thickness readings, coating measurements, and quality observations per joint. VLX templates enforce data completeness — required fields, valid ranges, conditional logic. No more missed readings or impossible values slipping through. Each joint gets a pass/fail determination backed by actual measurements.',
    features: [
      'Mill thickness and DFT readings with validation',
      'Pass / Fail / Conditional status per joint',
      'Damage and defect documentation with photos',
      'Barcode generation triggered on QC completion',
    ],
  },
  {
    title: 'Load Out & Shipping',
    subtitle: 'Scan it. Ship it. Prove it.',
    description: "During load out, operators scan each joint's barcode as it's loaded onto the truck. VLX records exactly which joints went on which truck, who loaded them, and when. The system auto-generates shipping manifests and BOLs with every field your client needs — no manual spreadsheet assembly. Truck ID and inspector signature all captured digitally.",
    features: [
      'Per-joint barcode scanning during loading',
      'Automated manifest generation (CSV export)',
      'Bill of lading and truck assignment tracking',
      'Inspector signature capture and verification',
    ],
  },
  {
    title: 'Pipe Passport & Reporting',
    subtitle: 'The complete story of every joint. One click.',
    description: "Every joint gets a Pipe Passport — a comprehensive PDF that tells its complete story: where it came from, what was done to it, who inspected it, and what the results were. Mill Test Reports, coating readings, inspection photos, and chain of custody — all in one document your client can trust. Generated automatically from VLX evidence.",
    features: [
      'Full lifecycle traceability per joint',
      'MTR attachment and compliance verification',
      'Auto-generated PDF with all inspection evidence',
      'Shareable link for client-side verification',
    ],
  },
]

function EvidenceTypes() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Inspection Types"
          title="Built for every inspection your facility runs."
          description="Not a generic checklist tool. Purpose-built templates for OCTG coating operations."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {inspectionTypes.map((type, i) => (
            <ScrollReveal key={type.title} delay={i * 0.08}>
              <div className="bg-surface border border-border rounded-2xl p-8 h-full flex flex-col hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/40 transition-all duration-200">
                <h3 className="font-display text-xl font-bold text-text mb-1">{type.title}</h3>
                <p className="text-sm text-blue-400 font-medium mb-4">{type.subtitle}</p>
                <p className="text-sm text-text-muted leading-relaxed mb-6">{type.description}</p>
                <ul className="space-y-2.5 mt-auto">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 7: Integration Architecture
   ─────────────────────────────────────────────────── */

const integrationMethods = [
  {
    icon: Globe,
    title: 'REST API',
    description: 'Pull inspection data, templates, and reports programmatically. Full CRUD on inspections.',
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    description: 'Real-time push notifications when inspections are completed or status changes. inspection.status.completed fires the moment a field inspector submits.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Bidirectional Sync',
    description: 'Management software creates work orders → VLX creates matching inspections. Field data flows back automatically.',
  },
  {
    icon: Download,
    title: 'CSV/PDF Export',
    description: 'One-click manifests, tallies, and pipe passports. Compatible with any system that accepts spreadsheets.',
  },
]

function Integration() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Integration"
          title="Connects to everything. Replaces nothing."
          description="VLX Field Intelligence works alongside your existing systems — feeding credible data into management software, ERP, and client portals."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
          {/* Left — methods */}
          <div className="space-y-6">
            {integrationMethods.map((method, i) => {
              const Icon = method.icon
              return (
                <ScrollReveal key={method.title} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-text mb-1">{method.title}</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{method.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Right — code block */}
          <ScrollReveal direction="right">
            <div className="rounded-xl overflow-hidden border border-border">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border-b border-white/[0.06]">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-3 text-xs text-zinc-500 font-mono">webhook-payload.json</span>
              </div>
              {/* Code */}
              <pre className="p-5 bg-[#0f0f1a] text-sm leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-zinc-500">{'// When an inspection completes in the field...'}</span>{'\n'}
                  {'{'}{'\n'}
                  {'  '}<span className="text-cyan-400">&quot;event&quot;</span>: <span className="text-green-400">&quot;inspection.status.completed&quot;</span>,{'\n'}
                  {'  '}<span className="text-cyan-400">&quot;timestamp&quot;</span>: <span className="text-green-400">&quot;2025-03-15T14:32:00Z&quot;</span>,{'\n'}
                  {'  '}<span className="text-cyan-400">&quot;data&quot;</span>: {'{'}{'\n'}
                  {'    '}<span className="text-cyan-400">&quot;type&quot;</span>: <span className="text-green-400">&quot;inspection&quot;</span>,{'\n'}
                  {'    '}<span className="text-cyan-400">&quot;template&quot;</span>: <span className="text-green-400">&quot;Load Out - WO-2025-003&quot;</span>,{'\n'}
                  {'    '}<span className="text-cyan-400">&quot;pipes_scanned&quot;</span>: <span className="text-purple-400">42</span>,{'\n'}
                  {'    '}<span className="text-cyan-400">&quot;inspector&quot;</span>: <span className="text-green-400">&quot;jose@lsp.com&quot;</span>,{'\n'}
                  {'    '}<span className="text-cyan-400">&quot;truck&quot;</span>: <span className="text-green-400">&quot;T-1847&quot;</span>,{'\n'}
                  {'    '}<span className="text-cyan-400">&quot;status&quot;</span>: <span className="text-green-400">&quot;completed&quot;</span>{'\n'}
                  {'  }'}{'\n'}
                  {'}'}{'\n'}
                  <span className="text-zinc-500">{'// → Management system auto-updates'}</span>{'\n'}
                  <span className="text-zinc-500">{'//   inventory, generates manifest'}</span>
                </code>
              </pre>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 8: KYPiT — Verified Evidence
   ─────────────────────────────────────────────────── */

const kypitChecks = [
  { label: 'Timestamp Validation', detail: 'Captured: 2025-03-15 14:32:07 UTC' },
  { label: 'Geolocation Verified', detail: '29.7604° N, 95.3698° W (Houston)' },
  { label: 'Device Authentication', detail: 'iPhone 15 Pro · iOS 18.2' },
  { label: 'Photo Integrity', detail: 'Original · No modifications' },
  { label: 'Inspector Identity', detail: 'José Martinez · LSP-Houston' },
  { label: 'Chain of Custody', detail: '3 handoffs · All verified' },
]

const kypitFeatures = [
  {
    icon: Fingerprint,
    title: 'Tamper Detection',
    description: 'Every photo and data point is hashed at capture time. Any modification after the fact is detected and flagged. Your clients see authentic evidence, not edited screenshots.',
  },
  {
    icon: MapPin,
    title: 'Geolocation Proof',
    description: "GPS coordinates are embedded in every capture. Verify that the inspection actually happened at your facility, not in someone's office.",
  },
  {
    icon: Clock,
    title: 'Time Verification',
    description: 'Timestamps are server-validated, not device-set. Proves exactly when data was captured — critical for coating cure time verification and regulatory compliance.',
  },
  {
    icon: UserCheck,
    title: 'Identity Chain',
    description: 'Every action is tied to a verified user account. Know exactly who captured, reviewed, and approved each piece of evidence.',
  },
]

function KYPiT() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="KYPiT Verification"
          title="Evidence your clients can verify independently."
          description="KYPiT is VLX's proprietary metadata validation layer. It proves when, where, and how every piece of evidence was captured — and that it hasn't been tampered with."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
          {/* Left — verification visual */}
          <ScrollReveal>
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <span className="font-display font-bold text-text">KYPiT Evidence Verification</span>
              </div>
              <div className="space-y-5">
                {kypitChecks.map((check) => (
                  <div key={check.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text">{check.label}</div>
                      <div className="text-xs text-text-muted font-mono mt-0.5">{check.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — features */}
          <div className="space-y-6">
            {kypitFeatures.map((feature, i) => {
              const Icon = feature.icon
              return (
                <ScrollReveal key={feature.title} delay={i * 0.08} direction="right">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-text mb-1">{feature.title}</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 9: CTA
   ─────────────────────────────────────────────────── */

function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
            See the evidence layer in action<span className="text-accent">.</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Book a 20-minute demo and we&apos;ll show you how VLX Field Intelligence captures verified data across your entire facility — and how it flows into AI Native Pipe Management automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="mailto:hello@octg.ai?subject=VLX%20Demo%20Request" size="xl">
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="mailto:hello@octg.ai?subject=VLX%20Consultation" variant="secondary" size="xl">
              Talk to Our Team
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Page Component
   ─────────────────────────────────────────────────── */

export default function FieldIntelligence() {
  return (
    <PageLayout>
      <Hero />
      <TrustBar />
      <WhatIsIt />
      <LifecycleTimeline />
      <Capabilities />
      <EvidenceTypes />
      <Integration />
      <KYPiT />
      <CtaSection />
    </PageLayout>
  )
}
