import React from 'react'
import { Pencil, Trash, Loader } from 'lucide-react'
import useDeleteAddress from '../../hooks/useDeleteAddress'

const AddressCard = ({ address, handleDelete, handleOpenModal }) => {
    const { isLoading } = useDeleteAddress()
    return (
        <div className='flex flex-col p-[20px] rounded-[10px] gap-[2px] border text-[color:var(--black)] relative'>
            <span className='absolute top-[20px] right-[20px] cursor-pointer flex gap-[10px]'>
            <Pencil size={20} onClick={()=>handleOpenModal(address)} />
            {isLoading?<Loader size={20} />:<Trash size={20} onClick={()=>handleDelete(address._id)} />}
            </span>
            <p className='flex font-semibold text-[color:var(--dark)]'>{address.type}</p>
            <p>{address.address}</p>
            <p>{address.zipCode}</p>
            <p>{address.phoneNumber}</p>
        </div>
    )
}

export default AddressCard
