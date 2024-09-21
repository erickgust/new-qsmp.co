import { useTranslations } from 'next-intl'
import { ExternalLink } from '../Button'
import { YouTubeEmbed } from '@next/third-parties/google'
import { ComponentProps } from 'react'

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
    <section className='text-white bg-purple-pattern px-8 py-14 sm:py-16'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row sm:items-center'>
        <div className='flex-1 sm:pr-6'>
          <div className='md:max-w-sm lg:max-w-md'>
            <h1 className='font-pixel text-2.5xl text-balance font-bold uppercase mb-6 md:max-w-sm'>
              {t('title')}
            </h1>

            <p className='text-base sm:text-sm leading-7 sm:leading-6 text-pretty'>
              {t('desc-1')}
            </p>
            <p className='text-base sm:text-sm leading-7 sm:leading-6 text-pretty mt-2'>
              {t('desc-2')}
            </p>

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
    </section>
  )
}
