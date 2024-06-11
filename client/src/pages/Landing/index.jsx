import React from 'react'
import Hero from './Hero'
import Products from './Products'
import useGetAllProducts from '../../hooks/useGetAllProducts'

const index = () => {
  const { products, error, isLoading } = useGetAllProducts()
  return (
    <div>
      <Hero />
      <div className='sm:px-[120px] px-[12px] py-[55px]'>
        {error ? "Could Not Find Products" : isLoading ? "Loading..." : <Products products={products} />}
      </div>
    </div>
  )
}

export default index