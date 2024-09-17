import Image from 'next/image'

export function Footer() {
  return (
    <section className='flex items-center justify-center py-8 gap-4 bg-main-dark-blue text-white'>
      <Image
        src='/footer-studios.png'
        alt='Quackity Studios Logo'
        width={50}
        height={50}
        className='size-7 sm:size-6'
      />

      <p className='font-pixel text-base sm:text-sm'>
        Powered by <strong>Quackity Studios</strong>
      </p>
    </section>
  )
}
