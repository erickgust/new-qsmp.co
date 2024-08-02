import { Heading } from '@/components/Heading'
import { MemberCard } from '@/components/MemberCard'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main>
      <Heading>{t('title')}</Heading>
      <MemberCard />
    </main>
  )
}
