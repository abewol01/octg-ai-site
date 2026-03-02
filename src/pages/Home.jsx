import PageLayout from '../components/layout/PageLayout'
import Hero from '../components/home/Hero'
import ProblemStatement from '../components/home/ProblemStatement'
import PlatformOverview from '../components/home/PlatformOverview'
import MetricsBar from '../components/home/MetricsBar'
import FeatureHighlights from '../components/home/FeatureHighlights'
import UseCases from '../components/home/UseCases'
import Testimonials from '../components/home/Testimonials'
import CtaSection from '../components/home/CtaSection'

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <ProblemStatement />
      <PlatformOverview />
      <MetricsBar />
      <FeatureHighlights />
      <UseCases />
      <Testimonials />
      <CtaSection />
    </PageLayout>
  )
}
