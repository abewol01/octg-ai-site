export default function TrackerDashboardMockup() {
  const kpis = [
    { label: '12 Active WOs', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
    { label: '3 Attention', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
    { label: '5 Ready to Ship', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
  ]

  const workOrders = [
    {
      wo: 'WO-2025-003',
      status: 'Ready to Ship',
      statusColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      segments: [
        { color: 'bg-purple-400', width: '70%' },
        { color: 'bg-green-400', width: '25%' },
        { color: 'bg-slate-300 dark:bg-slate-600', width: '5%' },
      ],
    },
    {
      wo: 'WO-2025-004',
      status: 'Processing',
      statusColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
      segments: [
        { color: 'bg-amber-400', width: '45%' },
        { color: 'bg-blue-400', width: '30%' },
        { color: 'bg-slate-300 dark:bg-slate-600', width: '25%' },
      ],
    },
    {
      wo: 'WO-2025-005',
      status: 'Receiving',
      statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      segments: [
        { color: 'bg-blue-400', width: '20%' },
        { color: 'bg-slate-300 dark:bg-slate-600', width: '80%' },
      ],
    },
  ]

  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-success" />
        <span className="text-xs font-medium text-text-muted">Operations Center</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {kpis.map((kpi) => (
          <span key={kpi.label} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${kpi.color}`}>
            {kpi.label}
          </span>
        ))}
      </div>

      {workOrders.map((item) => (
        <div key={item.wo} className="flex items-center justify-between py-3 border-b border-border last:border-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold text-text">{item.wo}</span>
            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${item.statusColor}`}>
              {item.status}
            </span>
          </div>
          <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
            {item.segments.map((seg, j) => (
              <div key={j} className={`h-full ${seg.color}`} style={{ width: seg.width }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
