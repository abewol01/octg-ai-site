export default function TrackerExportMockup() {
  const docs = [
    {
      title: 'Manifest',
      type: 'PDF',
      typeColor: 'bg-[#FEE2E2] text-[#B91C1C] dark:bg-red-900/30 dark:text-red-300',
      lines: 5,
      hasTable: true,
    },
    {
      title: 'Shipping Tally',
      type: 'XLSX',
      typeColor: 'bg-[#DCFCE7] text-[#15803D] dark:bg-green-900/30 dark:text-green-300',
      lines: 4,
      hasTable: true,
    },
    {
      title: 'Product Passport',
      type: 'PDF',
      typeColor: 'bg-[#FEE2E2] text-[#B91C1C] dark:bg-red-900/30 dark:text-red-300',
      lines: 3,
      hasTable: false,
    },
  ]

  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-success" />
        <span className="text-xs font-medium text-text-muted">Export Documents</span>
      </div>

      {/* Document stack */}
      <div className="flex justify-center gap-3">
        {docs.map((doc, i) => (
          <div
            key={doc.title}
            className="w-[90px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm overflow-hidden"
            style={{ transform: `rotate(${(i - 1) * 3}deg)` }}
          >
            {/* Mini document page */}
            <div className="p-2">
              {/* Header area */}
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mb-1.5" />
              <div className="w-3/4 h-1 bg-slate-100 dark:bg-slate-700/50 rounded-full mb-2" />

              {/* Content lines / table */}
              {doc.hasTable ? (
                <div className="space-y-[3px]">
                  {Array.from({ length: doc.lines }).map((_, j) => (
                    <div key={j} className="flex gap-[2px]">
                      <div className="flex-1 h-1 bg-slate-100 dark:bg-slate-700/50 rounded-full" />
                      <div className="flex-1 h-1 bg-slate-100 dark:bg-slate-700/50 rounded-full" />
                      <div className="flex-1 h-1 bg-slate-100 dark:bg-slate-700/50 rounded-full" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-[3px]">
                  {/* Cover page style */}
                  <div className="w-2/3 h-1.5 bg-accent/30 rounded-full mx-auto mt-2 mb-1" />
                  <div className="w-1/2 h-1 bg-slate-100 dark:bg-slate-700/50 rounded-full mx-auto" />
                  <div className="w-8 h-3 bg-accent/20 rounded mx-auto mt-2" />
                </div>
              )}
            </div>

            {/* Footer with type badge */}
            <div className="border-t border-slate-100 dark:border-slate-700 px-2 py-1.5 flex items-center justify-between">
              <span className="text-[8px] font-medium text-text-muted truncate">{doc.title}</span>
              <span className={`text-[7px] font-bold px-1 py-0.5 rounded ${doc.typeColor}`}>
                {doc.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Export indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        <span className="text-xs text-accent font-semibold">&darr; Export</span>
      </div>
    </div>
  )
}
