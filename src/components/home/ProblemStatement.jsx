import { ClipboardList, Unplug, EyeOff } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import ScrollReveal from '../shared/ScrollReveal'
import Card from '../shared/Card'

const painPoints = [
  {
    icon: ClipboardList,
    title: 'Data entry at every stage',
    text: "Operators manually type heat numbers, mill readings, and pipe specs at the final bench. Then again at load out. Then again into a spreadsheet. Every keystroke is a chance for error.",
  },
  {
    icon: Unplug,
    title: 'Tallies ≠ inventory ≠ compliance',
    text: "Your shipping tally is a PDF. Your inventory is a spreadsheet. Your MTRs are in a filing cabinet. Nothing talks to anything else. Finding a heat number means opening four systems.",
  },
  {
    icon: EyeOff,
    title: 'Zero end-to-end traceability',
    text: "When a client asks 'where is my pipe?' — you're making phone calls and checking clipboards. There's no single system tracking a pipe from arrival through coating to the truck.",
  },
]

export default function ProblemStatement() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="The Problem"
          title="The industry's dirty secret"
          description="The oil and gas pipe supply chain still runs on the same tools it used 20 years ago. Manual tallies. Disconnected spreadsheets. Software that looks — and works — like it's from 2002."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {painPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.1}>
              <Card className="h-full">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-danger" />
                </div>
                <h3 className="font-display text-lg font-bold text-text mb-2">{point.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{point.text}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-lg text-text-muted mt-12 max-w-3xl mx-auto leading-relaxed">
            Every hour your team spends on data entry is an hour they&apos;re not spending on operations. OCTG.AI eliminates the re-entry, connects the systems, and gives you full visibility — automatically.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
