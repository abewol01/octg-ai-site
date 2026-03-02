import { Sparkles } from 'lucide-react'

export default function MtrExtractionMockup() {
  const chemical = [
    { el: 'C', val: '0.22%' },
    { el: 'Mn', val: '1.15%' },
    { el: 'P', val: '0.012%' },
    { el: 'S', val: '0.003%' },
  ]

  const mechanical = [
    { prop: 'Yield', val: '52,400 psi' },
    { prop: 'Tensile', val: '71,200 psi' },
    { prop: 'Elongation', val: '32%' },
  ]

  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-secondary" />
          <span className="text-xs font-medium text-text-muted">Heat #H-84521 — Extracted Properties</span>
        </div>
        <Sparkles className="w-3.5 h-3.5 text-secondary" />
      </div>

      {/* Chemical Composition */}
      <div className="mb-4">
        <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">Chemical Composition</span>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {chemical.map((item) => (
            <div key={item.el} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-2 text-center">
              <span className="text-[10px] text-text-muted">{item.el}</span>
              <p className="font-mono text-xs font-semibold text-text">{item.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mechanical Properties */}
      <div>
        <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">Mechanical Properties</span>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {mechanical.map((item) => (
            <div key={item.prop} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-2 text-center">
              <span className="text-[10px] text-text-muted">{item.prop}</span>
              <p className="font-mono text-xs font-semibold text-text">{item.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
