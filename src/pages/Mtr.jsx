import {
  FileSearch, Database, Settings, ShieldCheck, Layers,
  Link2, ArrowRight, Check
} from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'
import ProductHero from '../components/products/ProductHero'
import HowItWorks from '../components/products/HowItWorks'
import SectionHeading from '../components/shared/SectionHeading'
import ScrollReveal from '../components/shared/ScrollReveal'
import Badge from '../components/shared/Badge'
import Button from '../components/shared/Button'
import MtrClassificationMockup from '../components/mockups/MtrClassificationMockup'
import MtrExtractionMockup from '../components/mockups/MtrExtractionMockup'
import MtrSpecsMockup from '../components/mockups/MtrSpecsMockup'
import MtrComplianceMockup from '../components/mockups/MtrComplianceMockup'
import MtrHeatVerificationMockup from '../components/mockups/MtrHeatVerificationMockup'
import MtrIntegrationMockup from '../components/mockups/MtrIntegrationMockup'

const features = [
  {
    badge: 'Processing',
    icon: FileSearch,
    title: 'AI reads MTRs like your best quality engineer',
    description: "Upload a stack of mixed PDFs — MTRs, tallies, cover sheets, all jumbled together. AI classifies every page with confidence scores. No pre-sorting required.",
    visual: <MtrClassificationMockup />,
  },
  {
    badge: 'Extraction',
    icon: Database,
    title: 'From scanned PDF to structured data',
    description: 'Chemical composition (C, Mn, P, S, Cr, Mo, V, Nb, Ti...), mechanical properties (yield strength, tensile strength, elongation, hardness), and pipe identification data — all extracted automatically.',
    visual: <MtrExtractionMockup />,
  },
  {
    badge: 'Specs',
    icon: Settings,
    title: 'Your specs. Your rules.',
    description: 'Pre-loaded with API 5L (Grade B through X65) and API 5CT (J55 through Q125) standards, PSL1 and PSL2. Add your own custom specs for project-specific requirements. Define min/max ranges, required parameters, and warning thresholds.',
    visual: <MtrSpecsMockup />,
  },
  {
    badge: 'Compliance',
    icon: ShieldCheck,
    title: 'Pass. Warning. Fail. For every parameter.',
    description: "Each extracted value is checked against the assigned spec. Results are parameter-level: carbon content pass, yield strength warning (within 10% of boundary), phosphorus fail (exceeds maximum). Visual range bars show exactly where each value falls.",
    visual: <MtrComplianceMockup />,
  },
  {
    badge: 'Verification',
    icon: Layers,
    title: "Compliance grouped by heat — because that's how MTRs work",
    description: "Results are organized by heat number. One heat can have 50 joints. Check the heat once, apply to all. Expandable views show every parameter with its extracted value, spec range, and result.",
    visual: <MtrHeatVerificationMockup />,
  },
  {
    badge: 'Integration',
    icon: Link2,
    title: 'Compliance records live on the pipe, not in a folder',
    description: 'When MTR.AI is used with AI Native Pipe Management, compliance status appears on every joint, every work order, and every pipe passport. No separate filing system needed.',
    visual: <MtrIntegrationMockup />,
  },
]

const howItWorks = [
  {
    title: 'Upload',
    description: 'Drop your PDF bundle (MTRs, tallies, anything). AI classifies and sorts every page.',
  },
  {
    title: 'Extract',
    description: 'AI pulls chemical and mechanical properties from each MTR page automatically.',
  },
  {
    title: 'Configure Specs',
    description: 'We load your project-specific specifications alongside API 5L & 5CT standards.',
  },
  {
    title: 'Verify',
    description: 'One-click compliance across all heats with your custom thresholds.',
  },
]

const specs = [
  'API 5L Grade B (PSL1, PSL2)',
  'API 5L X42 (PSL1, PSL2)',
  'API 5L X52 (PSL1, PSL2)',
  'API 5L X60 (PSL1)',
  'API 5L X65 (PSL1)',
  'API 5CT J55, K55, N80, L80 (PSL1, PSL2)',
  'API 5CT P110, Q125 (PSL1, PSL2)',
  'Custom specs: add your own project-specific requirements',
]

export default function Mtr() {
  return (
    <PageLayout>
      <ProductHero
        label="MTR.AI"
        headline="MTR compliance on autopilot."
        subheadline="Upload Mill Test Reports. AI extracts the data, checks it against API 5L, 5CT, and your custom specs, and flags anything out of range — in seconds, not hours."
        accentColor="text-secondary"
      />

      {/* Problem section */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Your quality team shouldn't be a human lookup table."
          />
          <div className="max-w-3xl mx-auto mt-8 space-y-4">
            <ScrollReveal>
              <div className="bg-surface border border-border rounded-xl p-6">
                <p className="text-text-muted leading-relaxed">
                  Every MTR that arrives gets manually reviewed: find the heat number, cross-reference the spec, check each parameter against the range, flag anything marginal.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-surface border border-border rounded-xl p-6">
                <p className="text-text-muted leading-relaxed">
                  It&apos;s tedious, error-prone, and doesn&apos;t scale. One missed parameter can mean non-conforming pipe in the field.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features walkthrough */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Features"
            title="AI-powered compliance, end to end"
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
                  <Badge color="indigo">{feature.badge}</Badge>
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

      <HowItWorks steps={howItWorks} accentColor="indigo" />

      {/* Specs list */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Standards"
            title="Specs included out of the box"
          />
          <ScrollReveal>
            <div className="max-w-2xl mx-auto mt-8 bg-surface border border-border rounded-2xl p-8">
              <ul className="space-y-3">
                {specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-text-muted">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-alt dark:bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text dark:text-white mb-4">
              Stop checking MTRs by hand
            </h2>
            <p className="text-text-muted mb-8">
              Configured around your workflow. Live in weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:hello@octg.ai?subject=Demo%20Request" size="xl">
                See MTR Compliance in Action
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
