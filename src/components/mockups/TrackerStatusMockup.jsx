export default function TrackerStatusMockup() {
  const stages = [
    { label: 'Receiving', color: 'bg-blue-400', textColor: 'text-blue-700 dark:text-blue-300' },
    { label: 'Processing', color: 'bg-amber-400', textColor: 'text-amber-700 dark:text-amber-300' },
    { label: 'QC', color: 'bg-cyan-400', textColor: 'text-cyan-700 dark:text-cyan-300' },
    { label: 'Ready', color: 'bg-purple-400', textColor: 'text-purple-700 dark:text-purple-300' },
    { label: 'Loading', color: 'bg-orange-400', textColor: 'text-orange-700 dark:text-orange-300' },
    { label: 'Shipped', color: 'bg-green-400', textColor: 'text-green-700 dark:text-green-300' },
  ]

  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-2 rounded-full bg-success" />
        <span className="text-xs font-medium text-text-muted">Status Pipeline</span>
      </div>

      {/* Pipeline */}
      <div className="relative flex items-center justify-between mb-6 px-1">
        {/* Connector line */}
        <div className="absolute top-3 left-4 right-4 h-0.5 bg-slate-200 dark:bg-slate-700" />
        {/* Animated pulse */}
        <div className="absolute top-2 left-4 w-2 h-2 rounded-full bg-accent animate-[pipeline_3s_ease-in-out_infinite]" />

        {stages.map((stage) => (
          <div key={stage.label} className="relative flex flex-col items-center gap-1.5 z-10">
            <div className={`w-6 h-6 rounded-full ${stage.color} border-2 border-white dark:border-slate-900 shadow-sm`} />
            <span className={`text-[10px] font-medium ${stage.textColor}`}>{stage.label}</span>
          </div>
        ))}
      </div>

      {/* WO transition row */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 flex items-center justify-between">
        <span className="font-mono text-sm font-semibold text-text">WO-2025-007</span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            Processing
          </span>
          <span className="text-text-muted text-xs">&rarr;</span>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            Ready to Ship
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pipeline {
          0% { left: 1rem; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: calc(100% - 1rem); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
