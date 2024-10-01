import { Heading } from '@/components/Heading'
import { Footer } from '@/components/sections/Footer'
import { Socials } from '@/components/sections/Socials'
import { Tweets } from '@/components/sections/Tweets'
import { Updates } from '@/components/sections/Updates'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main>
      <Heading>{t('title')}</Heading>
      <Tweets />
      <Updates />
      <Socials />
      <Footer />
    </main>
  )
}
