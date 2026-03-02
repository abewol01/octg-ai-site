import { Check, AlertTriangle, X } from 'lucide-react'

export default function MtrHeatVerificationMockup() {
  const heats = [
    {
      heat: 'H-84521',
      status: 'Pass',
      statusColor: 'bg-[#DCFCE7] text-[#15803D] dark:bg-green-900/30 dark:text-green-300',
      icon: Check,
      iconColor: 'text-success',
      detail: '12 pipes, 8 parameters checked',
      expanded: true,
      params: [
        { name: 'Carbon (C)', val: '0.22%', ok: true },
        { name: 'Yield', val: '52,400 psi', ok: true },
        { name: 'Tensile', val: '71,200 psi', ok: true },
      ],
    },
    {
      heat: 'H-84522',
      status: 'Warning',
      statusColor: 'bg-[#FEF3C7] text-[#B45309] dark:bg-amber-900/30 dark:text-amber-300',
      icon: AlertTriangle,
      iconColor: 'text-warning',
      detail: '8 pipes, 1 marginal parameter',
      expanded: false,
    },
    {
      heat: 'H-84523',
      status: 'Fail',
      statusColor: 'bg-[#FEE2E2] text-[#B91C1C] dark:bg-red-900/30 dark:text-red-300',
      icon: X,
      iconColor: 'text-danger',
      detail: '6 pipes, P exceeds max',
      expanded: false,
    },
  ]

  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-secondary" />
        <span className="text-xs font-medium text-text-muted">Per-Heat Verification</span>
      </div>

      <div className="space-y-2">
        {heats.map((heat) => (
          <div key={heat.heat} className="border border-border rounded-lg overflow-hidden">
            {/* Heat header row */}
            <div className="flex items-center justify-between px-3 py-2.5 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-2.5">
                <heat.icon className={`w-3.5 h-3.5 ${heat.iconColor}`} />
                <span className="font-mono text-xs font-semibold text-text">{heat.heat}</span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${heat.statusColor}`}>
                  {heat.status}
                </span>
              </div>
            </div>

            {/* Detail text */}
            <div className="px-3 py-1.5 border-t border-border">
              <span className="text-[10px] text-text-muted">{heat.detail}</span>
            </div>

            {/* Expanded params */}
            {heat.expanded && heat.params && (
              <div className="px-3 pb-2 space-y-1">
                {heat.params.map((p) => (
                  <div key={p.name} className="flex items-center justify-between text-[10px]">
                    <span className="text-text-muted">{p.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-text">{p.val}</span>
                      <Check className="w-3 h-3 text-success" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
