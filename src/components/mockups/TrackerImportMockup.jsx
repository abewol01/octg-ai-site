import { Check } from 'lucide-react'

export default function TrackerImportMockup() {
  const headers = ['WO', 'Heat #', 'OD', 'Wall', 'Length']
  const rows = [
    ['WO-2025-012', 'H-84521', '16"', '0.375"', "40.2'"],
    ['WO-2025-012', 'H-84522', '16"', '0.375"', "40.1'"],
    ['WO-2025-012', 'H-84523', '16"', '0.375"', "39.8'"],
    ['WO-2025-012', 'H-84524', '16"', '0.375"', "40.0'"],
  ]

  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-success" />
        <span className="text-xs font-medium text-text-muted">Import Preview</span>
      </div>

      {/* Column mapping indicators */}
      <div className="flex gap-1 mb-2 px-1">
        {headers.map((h) => (
          <div key={h} className="flex-1 flex flex-col items-center">
            <span className="text-[9px] text-accent font-medium mb-0.5">{h}</span>
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-accent" />
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="border border-border rounded-lg overflow-hidden">
        {/* Header row */}
        <div className="grid grid-cols-5 bg-slate-50 dark:bg-slate-800/50 border-b border-border">
          {headers.map((h) => (
            <div key={h} className="px-2 py-1.5 text-[10px] font-semibold text-text-muted">
              {h}
            </div>
          ))}
        </div>

        {/* Data rows */}
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-5 border-b border-border last:border-0">
            {row.map((cell, j) => (
              <div key={j} className="px-2 py-1.5 font-mono text-[10px] text-text truncate">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Success badge */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center">
          <Check className="w-2.5 h-2.5 text-white" />
        </div>
        <span className="text-xs font-semibold text-success">247 pipes imported</span>
      </div>
    </div>
  )
}
