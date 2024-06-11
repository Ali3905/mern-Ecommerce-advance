import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import DiscountForm from './DiscountForm'

const Discount = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (

    <div className='border border-[color:var(--light-grey)] rounded-md px-[15px] py-[20px] flex flex-col gap-[20px] overflow-hidden'>
      <div className='flex gap-[15px] items-center justify-center  '>
        <img src="/percent.svg" alt="discount" height={43} className='aspect-square' />
        <p className='text-[length:var(--md-text)] font-medium text-nowrap'>Avail Offers and Coupons</p>
        <ChevronRight onClick={e => setIsVisible(prev => !prev)} />
 
      </div>
      <DiscountForm isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  )
}

export default Discount
