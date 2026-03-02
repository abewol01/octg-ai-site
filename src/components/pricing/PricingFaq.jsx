import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import ScrollReveal from '../shared/ScrollReveal'

const faqs = [
  {
    q: 'What counts as an "active pipe"?',
    a: "Any pipe record in your system that hasn't been archived. Shipped pipes that are more than 90 days old are automatically archived and don't count toward your limit. You can access archived data anytime.",
  },
  {
    q: 'What happens if I exceed my MTR page limit?',
    a: "You'll get a notification when you reach 80% of your monthly limit. If you exceed it, additional pages are processed at $0.50/page, billed at the end of your billing cycle. No service interruption.",
  },
  {
    q: 'Can I switch between plans?',
    a: 'Yes. Upgrade anytime — changes take effect immediately. Downgrade at the end of your billing cycle. All data is preserved when moving between plans.',
  },
  {
    q: 'Is VLX included or separate?',
    a: 'VLX mobile inspection access is included in every OCTG.AI plan. Each plan includes a set number of VLX seats (team members who can use the mobile app for field inspections). Additional seats can be added for $49/user/month.',
  },
  {
    q: 'Do you offer discounts for annual billing?',
    a: 'Yes. Annual billing saves 17% (equivalent to 2 months free). All annual plans are billed upfront.',
  },
  {
    q: 'What does the free trial include?',
    a: 'The 14-day trial gives you access to Professional-tier features with usage limits (500 pipes, 50 MTR pages, 25 compliance checks). No credit card required. At the end of the trial, your account becomes read-only — upgrade to any paid plan to continue. All data is preserved.',
  },
  {
    q: 'Can I use MTR.AI without the inventory tracker?',
    a: 'Yes. MTR.AI is available as a standalone product. You can upload MTRs, run compliance checks, and manage specs without using the inventory tracking features. If you decide to add tracking later, your MTR data carries over seamlessly.',
  },
  {
    q: 'What compliance standards are supported?',
    a: "OCTG.AI ships with API 5L specs pre-loaded (Grade B, X42, X52, X60, X65 — both PSL1 and PSL2). Professional and Enterprise tiers can create custom specs for any standard (API 5CT, ASTM, project-specific requirements). We're continuously adding more industry standards.",
  },
  {
    q: 'How is my data secured?',
    a: 'OCTG.AI runs on AWS infrastructure with AES-256 encryption at rest, TLS in transit, and role-based access controls. Multi-tenant data isolation ensures your data is completely separate from other organizations. VLX maintains SOC 2 compliant infrastructure.',
  },
  {
    q: 'Can I import data from my current system?',
    a: "Yes. OCTG.AI supports Excel/CSV import with auto-column-mapping, and AI-powered PDF import for scanned documents. If you're migrating from TDS or another pipe tracking system, our onboarding team can help with bulk data migration (available on Professional and Enterprise plans).",
  },
  {
    q: 'Do you support multiple facilities?',
    a: 'The Enterprise plan supports unlimited facilities with centralized management. Each facility can have its own team members, work orders, and storage zones while sharing specs, compliance data, and reporting at the organization level.',
  },
  {
    q: 'What barcode printers are supported?',
    a: 'OCTG.AI generates ZPL output compatible with Zebra thermal printers (the industry standard for pipe labels). Any Zebra printer that accepts ZPL commands will work. Code 128 barcode format.',
  },
  {
    q: 'Is there an API?',
    a: 'API access is available on the Enterprise plan. The REST API supports pipe CRUD operations, work order management, compliance queries, and export generation. Documentation provided upon request.',
  },
]

export default function PricingFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="mt-20">
      <SectionHeading title="Frequently asked questions" />

      <div className="max-w-3xl mx-auto mt-8 space-y-2">
        {faqs.map((faq, i) => (
          <ScrollReveal key={faq.q} delay={Math.min(i * 0.03, 0.3)}>
            <div className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-alt transition-colors cursor-pointer"
              >
                <span className="font-semibold text-sm text-primary pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-text-muted leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
