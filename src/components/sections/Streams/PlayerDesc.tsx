import { GroupIcon } from '@/assets/icons/Group'
import { LanguageIcon } from '@/assets/icons/Language'
import { ExternalLink } from '@/components/Button'
import { Paragraph } from '@/components/Paragraph'
import clsx from 'clsx'
import Image from 'next/image'
import { PlayerInfo } from './types'

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

export type PlayerDescProps = PlayerInfo

export function PlayerDesc(props: PlayerDescProps) {
  const { name, url, image, description, type } = props

  const viewCount = 'viewCount' in props ? props.viewCount : 0
  const language = 'language' in props ? props.language : ''

  return (
    <div
      className={clsx(
        'w-full md:max-w-75 ml-6',
        'lg:group-data-[selected=false]:w-0 lg:group-data-[selected=false]:ml-0',
        'lg:group-data-[selected=true]:w-full lg:group-data-[selected=true]:ml-6',
        'lg:group-data-[selected=true]:transition-all lg:group-data-[selected=true]:duration-700',
        'lg:group-data-[selected=false]:transition-all lg:group-data-[selected=false]:duration-300',
      )}
    >
      <div
        className={clsx(
          'flex flex-col gap-6 p-8 bg-light-blue-pattern w-full h-full overflow-hidden box-border',
          'lg:group-data-[selected=false]:opacity-0 lg:group-data-[selected=false]:transition-opacity',
          'lg:group-data-[selected=true]:opacity-100 lg:group-data-[selected=true]:transition-opacity lg:group-data-[selected=true]:duration-500 lg:group-data-[selected=true]:delay-200',
        )}
      >
        <div className='flex items-center gap-4'>
          <Image
            src={image}
            width={80}
            height={80}
            className='size-10'
            alt=''
          />
          <strong className='text-main-dark-blue font-normal text-xl'>
            {name}
          </strong>
        </div>

        <div
          data-type={type}
          className='hidden data-[type=livestream]:flex flex-wrap gap-2'
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

        <Paragraph className='text-secondary-dark-grey mb-auto break-all line-clamp-6'>
          {description}
        </Paragraph>

        <ExternalLink
          colors={type === 'livestream' ? 'red' : 'purple'}
          className='self-end'
          href={url}
        >
          {type === 'livestream' ? 'See live' : 'Watch video'}
        </ExternalLink>
      </div>
    </div>
  )
}
