import { TwitterIcon } from '@/assets/icons/socials/Twitter'
import { SocialLink } from '../Button'
import { FacebookIcon } from '@/assets/icons/socials/Facebook'
import { InstagramIcon } from '@/assets/icons/socials/Instagram'
import { YoutubeIcon } from '@/assets/icons/socials/Youtube'
import { RedditIcon } from '@/assets/icons/socials/Reddit'
import { TwitchIcon } from '@/assets/icons/socials/Twitch'
import { TiktokIcon } from '@/assets/icons/socials/Tiktok'
import { useTranslations } from 'next-intl'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { Section } from '../Section'

export function Socials() {
  const t = useTranslations('socials')

  return (
    <Section className='text-white bg-blue-pattern'>
      <div className='flex max-md:flex-col max-w-screen-lg mx-auto'>
        <div className='flex-[5] flex flex-col justify-center'>
          <div className='md:pr-6 md:max-w-[40ch]'>
            <Heading className='mb-6'>{t('title')}</Heading>
            <Paragraph>{t('desc-1')}</Paragraph>
            <Paragraph className='mt-2'>{t('desc-2')}</Paragraph>
          </div>
        </div>

        <aside className='max-md:mt-10 flex-[6]'>
          <ul className='flex gap-6 flex-wrap md:justify-end'>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<FacebookIcon color='#1877F2' />}
                href='https://www.facebook.com/qsmpreal/'
              >
                QSMP Facebook
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<InstagramIcon color='#E1306C' />}
                href='https://www.instagram.com/qsmpreal/'
              >
                QSMP Instagram
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<YoutubeIcon color='#FF0000' />}
                href='https://www.youtube.com/@QSMPInfo'
              >
                QSMP Info
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<RedditIcon color='#FF4500' />}
                href='https://www.reddit.com/r/QSMP/'
              >
                r/QSMP
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<TwitchIcon color='#A05FFF' />}
                href='https://www.twitch.tv/qsmp'
              >
                QSMP
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<TiktokIcon color='#000000' />}
                href='https://www.tiktok.com/@qsmpreal'
              >
                QSMP Official
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<TwitterIcon color='#1DA1F2' />}
                href='https://twitter.com/QSMPShop'
              >
                QSMP Shop
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<TiktokIcon color='#000000' />}
                href='https://www.tiktok.com/@qsmpesp'
              >
                QSMP Spanish
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<TiktokIcon color='#000000' />}
                href='https://www.tiktok.com/@qsmpenglish'
              >
                QSMP English
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<TwitterIcon color='#1DA1F2' />}
                href='https://twitter.com/QuackityStudios'
              >
                Quackity Studios
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<TwitterIcon color='#1DA1F2' />}
                href='https://twitter.com/QsmpEN'
              >
                QSMP English
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<TwitterIcon color='#1DA1F2' />}
                href='https://twitter.com/QSMPGlobal'
              >
                QSMP Global
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<TwitterIcon color='#1DA1F2' />}
                href='https://twitter.com/QsmpES'
              >
                QSMP Spanish
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<TwitterIcon color='#1DA1F2' />}
                href='https://twitter.com/QsmpPOR'
              >
                QSMP Portuguese
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<TwitterIcon color='#1DA1F2' />}
                href='https://twitter.com/QsmpFRA'
              >
                QSMP French
              </SocialLink>
            </li>
            <li className='max-sm:w-full'>
              <SocialLink
                icon={<TwitterIcon color='#1DA1F2' />}
                href='https://twitter.com/QSMPEvents'
              >
                QSMP Events
              </SocialLink>
            </li>
          </ul>
        </aside>
      </div>
    </Section>
  )
}
