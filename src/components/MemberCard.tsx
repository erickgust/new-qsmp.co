import { BroadcastIcon } from '@/assets/icons/Broadcast'
import clsx from 'clsx'
import Image from 'next/image'
import { ComponentProps, ReactNode } from 'react'
import { IconLink, SocialLink } from './Button'

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
          <IconLink
            colors='twitter'
            size='large'
            icon={
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='.Logo'>
                  <path
                    id='Vector'
                    d='M20.5883 5.50008C19.8825 5.82091 19.1216 6.03175 18.3333 6.13258C19.14 5.64675 19.7633 4.87675 20.0566 3.95091C19.2958 4.40925 18.4525 4.73008 17.5633 4.91341C16.8391 4.12508 15.8216 3.66675 14.6666 3.66675C12.5125 3.66675 10.7525 5.42675 10.7525 7.59925C10.7525 7.91091 10.7891 8.21342 10.8533 8.49758C7.58995 8.33258 4.68412 6.76508 2.74995 4.39091C2.41079 4.96841 2.21829 5.64675 2.21829 6.36175C2.21829 7.72758 2.90579 8.93758 3.96912 9.62508C3.31829 9.62508 2.71329 9.44175 2.18162 9.16675V9.19425C2.18162 11.1009 3.53829 12.6959 5.33495 13.0534C4.75812 13.2113 4.15254 13.2332 3.56579 13.1176C3.81476 13.899 4.30236 14.5828 4.96005 15.0728C5.61774 15.5627 6.41245 15.8343 7.23245 15.8492C5.84245 16.9497 4.11945 17.5445 2.34662 17.5359C2.03495 17.5359 1.72329 17.5176 1.41162 17.4809C3.15329 18.5992 5.22495 19.2501 7.44329 19.2501C14.6666 19.2501 18.6358 13.2551 18.6358 8.05758C18.6358 7.88341 18.6358 7.71841 18.6266 7.54425C19.3966 6.99425 20.0566 6.29758 20.5883 5.50008Z'
                    fill='white'
                  />
                </g>
              </svg>
            }
          />
          <IconLink
            colors='youtube'
            size='large'
            icon={
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='.Logo'>
                  <path
                    id='Vector'
                    d='M9.16683 13.7499L13.9243 10.9999L9.16683 8.24992V13.7499ZM19.7635 6.57242C19.8827 7.00325 19.9652 7.58075 20.0202 8.31409C20.0843 9.04742 20.1118 9.67992 20.1118 10.2299L20.1668 10.9999C20.1668 13.0074 20.0202 14.4833 19.7635 15.4274C19.5343 16.2524 19.0027 16.7841 18.1777 17.0133C17.7468 17.1324 16.9585 17.2149 15.7485 17.2699C14.5568 17.3341 13.466 17.3616 12.4577 17.3616L11.0002 17.4166C7.15933 17.4166 4.76683 17.2699 3.82266 17.0133C2.99766 16.7841 2.466 16.2524 2.23683 15.4274C2.11766 14.9966 2.03516 14.4191 1.98016 13.6858C1.916 12.9524 1.8885 12.3199 1.8885 11.7699L1.8335 10.9999C1.8335 8.99242 1.98016 7.51659 2.23683 6.57242C2.466 5.74742 2.99766 5.21575 3.82266 4.98659C4.2535 4.86742 5.04183 4.78492 6.25183 4.72992C7.4435 4.66575 8.53433 4.63825 9.54266 4.63825L11.0002 4.58325C14.841 4.58325 17.2335 4.72992 18.1777 4.98659C19.0027 5.21575 19.5343 5.74742 19.7635 6.57242Z'
                    fill='white'
                  />
                </g>
              </svg>
            }
          />

          <SocialLink
            colors='twitch'
            className='flex-1 uppercase'
            size='large'
            icon={
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='.Logo'>
                  <path
                    id='Vector'
                    d='M10.6699 5.43575H11.9807V9.35909H10.6699M14.2724 5.43575H15.5832V9.35909H14.2724M6.41654 1.83325L3.14404 5.10575V16.8941H7.06738V20.1666L10.349 16.8941H12.9615L18.8557 10.9999V1.83325M17.5449 10.3491L14.9324 12.9616H12.3107L10.019 15.2533V12.9616H7.06738V3.14409H17.5449V10.3491Z'
                    fill='white'
                  />
                </g>
              </svg>
            }
            href='https://www.twitch.tv/bagherajones'
          >
            Twitch
          </SocialLink>
        </div>
      </div>
    </article>
  )
}
