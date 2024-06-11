import React from 'react'
import Button from './Button'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import useAddProductToCart from '../../hooks/useAddProductToCart'
import axios from 'axios'

const ProductCard = ({ product }) => {

  const { addProductToCart, isLoading } = useAddProductToCart()

  return (
    <div className='sm:max-w-[230px] max-w-[200px] border flex flex-col gap-y-[10px] rounded-[10px] overflow-hidden'>
      <Link to={`/product/${product._id}`}><img src={axios.defaults.baseURL + product.images[0]} alt="product" height={119} width={103} className='w-full h-[119px]' /></Link>
      <div className=' px-[5px] py-[23px] flex flex-col gap-y-[10px]'>

        <Link to={`/product/${product._id}`} className='font-bold text-[length:var(--xs-text)] line-clamp-2'>{product.title}</Link>
        <span className='flex flex-col'>
          <p className='line-through text-[color:var(--orange)] text-[length:var(--xs-text)]'>{product.displayPrice || product.price + 100} $</p>
          <p className='text-[color:var(--green)] text-[length:var(--md-text)] font-semibold'>{product.price} $</p>
        </span>
        <Button text={"orange"} border={"orange"} bg={"transparent"} size={"sm"} onClick={()=>addProductToCart(product._id)} >{isLoading?"loading...": <><ShoppingCart /></>}</Button>
      </div>
    </div>
  )
}

export default ProductCard