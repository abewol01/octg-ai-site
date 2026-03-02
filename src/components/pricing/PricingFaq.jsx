import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import ScrollReveal from '../shared/ScrollReveal'

const faqs = [
  {
    q: 'How long does deployment take?',
    a: "Most facilities are fully operational in 4-8 weeks from kickoff. The timeline depends on your workflow complexity, integration requirements, and team availability for training.",
  },
  {
    q: 'What does it cost?',
    a: "Pricing is based on your facility's scale, number of operators, and the capabilities you need. Every deployment is scoped individually after a discovery call. We'll give you a clear proposal — no hidden fees.",
  },
  {
    q: 'Can we start with just inventory tracking or just MTR compliance?',
    a: 'Yes. The platform is modular. Many clients start with the capability that solves their biggest pain point and expand from there. Each module works standalone or together.',
  },
  {
    q: 'Do we need to replace our current systems?',
    a: "No. OCTG.AI is designed to complement your existing workflows. We integrate with your current documentation processes and can run alongside your existing systems during transition.",
  },
  {
    q: 'What about VLX — is that separate?',
    a: 'VLX mobile inspection access is included in every deployment. We configure VLX templates specifically for your QC workflow and handle all the integration setup.',
  },
  {
    q: 'Do you support multiple facilities?',
    a: 'Yes. Each facility gets its own configuration while sharing centralized compliance specs, customer data, and reporting. Multi-site visibility is built in.',
  },
  {
    q: 'What kind of support do we get?',
    a: 'Every deployment includes a dedicated point of contact, priority support with direct access (not a ticket queue), and quarterly reviews to optimize your workflows.',
  },
  {
    q: 'Is our data secure?',
    a: 'Your deployment runs on AWS infrastructure with AES-256 encryption, TLS in transit, and role-based access controls. Multi-tenant data isolation ensures your data is completely separate. SOC 2 compliant infrastructure via VLX.',
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
                <span className="font-semibold text-sm text-text pr-4">{faq.q}</span>
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
