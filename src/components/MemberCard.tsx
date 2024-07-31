import { BroadcastIcon } from '@/assets/icons/Broadcast'
import clsx from 'clsx'
import Image from 'next/image'
import { ComponentProps, ReactNode } from 'react'

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
          <strong className='text-main-dark-blue font-normal text-2xl sm:text-xl'>
            BagheraJones
          </strong>
        </div>

        <div className='button-actions flex gap-4'>
          <button>X</button>
          <button>YT</button>
          <button>Twitch</button>
        </div>
      </div>
    </article>
  )
}
