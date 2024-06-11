import React from 'react'
import Button from '../../components/UI/Button'
import useGetProductByID from '../../hooks/useGetProductByID'
import ProductDetails from '../../components/ProductDetails'
import { useNavigate, useParams } from "react-router-dom"
import Products from '../Landing/Products'
import useGetAllProducts from '../../hooks/useGetAllProducts'
import { Heading3 } from '../../components/UI/Heading'
import ProductsCrousal from '../../components/ProductsCrousal'

const index = () => {
    const { productId } = useParams()
    const { product, loading, error } = useGetProductByID(null, productId)
    const { products } = useGetAllProducts()

    const navigate = useNavigate()

    if (loading) {
        return <div className='w-full h-screen flex flex-col items-center justify-center'>Loading</div>
    }

    if (error) {
        return <div className='w-full h-screen flex flex-col items-center justify-center'>
            <p>Something went wrong</p>
            <Button size={"md"} bg={"orange"} text={"white"} onClick={(e) => navigate("/")} >Go to Home Page</Button>
        </div>
    }

    return (
        <div className='max-w-[1440px] mx-auto px-[15px] sm:px-[121px] py-[58px]'>
            <ProductDetails product={product} />
            <div className='py-[55px] flex flex-col gap-[20px]'>
                <Heading3 children={"Products you may like"} />
                {/* <Products products={products} /> */}
                <ProductsCrousal products={products} />
            </div>
        </div>
    )
}

export default index