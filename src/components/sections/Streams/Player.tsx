import { PlayerDesc } from './PlayerDesc'

export function Player() {
  return (
    <div className='flex flex-col gap-6 my-10 md:flex-row'>
      <div className='bg-main-red aspect-video w-full group-data-[selected=true]:lg:max-h-105 lg:max-h-90 min-h-full' />

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
