import { useEffect, useState } from "react";
import axios from 'axios'

export default function useGetProductByID(initial, productId) {
    const [product, setProduct] = useState(initial)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const getProductById = async (id) => {
        setLoading(true)
        try {
            const res = await axios({
                method: "get",
                url: `/api/product/id/${id}`
            })
            setProduct(res.data.foundProduct)
            console.log(res);
        } catch (err) {
            setError(err)
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getProductById(productId)
    }, [productId])

    return { product, loading, error }

}   