import Badge from '../shared/Badge'

export default function PricingToggle({
  product,
  setProduct,
  billing,
  setBilling,
}) {
  const products = [
    { key: 'platform', label: 'Platform' },
    { key: 'tracker', label: 'Tracker Only' },
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
                ? 'bg-white text-primary shadow-sm'
                : 'text-text-muted hover:text-primary'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Billing toggle */}
      <div className="flex items-center gap-3">
        <span className={`text-sm font-medium ${billing === 'monthly' ? 'text-primary' : 'text-text-muted'}`}>
          Monthly
        </span>
        <button
          onClick={() => setBilling(billing === 'monthly' ? 'annual' : 'monthly')}
          className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
            billing === 'annual' ? 'bg-accent' : 'bg-slate-300'
          }`}
        >
          <span
            className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
              billing === 'annual' ? 'translate-x-6' : 'translate-x-0.5'
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${billing === 'annual' ? 'text-primary' : 'text-text-muted'}`}>
          Annual
        </span>
        {billing === 'annual' && <Badge color="green">Save 17%</Badge>}
      </div>
    </div>
  )
}
