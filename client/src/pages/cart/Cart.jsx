import axios from 'axios'
import React from 'react'
import { Trash } from 'lucide-react'
import useRemoveItemFromCart from '../../hooks/useRemoveItemFromCart'

const Cart = ({ products, productsTotal }) => {

  const { removeItemFromCart, isLoading } = useRemoveItemFromCart()

  

    if (!products || products && products.length < 1) {
        return <div>
            No Product in Cart
        </div>
    }

  return (
    <div className='flex flex-col border border-[color:var(--light-grey)] rounded-md max-w-[1000px] sm:flex-grow'>
        <div className='flex items-center justify-end gap-[20px] py-[24px] mx-[50px] border-b border-[color:var(--light-grey)]'>
            <p>{products.length || "No"} Items Selected</p>
            <p>$ {productsTotal}</p>
        </div>
      {
        products?.map((product, index)=>{
            return <div className={`flex items-center justify-between sm:gap-[20px] py-[24px] px-[10px] sm:mx-[100px]  ${ index < products.length - 1 ? "border-b border-[color:var(--light-grey)]" : "" }`} key={product._id}>
                <img src={axios.defaults.baseURL + product?.images[0]} alt="products" width={100} className='aspect-square' />
                <p className='text-[length:var(--sm-text)] font-medium max-w-[50%] line-clamp-3'>{product.title}</p>

                {/* TODO : add increment and decrement button */}

                <span>
                    <p className='line-through font-semibold text-[length:var(--ss-text)] text-[color:var(--grey)]'>$ {product.price + 100}</p>
                    <p className='text-[length:var(--sm-text)] text-[color:var(--orange)]'>$ {product.price}</p>
                </span>

                {isLoading? "loading..." : <Trash className='cursor-pointer' onClick={()=>removeItemFromCart(product._id)} />}
            </div>
        })
      }
    </div>
  )
}

export default Cart
