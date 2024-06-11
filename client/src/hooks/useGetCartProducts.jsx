import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetCartProducts(initialProducts) {
    const [products, setProducts] = useState(initialProducts)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [total, setTotal] = useState(0)
    

    const getCartProducts = async() => {
        setIsLoading(true)
        try {
            const res = await axios({
                method : "get",
                url : "/api/cart",
                headers : {
                    authtoken : localStorage.getItem("token")
                }
            })
            setProducts(res.data.cartProducts)
            setTotal(res.data.total)
        } catch (e) {
            setError(e)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getCartProducts()
    }, [])
    return { products, isLoading, error, noOfProducts : products?.length, total }
}