import { Check } from 'lucide-react'
import Button from '../shared/Button'
import Badge from '../shared/Badge'
import ScrollReveal from '../shared/ScrollReveal'

const pricingData = {
  platform: {
    starter: {
      name: 'Starter',
      tagline: 'Small coating operations or pipe yards getting started with digital tracking.',
      monthly: 499,
      annual: 415,
      features: [
        '1 facility',
        'Up to 3 team members',
        '2,500 active pipes',
        '100 MTR pages/month',
        '50 compliance checks/month',
        'VLX mobile inspections',
        'Barcode generation',
        'Email support (48hr)',
      ],
    },
    professional: {
      name: 'Professional',
      tagline: 'Mid-size coating facilities, active pipe yards, and operations managing multiple work orders daily.',
      monthly: 1299,
      annual: 1079,
      popular: true,
      features: [
        '1 facility',
        'Up to 10 team members',
        '15,000 active pipes',
        '750 MTR pages/month',
        '500 compliance checks/month',
        'Yard storage mapping',
        'Activity log (90-day)',
        'Priority support (24hr)',
        '1 onboarding session',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      tagline: 'Large operations, multi-facility companies, and organizations needing custom integrations.',
      monthly: null,
      annual: null,
      features: [
        'Unlimited facilities',
        'Unlimited team members',
        'Unlimited pipes',
        'Unlimited MTR pages',
        'Unlimited compliance checks',
        'Custom integrations (ERP, SAP)',
        'API access',
        'Dedicated success manager',
        'SSO / SAML',
        '4hr response SLA',
      ],
    },
  },
  tracker: {
    starter: {
      name: 'Starter',
      tagline: 'Getting started with digital pipe tracking.',
      monthly: 349,
      annual: 290,
      features: [
        '1 facility, 3 users',
        '2,500 active pipes',
        'Unlimited work orders',
        'Barcode generation',
        'VLX mobile inspections',
        'Manifest & tally export',
        'Email support (48hr)',
      ],
    },
    professional: {
      name: 'Professional',
      tagline: 'Active pipe yards and coating facilities managing multiple work orders daily.',
      monthly: 899,
      annual: 749,
      popular: true,
      features: [
        '1 facility, 10 users',
        '15,000 active pipes',
        'Yard storage mapping',
        'Activity log (90-day)',
        'Priority support (24hr)',
        '1 onboarding session',
        '+$49/additional VLX seat',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      tagline: 'Multi-facility operations with custom integration needs.',
      monthly: null,
      annual: null,
      features: [
        'Unlimited facilities',
        'Unlimited everything',
        'Custom integrations',
        'API access',
        'Dedicated support & SLA',
      ],
    },
  },
  mtr: {
    starter: {
      name: 'Essentials',
      tagline: 'Quality teams getting started with automated MTR compliance.',
      monthly: 249,
      annual: 207,
      features: [
        '3 users',
        '100 MTR pages/month',
        '50 compliance checks/month',
        'API 5L specs (pre-loaded)',
        '5 GB document storage',
        'Email support (48hr)',
      ],
    },
    professional: {
      name: 'Professional',
      tagline: 'Active quality operations with custom compliance requirements.',
      monthly: 699,
      annual: 582,
      popular: true,
      features: [
        '10 users',
        '500 MTR pages/month',
        '300 compliance checks/month',
        'API 5L + 10 custom specs',
        '15 GB document storage',
        'Priority support (24hr)',
        '1 onboarding session',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      tagline: 'Unlimited compliance at scale with API access.',
      monthly: null,
      annual: null,
      features: [
        'Unlimited users',
        'Unlimited pages & checks',
        'Unlimited custom specs',
        'API access',
        'Custom integrations',
        'Dedicated support & SLA',
      ],
    },
  },
}

function formatPrice(price) {
  if (price === null) return null
  return price.toLocaleString()
}

export default function TierCards({ product, billing }) {
  const tiers = pricingData[product]

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {['starter', 'professional', 'enterprise'].map((tier, i) => {
        const data = tiers[tier]
        const price = billing === 'annual' ? data.annual : data.monthly
        const isPopular = data.popular
        const isEnterprise = price === null

        return (
          <ScrollReveal key={tier} delay={i * 0.1}>
            <div
              className={`relative rounded-2xl p-8 h-full flex flex-col ${
                isPopular
                  ? 'border-2 border-accent bg-white shadow-xl scale-[1.02]'
                  : 'border border-border bg-white'
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge color="orange">Most Popular</Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-primary">{data.name}</h3>
                <p className="text-sm text-text-muted mt-1">{data.tagline}</p>
              </div>

              <div className="mb-6">
                {isEnterprise ? (
                  <div>
                    <span className="font-display text-4xl font-bold text-primary">Custom</span>
                    <p className="text-sm text-text-muted mt-1">Tailored to your operation</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl font-bold text-primary">
                        ${formatPrice(price)}
                      </span>
                      <span className="text-text-muted text-sm">/month</span>
                    </div>
                    {billing === 'annual' && (
                      <p className="text-xs text-text-muted mt-1">
                        Billed annually at ${formatPrice(price * 12)}/yr
                      </p>
                    )}
                    {billing === 'monthly' && data.annual && (
                      <p className="text-xs text-text-muted mt-1">
                        or ${formatPrice(data.annual)}/mo billed annually
                      </p>
                    )}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {data.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {isEnterprise ? (
                <Button
                  href="mailto:hello@octg.ai?subject=Enterprise%20Inquiry"
                  variant="outline"
                  className="w-full"
                >
                  Contact Sales
                </Button>
              ) : (
                <Button
                  href="https://app.octg.ai/signup"
                  variant={isPopular ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  Start Free Trial
                </Button>
              )}
            </div>
          </ScrollReveal>
        )
      })}
    </div>
  )
}
