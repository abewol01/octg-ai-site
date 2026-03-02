export default function MtrSpecsMockup() {
  const params = [
    { name: 'Carbon (C)', range: 'max 0.28%', custom: false },
    { name: 'Manganese (Mn)', range: 'max 1.40%', custom: false },
    { name: 'Yield Strength', range: '52,000 – 76,000 psi', custom: false },
    { name: 'Tensile Strength', range: '66,000 – 110,000 psi', custom: true },
  ]

  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-secondary" />
        <span className="text-xs font-medium text-text-muted">Spec Definition</span>
      </div>

      {/* Spec selector */}
      <div className="flex items-center gap-1 mb-4">
        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
          API 5L
        </span>
        <span className="text-[11px] font-medium px-2.5 py-1 rounded-full text-text-muted">
          Custom
        </span>
      </div>

      {/* Spec title */}
      <h4 className="font-display text-sm font-bold text-text mb-3">API 5L X52 PSL2</h4>

      {/* Parameters */}
      <div className="space-y-2.5">
        {params.map((param) => (
          <div key={param.name} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
            <span className="text-xs text-text-muted">{param.name}</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-medium text-text">{param.range}</span>
              {param.custom && (
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                  Custom
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
