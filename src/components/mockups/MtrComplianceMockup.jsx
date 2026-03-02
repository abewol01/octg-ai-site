export default function MtrComplianceMockup() {
  const params = [
    { name: 'Carbon (C)', value: '0.22%', min: 0, max: 0.28, actual: 0.22, status: 'pass' },
    { name: 'Yield Strength', value: '52,400 psi', min: 52000, max: 76000, actual: 52400, status: 'warning' },
    { name: 'Tensile Strength', value: '71,200 psi', min: 66000, max: 110000, actual: 71200, status: 'pass' },
    { name: 'Phosphorus (P)', value: '0.032%', min: 0, max: 0.025, actual: 0.032, status: 'fail' },
  ]

  const getStatusColor = (status) => {
    if (status === 'pass') return 'bg-success'
    if (status === 'warning') return 'bg-warning'
    return 'bg-danger'
  }

  const getBarPosition = (param) => {
    if (param.status === 'fail') return 105 // overshoot
    const range = param.max - param.min
    return Math.min(100, Math.max(0, ((param.actual - param.min) / range) * 100))
  }

  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-secondary" />
        <span className="text-xs font-medium text-text-muted">Compliance Results</span>
      </div>

      <div className="space-y-4">
        {params.map((param) => (
          <div key={param.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-text-muted">{param.name}</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-medium text-text">{param.value}</span>
                <div className={`w-2 h-2 rounded-full ${getStatusColor(param.status)}`} />
              </div>
            </div>

            {/* Range bar */}
            <div className="relative h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-visible">
              {/* Safe zone */}
              <div className="absolute inset-0 bg-slate-100 dark:bg-slate-700 rounded-full" />

              {/* Filled portion */}
              <div
                className={`absolute top-0 left-0 h-full rounded-full ${getStatusColor(param.status)}/30`}
                style={{ width: `${Math.min(100, getBarPosition(param))}%` }}
              />

              {/* Value marker */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${getStatusColor(param.status)} border-2 border-white dark:border-slate-900 shadow-sm`}
                style={{ left: `${Math.min(97, getBarPosition(param))}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
