import React from 'react'
import { CirclePlay } from 'lucide-react'
import Button from '../../components/UI/Button'

const Hero = () => {
  return (
    <div className='hero_gradient'>
      <div className='px-[40px] max-w-[1320px] mx-auto'>
        <div className='max-w-[40%] flex flex-col gap-[30px]'>
          <h1 className='font-bold text-[length:var(--2xl-text)] leading-[84px] tracking-tighter'>Make Healthy life with <span className='text-[color:var(--orange)]'>Quality</span> Products</h1>
          <p className='text-[color:var(--grey)]'>Get Best quality and most delicious grocery in the world you can get on our website. Fresh grocery for your family everyday.</p>
          <span className='flex gap-[20px]'>
            <Button size={"md"} bg={"orange"} text={"white"} >Shop Now</Button>
            <Button size={"md"} bg={"transparent"} text={"green"} border={"green"} > <CirclePlay /> Watch Video</Button>
          </span>
          
          <span className='flex flex-col gap-[20px]'>
              <p className='text-[length:var(--md-text)] font-bold'>Download App</p>
              <span className='flex gap-[20px]'>
            <img src="/googlePlay.png" alt="google play" className='w-[192px] aspect-[192/60]' />
            <img src="/appStore.png" alt="app store" className='w-[192px] aspect-[192/60]' />
          </span>
          </span>
        </div>
      </div>
      <img src="/heroImage.png" alt="heroImage" className='h-[80%] absolute right-[15%] bottom-[2%]' />
    </div>
  )
}

export default Hero