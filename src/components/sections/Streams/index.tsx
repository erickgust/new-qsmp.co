'use client'

import { Section } from '@/components/Section'
import { Navigation } from './Navigation'
import { Heading } from '@/components/Heading'
import { Player } from './Player'

import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'

export function Streams() {
  const [emblaRef, api] = useEmblaCarousel({
    loop: true,
    align: 'start',
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    onSelect()

    api.on('select', onSelect)
  }, [api])

  return (
    <Section>
      <div className='mx-auto'>
        <Heading>watch the members pov!</Heading>

        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex -ml-24'>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                data-selected={selectedIndex === i}
                className='group min-w-0 flex-grow-0 flex-shrink-0 basis-3/5 pl-24 flex flex-col items-start justify-center select-none'
              >
                <Player />
              </div>
            ))}
          </div>
        </div>

        <Navigation
          items={[
            {
              image: '/baghera-jones.jpg',
              name: 'Baghera Jones',
            },
          ]}
          selectedIndex={0}
          onSelectedIndex={() => {}}
        />
      </div>
    </Section>
  )
}
