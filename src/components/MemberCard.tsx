import { BroadcastIcon } from '@/assets/icons/Broadcast'
import clsx from 'clsx'
import Image from 'next/image'
import { ComponentProps, ReactNode } from 'react'
import { IconLink, SocialLink } from './Button'
import { YoutubeIcon } from '@/assets/icons/socials/Youtube'
import { TwitterIcon } from '@/assets/icons/socials/Twitter'
import { TwitchIcon } from '@/assets/icons/socials/Twitch'

type TagProps = {} & ComponentProps<'span'>

function Tag({ children, className }: TagProps) {
  return (
    <span
      className={clsx(
        'py-1 flex items-center px-3 text-sm sm:text-xs sm:px-2 font-medium uppercase max-w-min h-8 sm:h-6',
        className,
      )}
    >
      {children}
    </span>
  )
}

function LanguageTag({ children }: { children: ReactNode }) {
  return (
    <Tag className='bg-main-dark-blue text-main-light-blue'>{children}</Tag>
  )
}

function LiveTag({ children }: { children: ReactNode }) {
  return <Tag className='bg-main-red text-white'>{children}</Tag>
}

export function MemberCard() {
  return (
    <article className='w-full sm:max-w-60'>
      <div className='relative h-52'>
        <Image
          alt='BagheraJones'
          src='/baghera-jones.jpg'
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />

        <div className='absolute top-6 left-6 sm:top-4 sm:left-4'>
          <LiveTag>Live</LiveTag>
        </div>

        <div className='flex gap-3 sm:gap-2 absolute bottom-6 left-6 sm:bottom-4 sm:left-4'>
          <Image
            alt='Switzerland'
            src='/switzerland.svg'
            width={42}
            height={32}
            className='w-auto h-8 sm:h-6'
          />
          <LanguageTag>FR</LanguageTag>
          <LanguageTag>EN</LanguageTag>
        </div>
      </div>

      <div className='p-6 sm:p-4 space-y-6 sm:space-y-4 w-full'>
        <div className='inline-flex gap-2 items-center'>
          <BroadcastIcon />
          <strong className='text-main-dark-blue font-normal text-2.5xl leading-none sm:text-1.5xl'>
            BagheraJones
          </strong>
        </div>

        <div className='button-actions flex gap-4 sm:gap-2'>
          <IconLink colors='twitter' size='large' icon={<TwitterIcon />} />
          <IconLink colors='youtube' size='large' icon={<YoutubeIcon />} />

          <SocialLink
            colors='twitch'
            className='flex-1 uppercase'
            size='large'
            icon={<TwitchIcon />}
            href='https://www.twitch.tv/bagherajones'
          >
            Twitch
          </SocialLink>
        </div>
      </div>
    </article>
  )
}
