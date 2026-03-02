import { useState } from 'react'
import { ChevronDown, Check, Minus } from 'lucide-react'
import ScrollReveal from '../shared/ScrollReveal'

const categories = [
  {
    name: 'Core Platform',
    features: [
      { name: 'Web Application', starter: true, professional: true, enterprise: true },
      { name: 'Mobile Access (VLX)', starter: true, professional: true, enterprise: true },
      { name: 'Light & Dark Mode', starter: true, professional: true, enterprise: true },
      { name: 'Team Members (included)', starter: '3', professional: '10', enterprise: 'Unlimited' },
      { name: 'Facilities / Sites', starter: '1', professional: '1', enterprise: 'Unlimited' },
      { name: 'Role-Based Permissions', starter: true, professional: true, enterprise: true },
      { name: 'SSO / SAML', starter: false, professional: false, enterprise: true },
      { name: 'API Access', starter: false, professional: false, enterprise: true },
    ],
  },
  {
    name: 'Inventory Management',
    features: [
      { name: 'Active Pipes', starter: '2,500', professional: '15,000', enterprise: 'Unlimited' },
      { name: 'Work Orders', starter: 'Unlimited', professional: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Operations Center Dashboard', starter: true, professional: true, enterprise: true },
      { name: 'Pipe Status Tracking', starter: true, professional: true, enterprise: true },
      { name: 'Spreadsheet Import (XLSX/CSV)', starter: true, professional: true, enterprise: true },
      { name: 'AI PDF Import', starter: true, professional: true, enterprise: true },
      { name: 'Barcode Generation (Zebra)', starter: true, professional: true, enterprise: true },
      { name: 'VLX Barcode Scanning', starter: true, professional: true, enterprise: true },
      { name: 'Shipping Manifest Export', starter: true, professional: true, enterprise: true },
      { name: 'Product Passport Export', starter: true, professional: true, enterprise: true },
      { name: 'Yard Storage Mapping', starter: false, professional: true, enterprise: true },
      { name: 'Activity Log', starter: false, professional: '90-day', enterprise: 'Unlimited' },
      { name: 'Custom Integrations', starter: false, professional: false, enterprise: true },
    ],
  },
  {
    name: 'MTR & Compliance',
    features: [
      { name: 'MTR Pages Processed (AI)', starter: '100/mo', professional: '750/mo', enterprise: 'Unlimited' },
      { name: 'AI Page Classification', starter: true, professional: true, enterprise: true },
      { name: 'Chemical Composition Extraction', starter: true, professional: true, enterprise: true },
      { name: 'Mechanical Properties Extraction', starter: true, professional: true, enterprise: true },
      { name: 'Compliance Checks', starter: '50/mo', professional: '500/mo', enterprise: 'Unlimited' },
      { name: 'API 5L Specs (Pre-loaded)', starter: true, professional: true, enterprise: true },
      { name: 'Custom Specs', starter: false, professional: '10', enterprise: 'Unlimited' },
      { name: 'Per-Heat Compliance Detail', starter: true, professional: true, enterprise: true },
      { name: 'Batch Compliance Checking', starter: false, professional: true, enterprise: true },
    ],
  },
  {
    name: 'Integrations & Data',
    features: [
      { name: 'VLX Mobile Inspections', starter: true, professional: true, enterprise: true },
      { name: 'Document Storage', starter: '5 GB', professional: '25 GB', enterprise: 'Unlimited' },
      { name: 'PDF Report Generation', starter: true, professional: true, enterprise: true },
      { name: 'XLSX Export', starter: true, professional: true, enterprise: true },
      { name: 'ERP / SAP Integration', starter: false, professional: false, enterprise: true },
      { name: 'REST API', starter: false, professional: false, enterprise: true },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: 'Knowledge Base', starter: true, professional: true, enterprise: true },
      { name: 'Email Support', starter: true, professional: true, enterprise: true },
      { name: 'Priority Support', starter: false, professional: true, enterprise: true },
      { name: 'Phone Support', starter: false, professional: false, enterprise: true },
      { name: 'Response Time', starter: '48 hrs', professional: '24 hrs', enterprise: '4 hrs' },
      { name: 'Onboarding', starter: false, professional: '1 session', enterprise: 'Custom' },
      { name: 'Dedicated Success Manager', starter: false, professional: false, enterprise: true },
      { name: 'SLA', starter: false, professional: false, enterprise: '99.9%' },
    ],
  },
]

function CellValue({ value }) {
  if (value === true) return <Check className="w-5 h-5 text-success mx-auto" />
  if (value === false) return <Minus className="w-4 h-4 text-slate-300 mx-auto" />
  return <span className="text-sm font-medium text-primary">{value}</span>
}

export default function FeatureMatrix() {
  const [expanded, setExpanded] = useState(false)
  const [openCategories, setOpenCategories] = useState(new Set(['Core Platform']))

  const toggleCategory = (name) => {
    setOpenCategories((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  return (
    <ScrollReveal>
      <div className="mt-16">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 mx-auto text-sm font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer"
        >
          {expanded ? 'Hide' : 'Compare all features'}
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        {expanded && (
          <div className="mt-8 border border-border rounded-2xl overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-4 bg-surface-alt border-b border-border">
              <div className="p-4 font-semibold text-sm text-primary">Feature</div>
              <div className="p-4 text-center font-semibold text-sm text-primary">Starter</div>
              <div className="p-4 text-center font-semibold text-sm text-primary bg-accent/5">Professional</div>
              <div className="p-4 text-center font-semibold text-sm text-primary">Enterprise</div>
            </div>

            {categories.map((category) => (
              <div key={category.name}>
                {/* Category header */}
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center justify-between p-4 bg-surface-alt/50 border-b border-border hover:bg-surface-alt transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-sm text-primary">{category.name}</span>
                  <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${openCategories.has(category.name) ? 'rotate-180' : ''}`} />
                </button>

                {openCategories.has(category.name) &&
                  category.features.map((feature) => (
                    <div key={feature.name} className="grid grid-cols-4 border-b border-border last:border-0">
                      <div className="p-4 text-sm text-text-muted">{feature.name}</div>
                      <div className="p-4 text-center"><CellValue value={feature.starter} /></div>
                      <div className="p-4 text-center bg-accent/5"><CellValue value={feature.professional} /></div>
                      <div className="p-4 text-center"><CellValue value={feature.enterprise} /></div>
                    </div>
                  ))
                }
              </div>
            ))}
          </div>
        )}
      </div>
    </ScrollReveal>
  )
}
