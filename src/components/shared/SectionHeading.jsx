import ScrollReveal from './ScrollReveal'

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
  light = false,
}) {
  return (
    <ScrollReveal>
      <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}>
        {label && (
          <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 ${light ? 'text-accent' : 'text-accent'}`}>
            {label}
          </span>
        )}
        <h2 className={`font-display text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-primary'}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-text-muted'}`}>
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  )
}
