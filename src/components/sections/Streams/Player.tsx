import { PlayerDesc } from './PlayerDesc'

export function Player() {
  return (
    <div data-js='slide' className='flex flex-col gap-6 my-10 md:flex-row'>
      <div className='bg-main-red aspect-video w-full lg:max-h-105' />

      <PlayerDesc
        description='AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        image='/baghera-jones.jpg'
        type='video'
        name='Baghera Jones'
        url='https://twitch.tv/bagherajones'
      />
    </div>
  )
}
