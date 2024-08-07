import React from 'react'

const OrdersTable = ({ orders }) => {
    return (
        <table>
            <thead >
                <tr className='border-b-2'>
                    <th className='p-2 hidden sm:block'>Order Id</th>
                    <th className='p-2'>Order Date</th>
                    <th className='p-2'>Bill-to name</th>
                    <th className='p-2'>Total</th>
                    <th className='p-2'>Status</th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    orders && orders?.length > 0 ? orders?.map((order) => {
                        return <tr className='text-[length:var(--sm-text)]'>
                            <td className='sm:p-4 sm:px-8 hidden sm:block'>{order._id}</td>
                            <td className='sm:p-4 sm:px-8'>{formatDate(order.createdAt)}</td>
                            <td className='sm:p-4 sm:px-8 text-center sm:text-left'>{order.address.address}</td>
                            <td className='sm:p-4 sm:px-8'>$ {order.totalPrice}</td>
                            <td className='sm:p-4 sm:px-8'>{order.statusOfDelivery}</td>
                        </tr>
                    }) : "No orders to show"
                }
            </tbody>
        </table>
    )
}

function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
}

export default OrdersTable