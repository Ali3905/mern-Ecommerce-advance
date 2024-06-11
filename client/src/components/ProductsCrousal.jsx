import React from 'react'
import ProductCard from './UI/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/bundle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductsCrousal = ({ products }) => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='self-end flex gap-2'>
            <button className='p-2 border rounded-full product-prev'><ChevronLeft /></button>
            <button className='p-2 border rounded-full product-next'><ChevronRight /></button>
        </div>
        <Swiper
        spaceBetween={2}
        slidesPerView={1.5}
        modules={[Navigation]}
        loop={true}
        navigation={{nextEl : ".product-next", prevEl : ".product-prev"}}
        breakpoints={{
            640 : {
                slidesPerView : 5,
            }
        }}
        className='max-w-full'
        >
            {products?.map((product)=>{
                return <SwiperSlide key={product._id}>
                    <ProductCard product={product} />
                </SwiperSlide>
            })}
        </Swiper>
    </div>
  )
}

export default ProductsCrousal