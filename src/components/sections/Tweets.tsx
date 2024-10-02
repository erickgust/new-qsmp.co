import { useTranslations } from 'next-intl'
import { ExternalLink } from '../Button'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { Section } from '../Section'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import { Tweet } from '@/lib/Tweet'
import { ComponentProps } from 'react'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})

function TweetLink({
  children,
  className,
}: Pick<ComponentProps<'a'>, 'children' | 'className'>) {
  return (
    <ExternalLink
      href='https://x.com/QuackityStudios'
      colors='twitter'
      className={className}
    >
      {children}
    </ExternalLink>
  )
}

export function Tweets() {
  const t = useTranslations('tweets')

  return (
    <Section className='overflow-y-hidden md:h-[36.75rem]'>
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row gap-y-10 max-h-full'>
        <TweetLink className='sm:hidden'>{t('button')}</TweetLink>

        <div className='flex-1 md:mt-0'>
          <div
            data-theme='light'
            className={clsx(
              inter.variable,
              'columns-1 lg:columns-2 flex md:block justify-center *:max-md:hidden [&>div:first-child]:block gap-x-7 space-y-7',
            )}
          >
            <Tweet id='1755318541778075702' />
            <Tweet id='1749962949291081766' />
            <Tweet id='1743678987983835566' />
            <Tweet id='1732570074412646520' />
          </div>
        </div>

        <div className='text-main-dark-blue flex-1 max-h-fit md:pl-8 md:self-center'>
          <div className='md:max-w-sm w-fit md:ml-auto'>
            <Heading className='mb-6'>{t('title')}</Heading>
            <Paragraph className='text-secondary-dark-grey'>
              {t('desc-1')}
            </Paragraph>
            <Paragraph className='text-secondary-dark-grey mt-2'>
              {t('desc-2')}
            </Paragraph>

            <div className='mt-8 max-sm:hidden'>
              <TweetLink>{t('button')}</TweetLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
