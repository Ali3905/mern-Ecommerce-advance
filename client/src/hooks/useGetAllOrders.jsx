import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetOrders(initialOrders) {
    const [orders, setOrders] = useState(initialOrders)
    const [isLoadingOrders, setIsLoadingOrders] = useState(false)
    const [errorOrders, setErrorOrders] = useState(false)
    

    const getOrders = async() => {
        setIsLoadingOrders(true)
        try {
            const res = await axios({
                method : "get",
                url : "/api/order",
                headers : {
                    authtoken : localStorage.getItem("token")
                }
            })
            setOrders(res.data.data)
            console.log(res.data.data);
        } catch (e) {
            setErrorOrders(e)
        }
        finally {
            setIsLoadingOrders(false)
        }
    }

    useEffect(()=>{
        getOrders()
    }, [])
    return { orders, isLoadingOrders, errorOrders }
}