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

type PlatformType = 'twitch' | 'youtube' | 'twitter'

type PlatformInfo = {
  type: PlatformType
  href: string
}

function getPlatformIcon(type: PlatformType) {
  switch (type) {
    case 'twitch':
      return <TwitchIcon />
    case 'youtube':
      return <YoutubeIcon />
    case 'twitter':
      return <TwitterIcon />
  }
}

type MemberCardProps = {
  name: string
  isLive?: boolean
  languages: string[]
  characterUrl: string
  profileUrl: string
  flag: {
    src: string
    alt: string
  }
  channel: PlatformInfo
  socials: [PlatformInfo, PlatformInfo?]
}

export function MemberCard(props: MemberCardProps) {
  const {
    name,
    isLive,
    languages,
    characterUrl,
    profileUrl,
    flag,
    channel,
    socials,
  } = props

  const [firstSocial, secondSocial] = socials

  return (
    <article className='w-full sm:max-w-60'>
      <div className='relative h-52'>
        <Image
          alt={'Profile picture of ' + name}
          src={profileUrl}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <Image
          alt={'Character of ' + name}
          src={characterUrl}
          fill
          className='object-cover opacity-0 hover:opacity-100 transition-opacity'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />

        {isLive && (
          <div className='absolute top-6 left-6 sm:top-4 sm:left-4'>
            <LiveTag>Live</LiveTag>
          </div>
        )}

        <div className='flex gap-3 sm:gap-2 absolute bottom-6 left-6 sm:bottom-4 sm:left-4'>
          <Image
            alt={flag.alt}
            src={flag.src}
            width={42}
            height={32}
            className='w-auto h-8 sm:h-6'
          />
          {languages.map((lang) => (
            <LanguageTag key={lang}>{lang}</LanguageTag>
          ))}
        </div>
      </div>

      <div className='p-6 sm:p-4 space-y-6 sm:space-y-4 w-full'>
        <div className='inline-flex gap-2 items-center'>
          {isLive && <BroadcastIcon />}
          <strong className='text-main-dark-blue font-normal text-2.5xl leading-none sm:text-1.5xl'>
            {name}
          </strong>
        </div>

        <div className='button-actions flex gap-4 sm:gap-2'>
          <IconLink
            colors={firstSocial.type}
            size='large'
            icon={getPlatformIcon(firstSocial.type)}
            href={firstSocial.href}
          />

          {secondSocial ? (
            <IconLink
              colors={secondSocial.type}
              size='large'
              icon={getPlatformIcon(secondSocial.type)}
              href={secondSocial.href}
            />
          ) : null}

          <SocialLink
            colors={channel.type}
            className='flex-1 uppercase'
            size='large'
            icon={getPlatformIcon(channel.type)}
            href={channel.href}
          >
            {channel.type}
          </SocialLink>
        </div>
      </div>
    </article>
  )
}
