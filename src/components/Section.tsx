import clsx from 'clsx'
import { ComponentProps } from 'react'

type SectionProps = Pick<ComponentProps<'section'>, 'children' | 'className'>

export function Section({ children, className }: SectionProps) {
  return (
    <section className={clsx('px-8 py-14 sm:py-16', className)}>
      {children}
    </section>
  )
}
