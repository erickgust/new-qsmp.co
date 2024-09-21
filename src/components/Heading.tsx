import clsx from 'clsx'
import { ComponentProps } from 'react'

type HeadingProps = Pick<ComponentProps<'h1'>, 'children' | 'className'>

export function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={clsx(
        'text-balance font-pixel text-2.5xl font-bold leading-8 uppercase',
        className,
      )}
    >
      {children}
    </h1>
  )
}
