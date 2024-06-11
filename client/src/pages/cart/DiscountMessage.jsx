import React from 'react'

const DiscountMessage = ({ discountedAmount }) => {
  return (
    <div className='border border-[color:var(--light-grey)] rounded-md bg-[color:var(--light-green)] py-[10px] flex items-center justify-center font-medium'>
      You saved {discountedAmount} on this order
    </div>
  )
}

export default DiscountMessage
