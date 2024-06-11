import React, { useContext, useEffect, useState } from 'react'
import { Heading3 } from '../../components/UI/Heading'
import Cart from './Cart'
import BillCard from './BillCard'
import Discount from './Discount'
import DiscountMessage from './DiscountMessage'
import useGetCartProducts from '../../hooks/useGetCartProducts'
import useGetAllAddresses from '../../hooks/useGetAllAddresses'
import Button from '../../components/UI/Button'
import Addresses from './Addresses'
import axios from 'axios'
import { AuthContext } from '../../context/AuthState'

const index = () => {
  const { products, error, isLoading, noOfProducts, total } = useGetCartProducts(null)
  const [loading, setLoading] = useState(false)
  const [errorInOrder, setErrorInOrder] = useState(null)
  const [selectedAddress, setSelectedAddress] = useState(null)
  const { user } = useContext(AuthContext)

  const { addresses } = useGetAllAddresses(null)

  const handleOrderConfirm = async () => {
    setLoading(true)
    if (!selectedAddress || !user || products.length < 1) {
      alert("hi from 1")
      console.log({selectedAddress, user, products});
      return setErrorInOrder("Something is missing")
      }
    const productIds = products.map(product => product._id);

    try {
      const res = await axios({
        method: "post",
        url: "/api/order",
        data: {
          productIds, deliveryFee: 3.5, addressId: selectedAddress._id, userId: user._id
        },
        headers : {
          authtoken : localStorage.getItem("token")
        }
      })
    } catch (error) {
      alert("hello from 2")
      setErrorInOrder(error.message)
    }

  }

  const selectAddressForOrder = (address) => {
    setSelectedAddress(address)
  }


  return (
    <div className='sm:px-[120px] px-[12px] sm:py-[40px] py-[20px] flex flex-col gap-[40px]'>

      <Heading3 children={"My Cart"} />
      <div className='flex flex-col sm:flex-row gap-[35px] justify-start items-center'>
        {error ? "Could get the cart. Error Occured" : isLoading ? "Loading..." : <Cart products={products} productsTotal={total} />}
        <div className='sm:max-w-[450px] w-full sm:min-w-[350px] flex flex-col self-end gap-[20px]'>
          <Discount />
          <DiscountMessage discountedAmount={3.54} />
          <BillCard noOfProducts={noOfProducts} productsTotal={total} deliveryFee={10.34} discount={3.54} />

          <div className='flex flex-col border border-[color:var(--light-grey)] rounded-md px-[25px] gap-2'>

            <Addresses addresses={addresses} selectAddressForOrder={selectAddressForOrder} />
            {error ? <p className='text-red-500'>{error}</p> : null}
            <Button size={"md"} text={"white"} bg={"black"} onClick={handleOrderConfirm} >Proceed to checkout</Button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default index
