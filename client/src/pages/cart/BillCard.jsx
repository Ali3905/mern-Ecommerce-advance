import React from 'react'

const BillCard = ({ noOfProducts, productsTotal, deliveryFee, discount }) => {
    return (
        <div className='border border-[color:var(--light-grey)] rounded-md p-[24px] flex flex-col gap-2'>
            <div className='flex justify-between leading-[15px]'>
                <p className='text-[length:var(--md-text)] text-black'>Items total <br /> <span className='text-[length:var(--sm-text)] text-[color:var(--black)]'>for {noOfProducts} items</span></p>
                <p className='text-[24px] text-black'>$ {productsTotal}</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-[length:var(--sm-text)]  text-[color:var(--black)]'>Delivery Fee</p>
                <p className='text-[length:var(--md-text)] text-black'>$ {deliveryFee}</p>
            </div>
            <div className='border-b border-[--light-grey] my-4'></div>
            <div className='flex justify-between'>
                <p className='text-[length:var(--md-text)]  text-[color:var(--black)]'>Total Discount</p>
                <p className='text-[length:var(--md-text)]-[24px]  text-black'>$ {discount}</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-[length:var(--md-text)]  text-[color:var(--black)] font-semibold'>To Pay</p>
                <p className='text-[24px]  text-[color:var(--orange)] font-semibold'>$ {(productsTotal + deliveryFee - discount).toFixed(2)} </p>
            </div>
        </div>
    )
}

export default BillCard
