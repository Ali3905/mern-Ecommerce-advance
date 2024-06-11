import React from 'react'
import Button from '../../components/UI/Button'

const AddressCard = ({ address, showAllAddresses, isAllAddressesVisible, selectedAddress, selectAddress }) => {
  return (
    <div className={`flex flex-col py-2  ${selectedAddress._id === address._id && isAllAddressesVisible ? "border-red-500 border-b" : ""}`}  >
      <div onClick={()=>selectAddress(address)}>
      <p className='text-[20px] font-semibold'>{address.typeOfAddress}</p>
      <p className='line-clamp-2'>{address.address}</p>
      <p>{address.zipCode}</p>
      <p>{address.phoneNumber}</p>
      </div>
      {!isAllAddressesVisible && <p className='text-[color:var(--green)] mb-[10px]' onClick={showAllAddresses}>Change Address</p>}
    </div>
  )
}

export default AddressCard
