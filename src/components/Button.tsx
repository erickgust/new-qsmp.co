import { External } from '@/assets/icons/External'
import { cva, cx, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const button = cva(
  [
    'text-base sm:text-xs',
    'font-bold',
    '[&>span]:gap-x-1',
    '[&>span]:inline-flex',
    '[&>span]:items-center',
    'cursor-pointer',
    'sm:mt-1.5',
    'sm:[&>span]:-translate-y-1.5',
    'sm:[&:hover>span]:-translate-y-1',
    'font-pixel',
    'no-underline',
    '[&>span]:leading-none',
    '[&>span]:w-full',
    '[&_svg]:min-w-[1.125rem]',
    '[&_svg]:min-h-[1.125rem]',
  ],
  {
    variants: {
      intent: {
        primary: [
          '[&>span]:py-4 sm:[&>span]:py-2',
          '[&>span]:px-6 sm:[&>span]:px-4',
          '[&>span]:justify-between',
          'w-full sm:w-auto',
        ],
        icon: ['[&>span]:p-4', 'sm:[&>span]:p-2'],
        social: [
          '[&>span]:px-6',
          'sm:[&>span]:px-4',
          '[&>span]:justify-center',
          '[&>span]:gap-x-3 sm:[&>span]:gap-x-2',
          '[&>span]:py-3.5 sm:[&>span]:py-2',
        ],
      },
      colors: {
        white: [
          'text-[#1F1E33]',
          'bg-[#D7DFEC]',
          '[&>span]:bg-[#F0F6FF]',
          'sm:[&>span]:bg-white',
          'sm:[&:hover>span]:bg-[#D7DFEC]',
        ],
        light: [
          'text-[#1F1E33]',
          'bg-[#D7DFEC]',
          '[&>span]:bg-[#F0F6FF]',
          'sm:[&>span]:bg-[#F0F6FF]',
          'sm:[&:hover>span]:bg-[#D7DFEC]',
        ],
        red: [
          'text-white',
          'bg-[#EB3939]',
          '[&>span]:bg-[#FF3D3D]',
          'sm:[&>span]:bg-[#FF4B4B]',
          'sm:[&:hover>span]:bg-[#EB3939]',
        ],
        purple: [
          'text-white',
          'bg-[#604DD8]',
          '[&>span]:bg-[#604DD8]',
          'sm:[&>span]:bg-[#725EF4]',
          'sm:[&:hover>span]:bg-[#604DD8]',
        ],
        yellow: [
          'text-[#1F1E33]',
          'bg-[#EBC832]',
          '[&>span]:bg-[#FFDB43]',
          'sm:[&>span]:bg-[#FFE058]',
          'sm:[&:hover>span]:bg-[#EBC832]',
        ],
        blue: [
          'text-white',
          'bg-[#00ADFF]',
          '[&>span]:bg-[#00ADFF]',
          'sm:[&>span]:bg-[#47C4FF]',
          'sm:[&:hover>span]:bg-[#00ADFF]',
        ],
        dark: [
          'text-white',
          'bg-[#1F1E33]',
          '[&>span]:bg-[#1F1E33]',
          'sm:[&>span]:bg-[#35334C]',
          'sm:[&:hover>span]:bg-[#1F1E33]',
        ],
        twitter: [
          'text-white',
          'bg-[#1DA1F2]',
          '[&>span]:bg-[#1DA1F2]',
          'sm:[&>span]:bg-[#48BAFF]',
          'sm:[&:hover>span]:bg-[#1DA1F2]',
        ],
        twitch: [
          'text-white',
          'bg-[#9146FF]',
          '[&>span]:bg-[#9146FF]',
          'sm:[&>span]:bg-[#A05FFF]',
          'sm:[&:hover>span]:bg-[#9146FF]',
        ],
        youtube: [
          'text-white',
          'bg-[#FF0000]',
          '[&>span]:bg-[#FF0000]',
          'sm:[&>span]:bg-[#FF4343]',
          'sm:[&:hover>span]:bg-[#FF0000]',
        ],
        afreeca: [
          'text-white',
          'bg-[#399BFF]',
          '[&>span]:bg-[#399BFF]',
          'sm:[&>span]:bg-[#5BACFF]',
          'sm:[&:hover>span]:bg-[#399BFF]',
        ],
        naver: [
          'text-white',
          'bg-[#00BF74]',
          '[&>span]:bg-[#00BF74]',
          'sm:[&>span]:bg-[#00E289]',
          'sm:[&:hover>span]:bg-[#00BF74]',
        ],
      },
      size: {
        large: [
          '[&_svg]:min-w-[1.375rem]',
          '[&_svg]:min-h-[1.375rem]',
          '[&_svg]:size-[1.375rem] sm:[&_svg]:size-[1.125rem]',
        ],
      },
    },
    defaultVariants: {
      intent: 'primary',
      colors: 'white',
    },
    compoundVariants: [
      {
        intent: 'icon',
        size: 'large',
        className: '[&>span]:py-3.5 [&>span]:px-3.5 sm:[&>span]:p-2',
      },
    ],
  },
)

interface ExternalLinkProps
  extends ComponentProps<'a'>,
    VariantProps<typeof button> {}

export function ExternalLink({
  href,
  children,
  colors,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      {...props}
      className={cx(button({ colors }), 'uppercase', className)}
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>
        {children}
        <External width={18} height={18} />
      </span>
    </a>
  )
}

interface IconLinkProps
  extends ComponentProps<'a'>,
    VariantProps<typeof button> {
  icon: React.ReactNode
}

export function IconLink({ icon, colors, size, ...props }: IconLinkProps) {
  return (
    <a
      {...props}
      className={button({ colors, intent: 'icon', size })}
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>{icon}</span>
    </a>
  )
}

interface ChannelLinkProps
  extends ComponentProps<'a'>,
    VariantProps<typeof button> {
  icon: React.ReactNode
}

export function ChannelLink({
  icon,
  colors,
  size,
  children,
  className,
  href,
  ...props
}: ChannelLinkProps) {
  return (
    <a
      href={href}
      {...props}
      className={cx(button({ colors, size, intent: 'social' }), className)}
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>
        {icon}
        <span>{children}</span>
      </span>
    </a>
  )
}

interface SocialLinkProps
  extends ComponentProps<'a'>,
    VariantProps<typeof button> {
  icon: React.ReactNode
}

export function SocialLink({
  icon,
  href,
  children,
  className,
  ...props
}: SocialLinkProps) {
  return (
    <a
      href={href}
      {...props}
      className={cx(
        button({ colors: 'white', size: 'large', intent: 'social' }),
        'flex sm:inline-flex',
        className,
      )}
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>
        {icon}
        <span>{children}</span>
        <External className='sm:hidden ml-auto' />
      </span>
    </a>
  )
}
