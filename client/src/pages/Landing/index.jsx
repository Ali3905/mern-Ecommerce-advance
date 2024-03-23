import React from 'react'
import Hero from './Hero'
import Products from './Products'
import useGetAllProducts from '../../hooks/useGetAllProducts'

const index = () => {
  const { products, error, isLoading } = useGetAllProducts()
  return (
    <div>
        <Hero />
        <Products products={products} />
    </div>
  )
}

export default index