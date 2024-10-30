import { useCallback, useRef } from 'react'
import { EmblaEventType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

export function useTweenFactor(base: number) {
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const setTweenNodes = useCallback(
    (emblaApi: ReturnType<typeof useEmblaCarousel>[1]): void => {
      if (!emblaApi) return

      tweenNodes.current = emblaApi.slideNodes().map((node) => {
        return node.querySelector('[data-js="slide"]') as HTMLElement
      })
    },
    [],
  )

  const setTweenFactor = useCallback(
    (emblaApi: ReturnType<typeof useEmblaCarousel>[1]) => {
      if (!emblaApi) return

      tweenFactor.current = base * emblaApi.scrollSnapList().length
    },
    [base],
  )

  const tweenScale = useCallback(
    (
      emblaApi: ReturnType<typeof useEmblaCarousel>[1],
      eventName?: EmblaEventType,
    ) => {
      if (!emblaApi) return

      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    [],
  )
  return { setTweenNodes, setTweenFactor, tweenScale }
}
