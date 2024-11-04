import { Section } from '@/components/Section'
import { Navigation } from './Navigation'
import { Heading } from '@/components/Heading'
import { PlayerContainer } from './Player'

import { PlayerDesc } from './PlayerDesc'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ThumbContent,
} from './Carousel'

export function Streams() {
  const items = Array.from({ length: 10 }, () => ({
    image: '/baghera-jones.jpg',
    name: 'Baghera Jones',
    url: 'https://twitch.tv/bagherajones',
  }))

  return (
    <Section className='lg:!px-0'>
      <div className='flex flex-col'>
        <div className='max-w-screen-lg w-full lg:mx-8 self-center'>
          <Heading>watch the members pov!</Heading>
        </div>

        <Carousel>
          <div className='max-w-screen-lg w-full lg:mx-8 self-center md:mt-6 max-md:order-last relative px-10 md:px-0 flex max-md:justify-center items-center'>
            <ThumbContent>
              <Navigation items={items} />
            </ThumbContent>

            <CarouselPrevious />
            <CarouselNext />
          </div>

          <CarouselContent>
            <div className='flex'>
              {items.map((item, i) => (
                <CarouselItem key={i} index={i}>
                  <PlayerContainer>
                    <PlayerDesc
                      image={item.image}
                      name={item.name}
                      url={item.url}
                      type='video'
                      description='AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                    />
                  </PlayerContainer>
                </CarouselItem>
              ))}
            </div>
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  )
}
