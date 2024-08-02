import { ReactNode } from 'react'

type HeadingProps = {
  children: ReactNode
}

export function Heading({ children }: HeadingProps) {
  return (
    <h1 className='text-balance font-pixel text-2.5xl font-bold leading-8 uppercase text-main-dark-blue'>
      {children}
    </h1>
  )
}
