import { Footer } from '@/components/sections/Footer'
import { Socials } from '@/components/sections/Socials'
import { Streams } from '@/components/sections/Streams'
import { Tweets } from '@/components/sections/Tweets'
import { Updates } from '@/components/sections/Updates'

export default function Home() {
  return (
    <main>
      <Streams />
      <Tweets />
      <Updates />
      <Socials />
      <Footer />
    </main>
  )
}
