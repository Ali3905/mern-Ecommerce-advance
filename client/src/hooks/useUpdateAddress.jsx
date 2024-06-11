import axios from "axios"
import { useState } from "react"

export default function useUpdateAddress() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const updateAddress = async(data) => {
        console.log({data});
        setIsLoading(true)
        try {
            const res = await axios({
                method : "patch",
                url : `/api/address/${data._id}`,
                data : {
                    editedAddress : data
                },
                headers : {
                    authtoken : localStorage.getItem("token")
                }
            })
            alert("Address has been updated")
        } catch (error) {
            console.log(error);
            setError(error?.response?.data?.message)
        } finally {
            setIsLoading(false)
        }
    }

    return { updateAddress, isLoading, error }
}