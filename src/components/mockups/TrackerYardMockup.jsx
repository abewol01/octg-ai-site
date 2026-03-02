export default function TrackerYardMockup() {
  const zones = [
    { label: 'Zone A', pct: '85%', color: 'bg-blue-200 dark:bg-blue-900/40', borderColor: 'border-blue-300 dark:border-blue-800', textColor: 'text-blue-700 dark:text-blue-300', w: 'col-span-2 row-span-2', pipes: 3 },
    { label: 'Zone B', pct: '42%', color: 'bg-green-200 dark:bg-green-900/40', borderColor: 'border-green-300 dark:border-green-800', textColor: 'text-green-700 dark:text-green-300', w: 'col-span-1 row-span-2', pipes: 1 },
    { label: 'Zone C', pct: 'Full', color: 'bg-red-200 dark:bg-red-900/40', borderColor: 'border-red-300 dark:border-red-800', textColor: 'text-red-700 dark:text-red-300', w: 'col-span-2 row-span-1', pipes: 4 },
    { label: 'Zone D', pct: '15%', color: 'bg-amber-200 dark:bg-amber-900/40', borderColor: 'border-amber-300 dark:border-amber-800', textColor: 'text-amber-700 dark:text-amber-300', w: 'col-span-1 row-span-1', pipes: 0 },
  ]

  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-success" />
        <span className="text-xs font-medium text-text-muted">Yard Map</span>
      </div>

      {/* Satellite-style grid background */}
      <div className="relative bg-slate-100 dark:bg-slate-800/50 rounded-lg p-3"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(100,116,139,0.15) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      >
        <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[160px]">
          {zones.map((zone) => (
            <div
              key={zone.label}
              className={`${zone.w} ${zone.color} border ${zone.borderColor} rounded-md p-2 flex flex-col justify-between relative overflow-hidden`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[9px] font-bold ${zone.textColor}`}>{zone.label}</span>
                <span className={`text-[9px] font-semibold ${zone.textColor}`}>{zone.pct}</span>
              </div>

              {/* Pipe stack icons */}
              {zone.pipes > 0 && (
                <div className="flex gap-0.5 mt-auto">
                  {Array.from({ length: zone.pipes }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-[2px]">
                      <div className={`w-4 h-[2px] rounded-full ${zone.borderColor.replace('border-', 'bg-')}`} />
                      <div className={`w-4 h-[2px] rounded-full ${zone.borderColor.replace('border-', 'bg-')}`} />
                      <div className={`w-4 h-[2px] rounded-full ${zone.borderColor.replace('border-', 'bg-')}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
