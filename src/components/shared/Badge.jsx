const colorMap = {
  orange: 'bg-[#FFF7ED] text-[#C2410C] dark:bg-orange-900/30 dark:text-orange-300',
  indigo: 'bg-[#EEF2FF] text-[#4338CA] dark:bg-indigo-900/30 dark:text-indigo-300',
  green: 'bg-[#F0FDF4] text-[#15803D] dark:bg-green-900/30 dark:text-green-300',
  blue: 'bg-[#EFF6FF] text-[#1D4ED8] dark:bg-blue-900/30 dark:text-blue-300',
  amber: 'bg-[#FFFBEB] text-[#B45309] dark:bg-amber-900/30 dark:text-amber-300',
  red: 'bg-[#FEF2F2] text-[#B91C1C] dark:bg-red-900/30 dark:text-red-300',
  purple: 'bg-[#FAF5FF] text-[#7E22CE] dark:bg-purple-900/30 dark:text-purple-300',
  gray: 'bg-[#F9FAFB] text-[#4B5563] dark:bg-gray-800/30 dark:text-gray-400',
}

export default function Badge({ children, color = 'orange', className = '' }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  )
}
