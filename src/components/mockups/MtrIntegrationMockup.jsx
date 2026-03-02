import { Check, AlertTriangle } from 'lucide-react'

export default function MtrIntegrationMockup() {
  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-secondary" />
        <span className="text-xs font-medium text-text-muted">Product Passport</span>
      </div>

      {/* Mini document */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
        {/* Document header */}
        <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-2.5">
          <p className="text-[10px] font-bold text-text uppercase tracking-wider">Product Passport</p>
          <p className="font-mono text-[10px] text-text-muted">WO-2025-003</p>
        </div>

        {/* Compliance summary section */}
        <div className="px-4 py-3">
          <p className="text-[9px] font-semibold text-text-muted uppercase tracking-wider mb-2">Compliance Summary</p>

          {/* Mini table */}
          <div className="border border-slate-200 dark:border-slate-700 rounded overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
              <div className="px-2 py-1 text-[9px] font-semibold text-text-muted">Heat</div>
              <div className="px-2 py-1 text-[9px] font-semibold text-text-muted">Spec</div>
              <div className="px-2 py-1 text-[9px] font-semibold text-text-muted">Result</div>
            </div>

            {/* Rows */}
            <div className="grid grid-cols-3 border-b border-slate-100 dark:border-slate-700">
              <div className="px-2 py-1.5 font-mono text-[10px] text-text">H-84521</div>
              <div className="px-2 py-1.5 text-[10px] text-text">API 5L X52</div>
              <div className="px-2 py-1.5 flex items-center gap-1">
                <Check className="w-3 h-3 text-success" />
                <span className="text-[10px] font-medium text-success">Pass</span>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="px-2 py-1.5 font-mono text-[10px] text-text">H-84522</div>
              <div className="px-2 py-1.5 text-[10px] text-text">API 5L X52</div>
              <div className="px-2 py-1.5 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-warning" />
                <span className="text-[10px] font-medium text-warning">Warning</span>
              </div>
            </div>
          </div>

          {/* Attachment lines */}
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center gap-2 text-[10px] text-text-muted">
              <div className="w-1 h-1 rounded-full bg-secondary" />
              MTR Documents: 3 attached
            </div>
            <div className="flex items-center gap-2 text-[10px] text-text-muted">
              <div className="w-1 h-1 rounded-full bg-info" />
              VLX Inspections: 2 attached
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
