import { GroupIcon } from '@/assets/icons/Group'
import { LanguageIcon } from '@/assets/icons/Language'
import { ExternalLink } from '@/components/Button'
import { Paragraph } from '@/components/Paragraph'
import clsx from 'clsx'
import Image from 'next/image'

type TagProps = {
  children: React.ReactNode
} & Pick<React.ComponentProps<'div'>, 'className'>

function Tag({ children, className }: TagProps) {
  return (
    <div
      className={clsx(
        'inline-flex px-3.5 gap-2 py-1 text-sm leading-6 text-main-light-blue',
        'sm:text-xs sm:leading-4 sm:font-medium sm:px-3 sm:gap-1',
        'items-center [&>svg]:size-4.5 sm:[&>svg]:size-3.5',
        className,
      )}
    >
      {children}
    </div>
  )
}

type StreamDescriptionProps = {
  isLive: boolean
  description: string
  viewCount: number
  language: string
  name: string
  url: string
  image: string
}

export function StreamDescription({
  isLive,
  description,
  viewCount,
  language,
  name,
  url,
  image,
}: StreamDescriptionProps) {
  return (
    <div className='flex flex-col gap-6 p-8 bg-light-blue-pattern sm:max-w-75 sm:h-105'>
      <div className='flex items-center gap-4'>
        <Image src={image} width={80} height={80} className='size-10' alt='' />
        <strong className='text-main-dark-blue font-normal text-xl'>
          {name}
        </strong>
      </div>

      <div
        data-live={isLive}
        className='hidden data-[live=true]:flex flex-wrap gap-2'
      >
        <Tag className='bg-main-red'>
          <span>LIVE</span>
        </Tag>
        <Tag className='bg-main-dark-blue'>
          <GroupIcon />
          <span>{viewCount}</span>
        </Tag>
        <Tag className='bg-main-dark-blue'>
          <LanguageIcon />
          <span>{language}</span>
        </Tag>
      </div>

      <Paragraph className='text-secondary-dark-grey mb-auto'>
        {description}
      </Paragraph>

      <ExternalLink
        colors={isLive ? 'red' : 'purple'}
        className='self-end'
        href={url}
      >
        {isLive ? 'See live' : 'Watch video'}
      </ExternalLink>
    </div>
  )
}
