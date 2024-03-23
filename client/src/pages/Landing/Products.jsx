import React from 'react'
import ProductCard from '../../components/UI/ProductCard'
import axios from 'axios'

const Products = ({ products }) => {

  
  return (
    <div className='flex gap-[30px] px-[120px] py-[55px] flex-wrap'>
        {products?.map((product)=>{
          console.log(axios.defaults.baseURL +  product.images[0]);
            return <ProductCard title={product.title} coverImage={axios.defaults.baseURL + product.images[0]} displayPrice={product.price + 100} sellingPrice={product.price}  />
        })}
    </div>
  )
}

export default Products