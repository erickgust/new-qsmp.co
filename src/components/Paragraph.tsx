import clsx from 'clsx'
import { ComponentProps } from 'react'

export function Paragraph({
  children,
  className,
}: Pick<ComponentProps<'p'>, 'children' | 'className'>) {
  return (
    <p
      className={clsx(
        'text-base sm:text-sm leading-7 sm:leading-6 text-pretty',
        className,
      )}
    >
      {children}
    </p>
  )
}
