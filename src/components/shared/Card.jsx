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
        bg-white border border-border rounded-xl p-6
        ${hover ? 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg' : ''}
        ${accent ? `border-l-4 border-l-${accent}` : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
