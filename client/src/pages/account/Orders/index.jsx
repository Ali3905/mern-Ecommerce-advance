import { ChevronLeft } from 'lucide-react'
import React, { useEffect } from 'react'
import OrdersTable from './OrdersTable'

const index = ({ orders, setActiveToNull }) => {
  
  return (
    <div className='overflow-x-hidden border-2 rounded-lg'>
      <p className="text-[length:var(--md-text)] flex items-center m-8" onClick={setActiveToNull}> <ChevronLeft size={20} className="sm:hidden" /> Orders history</p>
      <OrdersTable orders={orders} />
    </div>
  )
}

export default index