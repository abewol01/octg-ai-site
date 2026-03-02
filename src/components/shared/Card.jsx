export default function Card({
  children,
  className = '',
  hover = true,
  accent,
  ...props
}) {
  return (
    <div
      className={`
        bg-surface border border-gray-200/60 dark:border-white/[0.06] rounded-xl p-6 shadow-sm
        ${hover ? 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-gray-300/60 dark:hover:border-white/[0.10] dark:hover:shadow-black/40' : ''}
        ${accent ? `border-l-4 border-l-${accent}` : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
