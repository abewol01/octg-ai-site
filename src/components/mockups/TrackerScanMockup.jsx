import { Check } from 'lucide-react'
import vlxMark from '../../assets/vlx-mark.png'

export default function TrackerScanMockup() {
  return (
    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-info" />
        <span className="text-xs font-medium text-text-muted">VLX Mobile Scan</span>
      </div>

      {/* Phone frame */}
      <div className="mx-auto w-[180px]">
        <div className="bg-slate-900 dark:bg-slate-950 rounded-[20px] p-2 shadow-lg">
          {/* Notch */}
          <div className="w-16 h-3 bg-slate-900 dark:bg-slate-950 rounded-full mx-auto relative -top-0.5 z-10" />

          {/* Screen */}
          <div className="bg-white dark:bg-slate-800 rounded-[14px] px-3 py-3 -mt-1.5">
            {/* Scan success header */}
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-[11px] font-semibold text-success">Barcode Scanned</span>
            </div>

            {/* Pipe data */}
            <div className="space-y-2 mb-3">
              <div>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">Pipe ID</span>
                <p className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-200">H-98765</p>
              </div>
              <div>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">Work Order</span>
                <p className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-200">WO-2025-003</p>
              </div>
              <div>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">Status</span>
                <span className="block mt-0.5 text-[10px] font-medium px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 w-fit">
                  Post-Coating QC
                </span>
              </div>
            </div>

            {/* Sync button */}
            <div className="bg-accent/10 dark:bg-accent/20 rounded-lg py-1.5 text-center">
              <span className="text-[10px] font-semibold text-accent">Sync to Inventory &rarr;</span>
            </div>
          </div>
        </div>

        {/* VLX branding */}
        <div className="flex items-center justify-center mt-2">
          <img src={vlxMark} alt="VLX" className="h-3.5 object-contain" />
        </div>
      </div>
    </div>
  )
}
