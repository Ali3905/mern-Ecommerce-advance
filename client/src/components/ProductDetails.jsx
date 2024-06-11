import React, { useState } from 'react'
import Button from './UI/Button'
import axios from 'axios'
import useAddProductToCart from '../hooks/useAddProductToCart'
import { ChevronDown } from 'lucide-react'
import ImagesCrousal from './ImagesCrousal'

const ProductDetails = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(product?.images[0])
    const { addProductToCart, isLoading } = useAddProductToCart()
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)

    return (
        <div className='flex gap-[75px] flex-col items-start sm:flex-row'>
            { product?.images.length > 0 ? <ImagesCrousal images={product?.images} setSelectedImage={setSelectedImage} /> : "NO Other images to show" }

            <div className='basis-[40%] h-full '>
                <img src={axios.defaults.baseURL + selectedImage} alt="product" className='w-full aspect-square hover:scale-125 transition-all   bg-blend-multiply cursor-zoom-in' />
            </div>

            <div className='basis-[50%] flex flex-col gap-[10px] justify-between order-3 sm:order-[unset]'>
                <h2 className='text-[length:var(--xl-text)] font-bold leading-[45px]'>{product?.title}</h2>
                <span>
                    <span className='flex gap-[5px]'>
                        <h6 className='font-semibold text-[length:var(--sm-text)]'>About Product</h6><ChevronDown onClick={() => setIsDescriptionVisible(prev => !prev)} className={`sm:hidden block transition-all ${isDescriptionVisible ? "rotate-180" : ""}`}/>
                    </span>
                    <p className={`text-[length:var(--sm-text)] transition-all ${window.width > 640 || isDescriptionVisible ? "translate-y-0 visible h-full" : "-translate-y-[50%] invisible h-0"} `}>{product?.description}</p>
                </span>
                <span className='flex flex-col gap-0'>
                    <p className='line-through font-semibold text-[length:var(--md-text)] text-[color:var(--grey)]'>{product?.displayPrice || product?.price + 100} $</p>
                    <p className='font-bold text-[length:var(--lg-text)] text-[color:var(--green)]'>{product?.sellingPrice || product?.price}$</p>
                </span>
                <Button bg={"orange"} text={"white"} onClick={() => addProductToCart(product._id)} >{isLoading ? "loading..." : "Add to Cart"}</Button>
            </div>
        </div>
    )
}

export default ProductDetails