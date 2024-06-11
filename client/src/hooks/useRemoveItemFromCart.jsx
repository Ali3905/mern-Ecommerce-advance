import axios from "axios"
import { useState } from "react"

export default function useRemoveItemFromCart() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const removeItemFromCart = async (productId) => {
        try {
            setIsLoading(true)
            const res = await axios({
                method: "patch",
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

    return { removeItemFromCart, isLoading, error }
}