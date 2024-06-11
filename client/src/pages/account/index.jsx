import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Account from './Account'
import Addresses from './Addresses'
import useGetAllAddresses from '../../hooks/useGetAllAddresses'

const index = () => {
  const { addresses, isLoading, error } = useGetAllAddresses(null)
  const [active, setActive] = useState(null)
  
  const handler = (link) => {
    setActive(link)
  }

  const setActiveToNull = () => {
    if (window.innerWidth < 640) {
      setActive(null)
    }
  }

  const sideLinks = [{
    label: "Manage account",
    link: {
      component : <Account setActiveToNull={setActiveToNull} />,
      index : 0,
    }
  }, {
    label: "Orders",
    link: {
      component : "orders",
      index : 1,
    }
  }, {
    label: "Payment methods",
    link: {
      component : "payments",
      index : 2,
    }
  }, {
    label: "Address Book",
    link: {
      component : <Addresses addresses={addresses} isFetching={isLoading} errorInFetching={error} setActiveToNull={setActiveToNull} />,
      index : 3,
    },
  },]

  useEffect(()=>{
    if (window.innerWidth > 640) {
      setActive(sideLinks[0].link)
    }
  }, [])

  return (

    <div className='flex gap-[20px] sm:px-[120px] px-[12px] sm:py-[40px] py-[20px]'>
      {active === null || window.innerWidth > 640 ? <Sidebar handler={handler} sideLinks={sideLinks} active={active}/> : null}
      { active && active.component !== null ? active.component :  null}
    </div>
  )
}

export default index
