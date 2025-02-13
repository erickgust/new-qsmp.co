'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useTweenFactor } from './hooks/useTweenFactor'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { usePrevNextButtons } from './hooks/usePrevNextButtons'
import { IconButton } from '@/components/Button'
import { ArrowForward } from '@/assets/icons/ArrowForward'

type CarouselRef = ReturnType<typeof useEmblaCarousel>[0]
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]

type CarouselContextProps = {
  carouselRef: CarouselRef
  carouselApi: CarouselApi
  thumbsApi: CarouselApi
  thumbsRef: CarouselRef
  selectedIndex: number
  onThumbClick: (index: number) => void
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

const CarouselContext = createContext<CarouselContextProps | null>(null)

export function useCarousel() {
  const context = useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

type CarouselProps = {
  children: React.ReactNode | React.ReactNode[]
}

export function Carousel({ children }: CarouselProps) {
  const [emblaRef, api] = useEmblaCarousel({
    loop: true,
    // align: 'center',
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
    <CarouselContext.Provider
      value={{
        carouselRef: emblaRef,
        carouselApi: api,
        thumbsApi: emblaThumbsApi,
        thumbsRef: emblaThumbsRef,
        selectedIndex,
        onThumbClick,
        onPrevButtonClick,
        onNextButtonClick,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

export function CarouselPrevious() {
  const { onPrevButtonClick } = useCarousel()

  return (
    <IconButton
      icon={<ArrowForward className='rotate-180' />}
      className='absolute left-0 z-10 md:-bottom-56 lg:-bottom-64 bottom-1/2 max-md:translate-y-1/2 md:translate-x-4 min-[1200px]:-translate-x-14'
      colors='dark'
      onClick={onPrevButtonClick}
    />
  )
}

export function CarouselNext() {
  const { onNextButtonClick } = useCarousel()

  return (
    <IconButton
      icon={<ArrowForward />}
      className='absolute right-0 z-10 md:-bottom-56 lg:-bottom-64 bottom-1/2 max-md:translate-y-1/2 md:-translate-x-4 min-[1200px]:translate-x-14'
      colors='dark'
      onClick={onNextButtonClick}
    />
  )
}

export function CarouselItem({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) {
  const { selectedIndex } = useCarousel()
  return (
    <div
      data-selected={selectedIndex === index}
      className='group min-w-0 flex-grow-0 flex-shrink-0 basis-full lg:basis-[1080px] select-none transform-gpu'
    >
      {children}
    </div>
  )
}

export function CarouselContent({ children }: { children: React.ReactNode }) {
  const { carouselRef } = useCarousel()

  return (
    <div ref={carouselRef} className='overflow-hidden my-10 sm:my-8 md:mb-0'>
      {children}
    </div>
  )
}

export function ThumbContent({ children }: { children: React.ReactNode }) {
  const { thumbsRef } = useCarousel()

  return (
    <div
      ref={thumbsRef}
      className='overflow-hidden select-none px-3 md:px-1.5 md:-ml-1.5'
    >
      {children}
    </div>
  )
}
