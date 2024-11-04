'use client'

import { Section } from '@/components/Section'
import { Navigation } from './Navigation'
import { Heading } from '@/components/Heading'
import { PlayerContainer } from './Player'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { useTweenFactor } from './hooks/useTweenFactor'
import { PlayerDesc } from './PlayerDesc'
import { IconButton } from '@/components/Button'
import { ArrowForward } from '@/assets/icons/ArrowForward'
import { usePrevNextButtons } from './hooks/usePrevNextButtons'

export function Streams() {
  const [emblaRef, api] = useEmblaCarousel({
    loop: true,
    align: 'center',
  })
  const { setTweenFactor, setTweenNodes, tweenScale } = useTweenFactor(0.14)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    align: 'center',
    breakpoints: {
      '(min-width: 640px)': { align: 'start' },
    },
    dragFree: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(api)

  const items = Array.from({ length: 10 }, () => ({
    image: '/baghera-jones.jpg',
    name: 'Baghera Jones',
    url: 'https://twitch.tv/bagherajones',
  }))

  const onThumbClick = useCallback(
    (index: number) => {
      if (!api || !emblaThumbsApi) return
      api.scrollTo(index)
    },
    [api, emblaThumbsApi],
  )

  const onSelect = useCallback(() => {
    if (!api || !emblaThumbsApi) return

    setSelectedIndex(api.selectedScrollSnap())
    emblaThumbsApi.scrollTo(api.selectedScrollSnap())
  }, [api, emblaThumbsApi])

  useEffect(() => {
    if (!api) return

    setTweenNodes(api)
    setTweenFactor(api)
    tweenScale(api)

    onSelect()

    api
      .on('select', onSelect)
      .on('reInit', onSelect)
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [api, onSelect, setTweenFactor, setTweenNodes, tweenScale])

  return (
    <Section className='lg:!px-0'>
      <div className='flex flex-col'>
        <div className='max-w-screen-lg w-full lg:mx-8 self-center'>
          <Heading>watch the members pov!</Heading>
        </div>

        <div className='max-w-screen-lg w-full lg:mx-8 self-center md:mt-6 max-md:order-last relative px-10 md:px-0 flex max-md:justify-center items-center'>
          <div
            ref={emblaThumbsRef}
            className='overflow-hidden select-none px-3 md:px-1.5 md:-ml-1.5'
          >
            <Navigation
              items={items}
              selectedIndex={selectedIndex}
              onSelectedIndex={onThumbClick}
            />
          </div>

          <IconButton
            icon={<ArrowForward className='rotate-180' />}
            className='absolute left-0 z-10 md:-bottom-56 lg:-bottom-64 bottom-1/2 max-md:translate-y-1/2 md:translate-x-4 min-[1200px]:-translate-x-14'
            colors='dark'
            onClick={onPrevButtonClick}
          />
          <IconButton
            icon={<ArrowForward />}
            className='absolute right-0 z-10 md:-bottom-56 lg:-bottom-64 bottom-1/2 max-md:translate-y-1/2 md:-translate-x-4 min-[1200px]:translate-x-14'
            colors='dark'
            onClick={onNextButtonClick}
          />
        </div>

        <div className='overflow-hidden my-10 sm:my-8' ref={emblaRef}>
          <div className='flex'>
            {items.map((item, i) => (
              <div
                key={i}
                data-selected={selectedIndex === i}
                className='group min-w-0 flex-grow-0 flex-shrink-0 basis-full lg:basis-[1080px] select-none'
              >
                <PlayerContainer>
                  <PlayerDesc
                    image={item.image}
                    name={item.name}
                    url={item.url}
                    type='video'
                    description='AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                  />
                </PlayerContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
