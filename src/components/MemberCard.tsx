import Image from 'next/image'

export function MemberCard() {
  return (
    <article>
      <div>
        <Image
          alt='BagheraJones'
          src='/baghera-jones.jpg'
          width={256}
          height={256}
        />

        <span>Live</span>

        <div>
          <span>FR</span>
          <span>EN</span>
        </div>
      </div>

      <div>
        <span>icon</span>
        <span>BagheraJones</span>
      </div>

      <div className='button-actions'>
        <button>X</button>
        <button>YT</button>
        <button>Twitch</button>
      </div>
    </article>
  )
}
