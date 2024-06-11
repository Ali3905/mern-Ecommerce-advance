import React, { useEffect, useState } from 'react'
import AddressCard from './AddressCard'

const Addresses = ({ addresses, selectAddressForOrder }) => {
    const [selectedAddress, setSelectedAddress] = useState(null)

    const [isAllAddressesVisible, setIsAllAddressesVisible] = useState(false)

    const showAllAddresses = () => {
        setIsAllAddressesVisible(true)
    }

    useEffect(() => {
        if (addresses) {
            selectAddress(addresses[0])
            
        }
    }, [addresses])

    const selectAddress = (address) => {
        selectAddressForOrder(address)
        setSelectedAddress(address)
        setIsAllAddressesVisible(false)
    }
    return (
        <div className={`flex flex-col gap-2 px-[25px] py-[10px] max-h-[400px] ${isAllAddressesVisible ? "overflow-y-scroll" : ""}`}>
            {selectedAddress && addresses &&
                addresses?.map((address) => {
                    if (selectedAddress._id !== address._id && !isAllAddressesVisible) return;
                    return <AddressCard address={address} showAllAddresses={showAllAddresses} isAllAddressesVisible={isAllAddressesVisible} selectedAddress={selectedAddress} selectAddress={selectAddress} key={address._id} />
                })
            }

        </div>
    )
}

export default Addresses