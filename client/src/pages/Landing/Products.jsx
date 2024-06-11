import React from 'react'
import ProductCard from '../../components/UI/ProductCard'

const Products = ({ products }) => {

  if ( products && products.length < 1 ) {
    return <div className='flex gap-[30px] px-[120px] py-[55px] flex-wrap'> No Products to show</div>
  }
  return (
    <div className='flex gap-[5px] flex-wrap'>
        {products?.map((product)=>{
            return <ProductCard product={product} />
        })}
    </div>
  )
}

export default Products