import { Sparkles } from 'lucide-react'

export default function MtrClassificationMockup() {
  const pages = [
    { label: 'MTR', color: 'bg-[#E0E7FF] text-[#4338CA] dark:bg-indigo-900/30 dark:text-indigo-300', confidence: 98 },
    { label: 'MTR', color: 'bg-[#E0E7FF] text-[#4338CA] dark:bg-indigo-900/30 dark:text-indigo-300', confidence: 95 },
    { label: 'Tally', color: 'bg-[#DBEAFE] text-[#1D4ED8] dark:bg-blue-900/30 dark:text-blue-300', confidence: 97 },
    { label: 'Cover', color: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400', confidence: 92 },
    { label: 'MTR', color: 'bg-[#E0E7FF] text-[#4338CA] dark:bg-indigo-900/30 dark:text-indigo-300', confidence: 96 },
    { label: 'Other', color: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400', confidence: 88 },
  ]

  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-secondary" />
          <span className="text-xs font-medium text-text-muted">Page Classification</span>
        </div>
        <Sparkles className="w-3.5 h-3.5 text-secondary" />
      </div>

      {/* Page grid */}
      <div className="grid grid-cols-3 gap-2.5">
        {pages.map((page, i) => (
          <div key={i} className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-2">
            {/* Mini page thumbnail */}
            <div className="w-full h-10 bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-700 mb-2 p-1.5">
              <div className="w-full h-0.5 bg-slate-200 dark:bg-slate-700 rounded-full mb-1" />
              <div className="w-3/4 h-0.5 bg-slate-200 dark:bg-slate-700 rounded-full mb-1" />
              <div className="w-5/6 h-0.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
            </div>

            {/* Classification badge */}
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${page.color}`}>
              {page.label}
            </span>

            {/* Confidence */}
            <div className="flex items-center gap-1 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-success" />
              <span className="font-mono text-[9px] text-text-muted">{page.confidence}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
