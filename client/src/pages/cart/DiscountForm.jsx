import React, { useState } from 'react'
import Button from '../../components/UI/Button'

const DiscountForm = ({ isVisible, setIsVisible }) => {
  const [coupon, setCoupon] = useState("")
  return (
    <form className={`${isVisible ? "h-full visible" : "h-0 invisible "} flex flex-col gap-[20px] transition-all `}>
      <input type="text" placeholder='Enter the coupon code' value={coupon} onChange={e => setCoupon(e.target.value)} className='border-2 p-[16px] rounded-[10px] outline-none' />
      <Button type={"submit"} bg={"orange"} text={"white"} onClick={() => setIsVisible(prev => !prev)} >Apply</Button>
    </form>
  )
}

export default DiscountForm