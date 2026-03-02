import Badge from '../shared/Badge'

export default function PricingToggle({
  product,
  setProduct,
  billing,
  setBilling,
}) {
  const products = [
    { key: 'platform', label: 'Platform' },
    { key: 'tracker', label: 'Management Only' },
    { key: 'mtr', label: 'MTR.AI Only' },
  ]

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Product toggle */}
      <div className="inline-flex bg-surface-alt border border-border rounded-xl p-1">
        {products.map((p) => (
          <button
            key={p.key}
            onClick={() => setProduct(p.key)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              product === p.key
                ? 'bg-surface text-text shadow-sm'
                : 'text-text-muted hover:text-text'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Billing toggle */}
      <div className="flex items-center gap-3">
        <span className={`text-sm font-medium ${billing === 'monthly' ? 'text-text' : 'text-text-muted'}`}>
          Monthly
        </span>
        <button
          onClick={() => setBilling(billing === 'monthly' ? 'annual' : 'monthly')}
          className={`relative shrink-0 w-12 h-6 p-0 border-0 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none ${
            billing === 'annual' ? 'bg-accent' : 'bg-slate-300 dark:bg-slate-600'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
              billing === 'annual' ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${billing === 'annual' ? 'text-text' : 'text-text-muted'}`}>
          Annual
        </span>
        {billing === 'annual' && <Badge color="green">Save 17%</Badge>}
      </div>
    </div>
  )
}
