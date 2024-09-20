import { TwitterIcon } from '@/assets/icons/socials/Twitter'
import { Heading } from '@/components/Heading'
import { MemberCard } from '@/components/MemberCard'
import { Footer } from '@/components/sections/Footer'
import { Socials } from '@/components/sections/Socials'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main>
      <Heading>{t('title')}</Heading>
      <Socials />
      <Footer />
    </main>
  )
}
