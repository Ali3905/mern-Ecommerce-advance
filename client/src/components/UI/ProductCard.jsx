import React from 'react'
import Button from './Button'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductCard = ({ coverImage, title, displayPrice, sellingPrice, onClick }) => {
  return (
    <div className='w-[230px] border flex flex-col gap-[10px] rounded-[10px] overflow-hidden'>
      <Link to={"/product"}><img src={coverImage} alt="product" height={119} width={103} className='w-full h-[119px]' /></Link>
      <div className=' px-[18px] py-[23px] flex flex-col gap-[10px]'>

        <Link to={"/product"} className='font-bold text-[length:var(--xs-text)]'>{title}</Link>
        <span className='flex flex-col'>
          <p className='line-through text-[color:var(--orange)] text-[length:var(--xs-text)]'>{displayPrice} $</p>
          <p className='text-[color:var(--green)] text-[length:var(--md-text)] font-semibold'>{sellingPrice} $</p>
        </span>
        <Button text={"orange"} border={"orange"} bg={"transparent"} size={"sm"} > <ShoppingCart /> Add to Cart </Button>
      </div>
    </div>
  )
}

export default ProductCard