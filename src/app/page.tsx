import { Hero } from '@/components/home-ui/hero'
import { Services } from '@/components/home-ui/services'
import { Clients } from '@/components/home-ui/clients'
import { Testimonials } from '@/components/home-ui/testimonials'
import { FeaturedEvents } from '@/components/home-ui/featured-events'
import { NewsHighlights } from '@/components/home-ui/news-highlights'

export default function Home() {
  return (
    <main className="pt-16"> {/* Add padding to account for fixed navbar */}
      <Hero />
      <FeaturedEvents />
      <NewsHighlights />
      <Services />
      <Clients />
      <Testimonials />
    </main>
  )
}