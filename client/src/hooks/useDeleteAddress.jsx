import axios from "axios"
import { useState } from "react"
import useGetAllAddresses from "./useGetAllAddresses"

export default function useDeleteAddress() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const deleteAddress = async(addressId) => {
        setIsLoading(true)
        try {
            const res = await axios({
                method: "delete",
                url: `/api/address/${addressId}`,
                headers: {
                    authtoken: localStorage.getItem("token")
                }
            })
            console.log(res);
        } catch (error) {
            setError(error?.response?.data?.message)
            alert("error?.response?.data?.message")
        } finally {
            setIsLoading(false)
        }
    }
    return { isLoading, error, deleteAddress }
}