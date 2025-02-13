type PlayerContainerProps = {
  children?: React.ReactNode | React.ReactNode[]
}

export function PlayerContainer({ children }: PlayerContainerProps) {
  return (
    <div data-js='slide' className='flex flex-col md:flex-row'>
      <div className='bg-main-red aspect-video w-full lg:max-h-105' />

      {children}
    </div>
  )
}
