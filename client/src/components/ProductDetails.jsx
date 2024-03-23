import React, { useState } from 'react'
import Button from './UI/Button'
import axios from 'axios'

const ProductDetails = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(product?.images[0])
  return (
    <div className='flex gap-[75px]'>
    <ul className='basis-[10%] flex flex-col gap-[27px]'>
        { product?.images.map((img)=>{
            return <li>
                <img src={axios.defaults.baseURL + img} alt="product" width={63} height={63} onClick={()=>setSelectedImage(img)}/>
            </li>
        }) }
    </ul>
    <div className='basis-[40%] h-full '>

    <img src={axios.defaults.baseURL + selectedImage} alt="product" className='w-full aspect-square' />
    </div>
    <div className='basis-[50%] flex flex-col justify-between'>
        <h2 className='text-[length:var(--xl-text)] font-bold leading-[60px]'>{product?.title}</h2>
        <span>
            <h6 className='font-semibold text-[length:var(--sm-text)]'>About Product</h6>
            <p className='text-[length:var(--sm-text)]'>{product?.description}</p>
        </span>
        <span className='flex flex-col gap-0'>
            <p className='line-through font-semibold text-[length:var(--md-text)] text-[color:var(--grey)]'>{product?.displayPrice || product?.price + 100} $</p>
            <p className='font-bold text-[length:var(--lg-text)] text-[color:var(--green)]'>{product?.sellingPrice || product?.price}$</p>
        </span>
        <Button bg={"orange"} text={"white"}>Add to Cart</Button>
    </div>
</div>
  )
}

export default ProductDetails