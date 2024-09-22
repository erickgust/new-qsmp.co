import { useTranslations } from 'next-intl'
import { ExternalLink } from '../Button'
import { YouTubeEmbed } from '@next/third-parties/google'
import { ComponentProps } from 'react'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { Section } from '../Section'

const YoutubeLink = ({
  children,
  className,
}: Pick<ComponentProps<'a'>, 'children' | 'className'>) => (
  <ExternalLink
    colors='dark'
    className={className}
    href='https://www.youtube.com/@QSMPInfo/?sub_confirmation=1'
  >
    {children}
  </ExternalLink>
)

export function Updates() {
  const t = useTranslations('updates')

  return (
    <Section className='text-white bg-purple-pattern'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row sm:items-center'>
        <div className='flex-1 sm:pr-6'>
          <div className='md:max-w-sm lg:max-w-md'>
            <Heading className='mb-6 md:max-w-sm'>{t('title')}</Heading>

            <Paragraph>{t('desc-1')}</Paragraph>
            <Paragraph className='mt-2'>{t('desc-2')}</Paragraph>

            <div className='mt-8 max-sm:hidden'>
              <YoutubeLink>{t('button')}</YoutubeLink>
            </div>
          </div>
        </div>

        <div className='w-full max-md:my-10 flex-1'>
          <YouTubeEmbed videoid='KD13fpK25YM' />
        </div>

        <YoutubeLink className='sm:hidden'>{t('button')}</YoutubeLink>
      </div>
    </Section>
  )
}
