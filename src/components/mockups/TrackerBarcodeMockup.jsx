export default function TrackerBarcodeMockup() {
  // Generate pseudo-barcode bar pattern
  const bars = [
    3,1,1,2,3,1,2,1,1,3,2,1,1,2,1,3,1,1,2,3,1,2,1,1,1,3,2,1,1,2,3,1,1,2,1,1,3,1,2,1,2,3,1,1,2,1,3,1,2
  ]

  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-success" />
        <span className="text-xs font-medium text-text-muted">Barcode Labels</span>
      </div>

      {/* Stacked labels */}
      <div className="relative mx-auto w-full max-w-[260px] h-[140px]">
        {/* Background label 2 */}
        <div className="absolute top-0 left-3 right-0 bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-md p-3 h-[120px]" />
        {/* Background label 1 */}
        <div className="absolute top-2 left-1.5 right-1.5 bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-md p-3 h-[120px]" />
        {/* Front label */}
        <div className="absolute top-4 left-0 right-3 bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-md p-3 h-[120px]">
          <div className="text-[8px] font-semibold text-text-muted tracking-wider mb-2">OCTG.AI</div>

          {/* Barcode bars */}
          <div className="flex items-end justify-center gap-[1px] h-10 mb-1.5">
            {bars.map((w, i) => (
              <div
                key={i}
                className={`${i % 2 === 0 ? 'bg-slate-800 dark:bg-slate-200' : 'bg-transparent'} h-full`}
                style={{ width: `${w}px` }}
              />
            ))}
          </div>

          {/* Barcode text */}
          <div className="font-mono text-[9px] text-text-muted text-center tracking-wide">
            WO-2025-003 / 40.2 / 001 / H-98765
          </div>
        </div>
      </div>
    </div>
  )
}
