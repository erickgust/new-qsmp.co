'use client'

import Image from 'next/image'
import { useCarousel } from './Carousel'

type LiveItemProps = {
  isSelected?: boolean
  alt: string
  src: string
  onClick?: () => void
}

function LiveItem({ isSelected = false, alt, src, onClick }: LiveItemProps) {
  return (
    <div
      data-selected={isSelected}
      className='group min-w-0 flex-grow-0 flex-shrink-0 basis-10 max-sm:basis-12 pl-3.5 sm:pl-6 box-content flex justify-center'
    >
      <button
        onClick={onClick}
        className='ring-main-red group-data-[selected=true]:ring-6 sm:group-data-[selected=true]:ring-5 size-10 max-sm:group-data-[selected=true]:size-12 shrink-0'
      >
        <Image src={src} alt={alt} width={80} height={80} quality={100} />
      </button>
    </div>
  )
}

type NavigationProps = {
  items: {
    name: string
    image: string
  }[]
}

export function Navigation({ items }: NavigationProps) {
  const { selectedIndex, onThumbClick } = useCarousel()

  return (
    <div className='flex py-1.5 -ml-5 sm:-ml-6 items-center'>
      {items.map((stream, index) => (
        <LiveItem
          key={index}
          alt={stream.name}
          src={stream.image}
          isSelected={selectedIndex === index}
          onClick={() => onThumbClick(index)}
        />
      ))}
    </div>
  )
}
