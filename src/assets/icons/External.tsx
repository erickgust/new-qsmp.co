import { SVGProps } from 'react'

export const External = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={22}
    height={22}
    fill='none'
    viewBox='0 0 22 22'
    focusable='false'
    {...props}
  >
    <path
      fill='currentColor'
      d='m5.867 16.5-1.284-1.283 8.8-8.8H5.5V4.583h11v11h-1.833V7.7l-8.8 8.8Z'
    />
  </svg>
)
