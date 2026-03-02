import { motion } from 'framer-motion'
import {
  ArrowRight, Shield, Lock, Server, KeyRound, ClipboardCheck,
  ShieldCheck, Smartphone, Key, Globe,
  GitPullRequest, Layers, TestTube2, History, FileSearch, UserCog,
  Database, HardDrive, Monitor, Wifi,
  CloudDownload, RefreshCw, FileText,
  Download, Trash2,
} from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'
import SectionHeading from '../components/shared/SectionHeading'
import ScrollReveal from '../components/shared/ScrollReveal'
import Button from '../components/shared/Button'

/* ───────────────────────────────────────────────────
   Section 1: Hero
   ─────────────────────────────────────────────────── */

const trustIndicators = [
  { icon: Lock, label: 'AES-256', sublabel: 'Encryption' },
  { icon: Server, label: 'AWS US Regions', sublabel: '(Virginia & Ohio)' },
  { icon: KeyRound, label: 'Role-Based', sublabel: 'Access Control' },
  { icon: ClipboardCheck, label: 'Compliance', sublabel: 'Monitoring' },
]

function Hero() {
  return (
    <section className="relative bg-blueprint overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
          >
            <Shield className="w-3.5 h-3.5 text-green-400" />
            <span className="text-xs font-semibold text-green-400 tracking-wide">Security & Data Protection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-text leading-[1.1] mb-6"
          >
            Your data. Your control<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            OCTG.AI is built on the VLX platform — cloud-native infrastructure designed for enterprise security from day one. Every layer is encrypted, every access is logged, and for enterprise customers, you hold the keys to your own data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button href="mailto:hello@octg.ai?subject=Security%20Documentation%20Request" size="xl">
              Request Security Documentation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Trust indicators row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
        >
          {trustIndicators.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text">{item.label}</div>
                  <div className="text-xs text-text-muted">{item.sublabel}</div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 2: Infrastructure Overview
   ─────────────────────────────────────────────────── */

function Infrastructure() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Infrastructure"
          title="Built on AWS. Secured by design."
          description="Our infrastructure runs entirely within Amazon Web Services, leveraging AWS security services and best practices at every layer."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
          {/* Left — prose */}
          <div className="space-y-4">
            <ScrollReveal>
              <p className="text-text-muted leading-relaxed">
                OCTG.AI and VLX operate within an AWS Virtual Private Cloud across two US regions (N. Virginia and Ohio). Databases, application containers, and caching layers run in private subnets — inaccessible from the public internet. Only the load balancer sits in the public subnet, handling TLS termination and routing traffic to the application layer.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-text-muted leading-relaxed">
                All production hosts use deny-by-default security groups. Network traffic is monitored through VPC flow logs and analyzed by AWS GuardDuty, which uses machine learning to detect anomalous behavior and potential threats. Every infrastructure change is recorded by AWS CloudTrail, creating an immutable audit trail.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-muted leading-relaxed">
                Remote access to production systems requires SSH or encrypted VPN — there is no web-based admin panel exposed to the internet.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — architecture diagram */}
          <ScrollReveal direction="right">
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 font-mono text-sm">
              <div className="text-text-muted text-xs uppercase tracking-wider mb-4 font-sans font-semibold">AWS VPC Architecture</div>

              {/* Public Subnet */}
              <div className="border border-amber-500/30 rounded-xl p-4 mb-3 bg-amber-500/[0.03]">
                <div className="text-amber-400 text-xs font-semibold mb-3 font-sans uppercase tracking-wider">Public Subnet</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-text-muted text-xs">
                    <Globe className="w-3.5 h-3.5 text-amber-400/70" />
                    Route 53 (DNS)
                  </div>
                  <div className="flex items-center gap-2 text-text-muted text-xs">
                    <Wifi className="w-3.5 h-3.5 text-amber-400/70" />
                    Application Load Balancer (TLS)
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-1">
                <div className="w-px h-4 bg-border" />
              </div>

              {/* Private Subnet */}
              <div className="border border-green-500/30 rounded-xl p-4 mb-4 bg-green-500/[0.03]">
                <div className="text-green-400 text-xs font-semibold mb-3 font-sans uppercase tracking-wider">Private Subnet</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-text-muted text-xs">
                    <Server className="w-3.5 h-3.5 text-green-400/70" />
                    ECS Cluster (Application)
                  </div>
                  <div className="flex items-center gap-2 text-text-muted text-xs">
                    <Database className="w-3.5 h-3.5 text-green-400/70" />
                    PostgreSQL RDS (AES-256)
                  </div>
                  <div className="flex items-center gap-2 text-text-muted text-xs">
                    <HardDrive className="w-3.5 h-3.5 text-green-400/70" />
                    Redis Cache
                  </div>
                  <div className="flex items-center gap-2 text-text-muted text-xs">
                    <Monitor className="w-3.5 h-3.5 text-green-400/70" />
                    Lambda Functions
                  </div>
                </div>
              </div>

              {/* Monitoring bar */}
              <div className="flex items-center gap-4 text-[11px] text-text-muted pt-3 border-t border-border">
                <span>CloudWatch</span>
                <span className="text-border">|</span>
                <span>GuardDuty</span>
                <span className="text-border">|</span>
                <span>CloudTrail</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 3: Encryption
   ─────────────────────────────────────────────────── */

const encryptionCards = [
  {
    icon: Wifi,
    title: 'In Transit',
    detail: 'All data transmitted over TLS (HTTPS). API calls, mobile sync, webhook payloads, file transfers — nothing moves in plaintext.',
  },
  {
    icon: Database,
    title: 'Databases at Rest',
    detail: 'PostgreSQL databases encrypted with AES-256. Data is unreadable without the encryption keys, even with physical access to storage.',
  },
  {
    icon: HardDrive,
    title: 'File Storage at Rest',
    detail: 'All files in S3 (inspection photos, MTRs, reports, media) are encrypted at rest using AWS server-side encryption.',
  },
  {
    icon: Monitor,
    title: 'Endpoints',
    detail: 'Full disk encryption on all endpoints used for development and administration. Lost or stolen devices cannot expose source code or credentials.',
  },
]

function Encryption() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Encryption"
          title="Encrypted at every layer."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {encryptionCards.map((card, i) => {
            const Icon = card.icon
            return (
              <ScrollReveal key={card.title} delay={i * 0.06}>
                <div className="bg-surface border border-border rounded-xl p-6 h-full"
                  style={{ borderTopColor: '#22c55e', borderTopWidth: '2px' }}
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="font-display text-base font-bold text-text mb-2">{card.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{card.detail}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 4: Access Control & Authentication
   ─────────────────────────────────────────────────── */

const accessMethods = [
  {
    icon: ShieldCheck,
    title: 'Role-Based Access Control (RBAC)',
    description: 'Users are assigned roles that determine what data they can access and what actions they can perform. Facility operators see their work orders. Admins manage organization settings. Inspectors in the field see only the inspections assigned to them. No user has broader access than their role requires.',
  },
  {
    icon: KeyRound,
    title: 'Multi-Factor Authentication',
    description: 'MFA is enforced on all production infrastructure access, CI/CD pipelines (Azure DevOps), and administrative accounts. This applies to our team — the people who build and maintain the platform.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Authentication',
    description: 'Field inspectors authenticate through AWS Cognito, which provides secure token-based authentication for mobile devices. Sessions expire, tokens rotate, and device-level security is enforced.',
  },
  {
    icon: Key,
    title: 'API Authentication',
    description: 'External integrations authenticate via API key in the access-token header. One active key per organization. Keys can be regenerated or revoked at any time from the settings panel.',
  },
]

const accessLayers = [
  { label: 'Admin Access', detail: 'MFA + VPN/SSH + Role', color: '#ef4444' },
  { label: 'API Access', detail: 'API Key + Org Scope', color: '#a855f7' },
  { label: 'Mobile / Field Access', detail: 'Cognito + Token + Assignment', color: '#3b82f6' },
  { label: 'User Access', detail: 'Email + Password + RBAC', color: '#22c55e' },
]

function AccessControl() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Access Control"
          title="Every action is authenticated. Every access is authorized."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
          {/* Left — descriptions */}
          <div className="space-y-6">
            {accessMethods.map((method, i) => {
              const Icon = method.icon
              return (
                <ScrollReveal key={method.title} delay={i * 0.06}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-text mb-1">{method.title}</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{method.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Right — access layer stack */}
          <ScrollReveal direction="right">
            <div className="space-y-2">
              {accessLayers.map((layer) => (
                <div
                  key={layer.label}
                  className="bg-surface border border-border rounded-xl p-4"
                  style={{ borderLeftColor: layer.color, borderLeftWidth: '3px' }}
                >
                  <div className="font-display text-sm font-bold text-text">{layer.label}</div>
                  <div className="text-xs text-text-muted font-mono mt-0.5">{layer.detail}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 5: Development & Deployment Security
   ─────────────────────────────────────────────────── */

const devPractices = [
  {
    icon: GitPullRequest,
    title: 'Mandatory Peer Review',
    description: 'Every code change goes through pull request review by a developer who did not write the code. No exceptions. No self-merges to production.',
  },
  {
    icon: Layers,
    title: 'Segregated Environments',
    description: 'Production, staging, and development environments are completely separated. Test data never touches production, and production credentials are never used in development.',
  },
  {
    icon: TestTube2,
    title: 'Automated Testing',
    description: 'Code is tested automatically before deployment. Builds that fail tests do not reach production.',
  },
  {
    icon: History,
    title: 'Version Control & Rollback',
    description: 'Full version history maintained through source control. Any deployment can be rolled back to a previous known-good state.',
  },
  {
    icon: FileSearch,
    title: 'Infrastructure Audit Trail',
    description: 'AWS CloudTrail records every change to infrastructure configuration. Who changed what, when, and from where — all logged and retained.',
  },
  {
    icon: UserCog,
    title: 'Restricted Production Access',
    description: 'Only authorized personnel can deploy to production. Access is gated by role, MFA, and approval workflows.',
  },
]

function DevPractices() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Development Practices"
          title="Secure development. Auditable deployments."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {devPractices.map((practice, i) => {
            const Icon = practice.icon
            return (
              <ScrollReveal key={practice.title} delay={i * 0.06}>
                <div className="bg-surface border border-border rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-surface-alt flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-text-muted" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-text mb-2">{practice.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{practice.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 6: Dedicated Tenant Offering
   ─────────────────────────────────────────────────── */

function DedicatedTenant() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Enterprise Data Control"
          title="Hold the keys to your own data."
          description="For enterprise customers who need more than shared infrastructure — a dedicated environment where you control the encryption keys and we push updates, not the other way around."
        />

        <div className="mt-12 space-y-12">
          {/* Main explainer + visual */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left — explanation */}
            <ScrollReveal>
              <div className="space-y-5">
                <div>
                  <h4 className="font-display text-sm font-bold text-text mb-2">How it works</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    In the standard deployment, OCTG.AI runs as a multi-tenant application — your data is logically isolated through row-level security policies and organization-scoped access controls. This is how most SaaS products work, and it&apos;s secure.
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed mt-3">
                    For enterprise customers who require stronger isolation, we offer a <strong className="text-text">Dedicated Tenant</strong> tier. Here&apos;s what changes:
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-sm font-bold text-amber-400 mb-1">Your own database.</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Your organization gets a dedicated PostgreSQL instance — not a shared database with row-level policies, but a physically separate database that only your application connects to. Your pipe data, inspection records, MTRs, and work orders live in infrastructure that no other customer touches.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-sm font-bold text-amber-400 mb-1">Your own encryption keys.</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    The dedicated database is encrypted using a KMS key that you create and control in your own AWS account. You grant our application permission to use the key for read/write operations. You can audit every use of that key. And critically — you can revoke that permission at any time, making your data at rest immediately unreadable to us.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-sm font-bold text-amber-400 mb-1">Your own file storage.</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Inspection photos, MTRs, and generated reports are stored in a dedicated S3 bucket encrypted with your KMS key. Same principle: your key, your control.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-sm font-bold text-amber-400 mb-1">We push updates, not pull data.</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Our application layer receives code updates and feature releases like any other deployment. But it accesses your data only through the permissions you&apos;ve granted. If you revoke key access, the application can&apos;t read your data — period.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Standard vs Dedicated visual */}
            <ScrollReveal direction="right">
              <div className="space-y-4">
                {/* Standard Tier */}
                <div className="bg-surface border border-border rounded-xl p-6">
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Standard Tier</div>
                  <div className="bg-surface-alt border border-border rounded-lg p-4 mb-4">
                    <div className="text-xs font-mono text-text-muted mb-3">Shared Database (RLS isolation)</div>
                    <div className="grid grid-cols-4 gap-2">
                      {['Org A', 'Org B', 'Org C', 'Org D'].map((org) => (
                        <div key={org} className="bg-surface border border-border rounded-md px-2 py-1.5 text-center text-[10px] font-mono text-text-muted">
                          {org}
                        </div>
                      ))}
                    </div>
                    <div className="text-[10px] text-text-muted mt-3 font-mono">Encrypted: Platform-managed keys</div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-[11px] text-green-400 font-medium">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Secure</span>
                    <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Encrypted</span>
                    <span className="flex items-center gap-1"><Layers className="w-3 h-3" /> Isolated</span>
                  </div>
                </div>

                {/* Dedicated Tier */}
                <div className="bg-surface border-2 border-amber-500/30 rounded-xl p-6 shadow-[0_0_30px_rgba(245,158,11,0.05)]">
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">Dedicated Tenant Tier</div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-surface-alt border border-amber-500/20 rounded-lg p-3">
                      <div className="text-[10px] font-mono text-text-muted mb-2">YOUR Database</div>
                      <div className="bg-surface border border-border rounded-md px-2 py-1.5 text-[10px] font-mono text-text-muted mb-2">
                        Your data only
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-amber-400">
                        <KeyRound className="w-2.5 h-2.5" /> YOUR KMS key
                      </div>
                    </div>
                    <div className="bg-surface-alt border border-amber-500/20 rounded-lg p-3">
                      <div className="text-[10px] font-mono text-text-muted mb-2">YOUR Files</div>
                      <div className="space-y-0.5 text-[10px] font-mono text-text-muted mb-2">
                        <div>Photos</div>
                        <div>MTRs</div>
                        <div>Reports</div>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-amber-400">
                        <KeyRound className="w-2.5 h-2.5" /> YOUR key
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-[11px] text-green-400 font-medium">
                    <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Physical isolation</div>
                    <div className="flex items-center gap-1"><KeyRound className="w-3 h-3" /> Customer-managed encryption keys</div>
                    <div className="flex items-center gap-1"><Lock className="w-3 h-3" /> Revocable access</div>
                    <div className="flex items-center gap-1"><FileSearch className="w-3 h-3" /> Independent audit trail</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* What this means / What this does NOT mean */}
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-surface border border-green-500/20 rounded-xl p-6">
                <h4 className="font-display text-sm font-bold text-green-400 mb-3">What this means in practice</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  You own the encryption keys to your data at rest. We cannot access your stored data without your active permission. If you leave, your data is yours — encrypted under keys only you control.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-surface border border-border rounded-xl p-6">
                <h4 className="font-display text-sm font-bold text-text mb-3">What this does NOT mean</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  This is not on-premises deployment. The infrastructure runs in AWS, managed by us. During active use — when an inspector submits an inspection, when you open the dashboard — the application processes data in memory. The dedicated tenant model controls data at rest and access authorization, not in-memory processing. We&apos;re being upfront about this because the distinction matters.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Pricing note */}
          <ScrollReveal delay={0.2}>
            <p className="text-xs text-text-muted text-center max-w-xl mx-auto">
              The Dedicated Tenant tier is available for enterprise customers. Pricing reflects the additional infrastructure required for physical isolation and dedicated resources. Contact us to discuss your requirements.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 7: Backup & Recovery
   ─────────────────────────────────────────────────── */

const backupItems = [
  {
    icon: CloudDownload,
    title: 'Daily Automated Backups',
    description: 'Databases are backed up daily through AWS RDS automated backup. No manual intervention required.',
  },
  {
    icon: RefreshCw,
    title: 'Verified Recovery',
    description: 'Backups are restored and verified at least annually to confirm that recovery procedures actually work — not just that backups exist.',
  },
  {
    icon: FileText,
    title: 'Documented Plans',
    description: 'Business Continuity and Disaster Recovery plans are documented with defined Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO).',
  },
]

function BackupRecovery() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Backup & Recovery"
          title="Automated backups. Documented recovery."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {backupItems.map((item, i) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <div className="bg-surface border border-border rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-surface-alt flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-text-muted" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-text mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 8: Compliance
   ─────────────────────────────────────────────────── */

function Compliance() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Compliance"
          title="Continuous compliance monitoring."
        />

        <div className="max-w-3xl mx-auto mt-8">
          <ScrollReveal>
            <div className="bg-surface border border-border rounded-2xl p-8">
              <p className="text-text-muted leading-relaxed mb-6">
                OCTG.AI and VLX use <strong className="text-text">Sprinto</strong> for continuous compliance monitoring. Sprinto automates evidence collection, tracks control effectiveness, and monitors security posture against industry frameworks on an ongoing basis.
              </p>
              <div>
                <h4 className="font-display text-sm font-bold text-text mb-2">What we can share</h4>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  Security documentation, compliance reports, and infrastructure details are available to prospective enterprise customers under NDA. If your organization requires specific compliance documentation as part of vendor evaluation, contact our team and we&apos;ll provide what you need.
                </p>
                <Button href="mailto:hello@octg.ai?subject=Compliance%20Documentation%20Request" size="lg">
                  Request Compliance Documentation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 9: Data Ownership & Portability
   ─────────────────────────────────────────────────── */

function DataOwnership() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Data Ownership"
          title={<>Your data is yours. Full stop<span className="text-accent">.</span></>}
        />

        <div className="max-w-3xl mx-auto mt-8">
          <ScrollReveal>
            <p className="text-text-muted leading-relaxed text-center mb-8">
              Your inspection data, pipe records, MTRs, photos, and generated reports belong to you. OCTG.AI does not sell, share, or use customer data for any purpose other than providing the service you&apos;re paying for.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.08}>
              <div className="bg-surface border border-border rounded-xl p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <Download className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="font-display text-sm font-bold text-text mb-2">Export anytime.</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  All data is exportable — pipe manifests as CSV, inspection reports as PDF, bulk data via API. You are never locked in.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="bg-surface border border-border rounded-xl p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <Trash2 className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="font-display text-sm font-bold text-text mb-2">Deletion on request.</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  When you leave, your data is deleted from our systems upon request. For Dedicated Tenant customers, you already control the encryption keys — revoking access is immediate.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Section 10: CTA
   ─────────────────────────────────────────────────── */

function CtaSection() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
            Questions about security<span className="text-accent">?</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Our team is available to discuss your organization&apos;s security requirements, share compliance documentation, or walk through the Dedicated Tenant architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="mailto:hello@octg.ai?subject=Security%20Documentation%20Request" size="xl">
              Request Security Documentation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="mailto:hello@octg.ai?subject=Security%20Review" variant="secondary" size="xl">
              Schedule a Security Review
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────────
   Page Component
   ─────────────────────────────────────────────────── */

export default function Security() {
  return (
    <PageLayout>
      <Hero />
      <Infrastructure />
      <Encryption />
      <AccessControl />
      <DevPractices />
      <DedicatedTenant />
      <BackupRecovery />
      <Compliance />
      <DataOwnership />
      <CtaSection />
    </PageLayout>
  )
}
