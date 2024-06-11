import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetAllAddresses(initialAddresses) {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getAllAddresses = async () => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "get",
        url: "/api/address",
        headers: {
          authtoken: localStorage.getItem("token"),
        },
      });
      setAddresses(res.data.foundAddresses);
    } catch (error) {
      setError(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllAddresses();
  }, []);
  return { addresses, setAddresses, isLoading, error, getAllAddresses };
}
