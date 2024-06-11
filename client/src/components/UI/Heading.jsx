import React from 'react'

export const Heading2 = ({children}) => {
  return (
    <h2 className='font-bold text-[length:var(--xl-text)]'>{children}</h2>
  )
}

export const Heading3 = ({children}) => {
  return (
    <h2 className='font-bold text-[length:var(--lg-text)]'>{children}</h2>
  )
}
