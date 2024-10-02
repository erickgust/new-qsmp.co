import { useTranslations } from 'next-intl'
import { ExternalLink } from '../Button'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { Section } from '../Section'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import { Tweet } from '@/lib/Tweet'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export function Tweets() {
  const t = useTranslations('tweets')

  return (
    <Section className='overflow-y-hidden md:h-[36.75rem]'>
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row md:items-center'>
        <div className='flex-1 md:max-h-[calc(36.75rem-8rem)] mt-10 md:mt-0'>
          <div
            data-theme='light'
            className={clsx(
              inter.variable,
              'columns-1 lg:columns-2 gap-7 flex md:block justify-center',
            )}
          >
            <Tweet id='1755318541778075702' />
            <div className='max-md:hidden'>
              <Tweet id='1749962949291081766' />
              <Tweet id='1743678987983835566' />
              <Tweet id='1732570074412646520' />
            </div>
          </div>
        </div>

        <div className='text-main-dark-blue flex-1 max-h-fit md:pl-8'>
          <div className='md:max-w-sm w-fit md:ml-auto'>
            <Heading className='mb-6'>{t('title')}</Heading>
            <Paragraph className='text-secondary-dark-grey'>
              {t('desc-1')}
            </Paragraph>
            <Paragraph className='text-secondary-dark-grey mt-2'>
              {t('desc-2')}
            </Paragraph>

            <div className='mt-8'>
              <ExternalLink
                href='https://x.com/QuackityStudios'
                colors='twitter'
              >
                {t('button')}
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
