import { useState } from "react"
import axios  from "axios"

export default function useCreateAddress() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const createAddress = async(data) => {
        // console.log("running");
        setIsLoading(true)
        try {
          const res = await axios({
            method : "post",
            url : "/api/address",
            data : data,
            headers : {
              authtoken : localStorage.getItem("token")
            }
          })
          console.log("Addres Created");

        } catch (error) {
          setError(error?.response?.data?.message)
          console.log({error});
        } finally {
            setIsLoading(false)
        }
      }

      return { createAddress, isLoading, error }
    
}