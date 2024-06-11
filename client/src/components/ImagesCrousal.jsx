import axios from 'axios'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/bundle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImagesCrousal = ({ images, setSelectedImage }) => {
    return (
        <div className='basis-[10%] order-2 sm:order-[unset] max-w-[95%] max-h-[55vh] flex gap-8 items-center sm:flex-col relative sm:py-[60px]'>
            <button className='prev sm:w-[50px] border p-2 rounded-md cursor-pointe sm:rotate-90 aspect-square sm:absolute top-0'><ChevronLeft /></button>
            {/* <div> */}
            <Swiper
                spaceBetween={5}
                slidesPerView={images?.length<4?images?.length:4}
                modules={[Navigation, Pagination]}
                loop={true}
                navigation={{nextEl : ".next", prevEl : ".prev"}}
                direction='horizontal'
                breakpoints={{
                    640 : {
                        direction : "vertical"
                    }
                }}
                // direction='vertical'
            >
                {images?.map((img) => {
                    return <SwiperSlide className='border rounded-md cursor-pointer'>
                        <img src={axios.defaults.baseURL + img} width={63} height={63} alt="product"  onClick={() => setSelectedImage(img)} />
                    </SwiperSlide>
                })}
            </Swiper>
            {/* </div> */}
            <button className='next sm:w-[50px]  aspect-square border p-2 rounded-md cursor-pointer sm:rotate-90 sm:absolute bottom-0'><ChevronRight /></button>
        </div>
    )
}

export default ImagesCrousal