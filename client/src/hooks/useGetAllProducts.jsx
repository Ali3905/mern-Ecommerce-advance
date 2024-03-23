import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetAllProducts(initialProducts) {
    const [products, setProducts] = useState(initialProducts)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const getAllProducts = async() => {
        setIsLoading(true)
        try {
            const res = await axios({
                method : "get",
                url : "/api/product/allProducts",
            })
            setProducts(res.data.allProducts)
            console.log(res);
        } catch (e) {
            setError(e)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getAllProducts()
    }, [])
    return { products, isLoading, error }
}