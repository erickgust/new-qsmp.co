import { Footer } from '@/components/sections/Footer'
import { Socials } from '@/components/sections/Socials'
import { Tweets } from '@/components/sections/Tweets'
import { Updates } from '@/components/sections/Updates'

export default function Home() {
  return (
    <main>
      <Tweets />
      <Updates />
      <Socials />
      <Footer />
    </main>
  )
}
