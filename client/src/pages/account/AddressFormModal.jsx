import React, { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import Button from '../../components/UI/Button'

const AddressFormModal = ({ handleCloseModal, handler, error, address, formType }) => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        defaultValues :  address ? address : undefined
    })
    const submitHandler = (data) => {
        handler(data)
        handleCloseModal()
    }

    return (
        <form className='flex flex-col gap-[15px] relative' onSubmit={handleSubmit(submitHandler)}>
            <label htmlFor="zipCode" className='border-2 p-[16px] flex flex-col rounded-[10px] text-[color:var(--grey)]'>
                <input {...register("zipCode", { required: "Zip Code is required" })} type="text" id='zipCode' placeholder='Zip Code' className='outline-none bg-transparent text-[color:var(--dark)]' />
            </label>
            {errors.zipCode && errors.zipCode.message && <p className='text-red-500'>{errors.zipCode.message}</p>}
            <label htmlFor="phoneNumber" className='border-2 p-[16px] flex flex-col rounded-[10px] text-[color:var(--grey)]'>
                <input {...register("phoneNumber", { required: "Phone Number is required", minLength: { value: 10, message: "Phone Number must be atleast 10 characters" }, maxLength: { value: 11, message: "Phone Number can be max 11 characters" } })} type="text" id='phoneNumber' placeholder='Phone Number' className='outline-none bg-transparent text-[color:var(--dark)]' />
            </label>
            {errors.phoneNumber && errors.phoneNumber.message && <p className='text-red-500'>{errors.phoneNumber.message}</p>}
            <label htmlFor="typeOfAddress" className='border-2 p-[16px] flex flex-col rounded-[10px] text-[color:var(--grey)]'>
                <input {...register("typeOfAddress", { required: "Address Type is required" })} type="text" id='type' placeholder='Type of Address' className='outline-none bg-transparent text-[color:var(--dark)]' />
            </label>
            {errors.typeOfAddress && errors.typeOfAddress.message && <p className='text-red-500'>{errors.typeOfAddress.message}</p>}
            <label htmlFor="address" className='border-2 p-[16px] flex flex-col rounded-[10px] text-[color:var(--grey)]'>

                <textarea {...register("address", { required: "Complete Address is required", minLength: { value: 10, message: "Address is too short" } })} type="text" id='address' placeholder='Enter your complete address' className='outline-none bg-transparent text-[color:var(--dark)]' />
            </label>
            {errors.address && errors.address.message && <p className='text-red-500'>{errors.address.message}</p>}

            {errors.root || error && <span className='self-center text-red-500'>{errors?.root?.message || error}</span>}
            <span className='flex justify-end gap-[20px]'>
                <Button bg={"transparent"} border={"grey"} size={"lg"} onClick={handleCloseModal} type={"button"} >Cancel</Button>
                <Button text={"white"} size={"lg"} type={"submit"} disabled={isSubmitting} >{isSubmitting ? "Saving" : "Save"}</Button>
                {/* <button type='submit'>Submit</button> */}
            </span>
        </form>
    )
}

export default AddressFormModal
