import { Heading } from '@/components/Heading'
import { MemberCard } from '@/components/MemberCard'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main>
      <Heading>{t('title')}</Heading>
      <MemberCard
        name='BagheraJones'
        channel={{ type: 'twitch', href: 'https://twitch.tv/bagherajones' }}
        characterUrl='/baghera-character.jpg'
        profileUrl='/baghera-jones.jpg'
        flag={{ src: 'ch-flag.svg', alt: 'Switzerland' }}
        languages={['FR', 'EN']}
        socials={[
          { type: 'twitter', href: 'https://twitter.com/Baghera__Jones' },
          { type: 'youtube', href: 'https://youtube.com/@BagheraJonesLive' },
        ]}
        isLive={false}
      />
    </main>
  )
}
