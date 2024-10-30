'use client'

import { Section } from '@/components/Section'
import { Navigation } from './Navigation'
import { Heading } from '@/components/Heading'
import { Player } from './Player'

import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'
import { useTweenFactor } from './hooks/useTweenFactor'

export function Streams() {
  const [emblaRef, api] = useEmblaCarousel({
    loop: true,
    align: 'center',
  })
  const { setTweenFactor, setTweenNodes, tweenScale } = useTweenFactor(0.14)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    setTweenNodes(api)
    setTweenFactor(api)
    tweenScale(api)

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    onSelect()

    api
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
      .on('select', onSelect)
  }, [api, setTweenFactor, setTweenNodes, tweenScale])

  return (
    <Section className='lg:!px-0'>
      <div className='mx-auto'>
        <Heading>watch the members pov!</Heading>

        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                data-selected={selectedIndex === i}
                className='group min-w-0 flex-grow-0 flex-shrink-0 basis-full lg:basis-[1080px] select-none'
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
