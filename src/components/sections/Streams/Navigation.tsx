import Image from 'next/image'

type LiveItemProps = {
  isSelected?: boolean
  alt: string
  src: string
  onClick?: () => void
}

function LiveItem({ isSelected = false, alt, src, onClick }: LiveItemProps) {
  return (
    <button
      data-selected={isSelected}
      onClick={onClick}
      className='size-10 ring-main-red max-sm:data-[selected=true]:size-12 data-[selected=true]:ring-6 sm:data-[selected=true]:ring-5'
    >
      <Image src={src} alt={alt} width={80} height={80} />
    </button>
  )
}

type NavigationProps = {
  items: {
    name: string
    image: string
  }[]
  selectedIndex: number
  onSelectedIndex: (index: number) => void
}

export function Navigation({
  items,
  selectedIndex,
  onSelectedIndex,
}: NavigationProps) {
  return (
    <div className='flex gap-x-5 sm:gap-x-6 items-center'>
      {items.map((stream, index) => (
        <LiveItem
          key={stream.name}
          alt={stream.name}
          src={stream.image}
          isSelected={selectedIndex === index}
          onClick={() => onSelectedIndex(index)}
        />
      ))}
    </div>
  )
}
