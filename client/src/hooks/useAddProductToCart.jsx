import axios from "axios"
import { useState } from "react"

export default function useAddProductToCart(productId) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const addProductToCart = async (productId) => {
        try {
            setIsLoading(true)
            const res = await axios({
                method: "post",
                url: "/api/cart",
                data: {
                    productId
                },
                headers : {
                    authtoken : localStorage.getItem("token")
                }
            })
            alert(res.data.message)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return { addProductToCart, isLoading, error }
}