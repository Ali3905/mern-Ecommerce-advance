import React, { useState } from 'react'
import Button from '../../components/UI/Button'
import useGetProductByID from '../../hooks/useGetProductByID'
import ProductDetails from '../../components/ProductDetails'
import { useNavigate } from "react-router-dom"

const index = () => {
    const { product, loading, error } = useGetProductByID(null, "65f457d12ffc1067e77465f5")

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
        <div className='max-w-[1440px] px-[121px] py-[58px]'>
        <ProductDetails product={product} />
        
        </div>
    )
}

export default index