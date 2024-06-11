import React, { useContext } from 'react'
import Button from '../../components/UI/Button'
import { AuthContext } from '../../context/AuthState'
import { ChevronLeft } from 'lucide-react'

const Account = ({ setActiveToNull }) => {

  const { user } = useContext(AuthContext)

  return (
    <div className='flex flex-col flex-grow sm:p-[20px] rounded-[10px] gap-[16px] sm:border'>
      <div className='flex justify-between items-center'>
        <p className='text-[length:var(--md-text)] flex items-center gap-2' onClick={setActiveToNull} > <ChevronLeft size={20} className='sm:hidden' /> Personal Info</p>
        <Button bg={"transparent"} border={"grey"} text={"black"} >Log out</Button>
      </div>
      <label htmlFor="userName" className='border-2 p-[16px] flex flex-col rounded-[10px] text-[color:var(--grey)]'>
        User Name
        <input type="text" id='userName' value={user?.userName || ""} disabled className='outline-none bg-transparent text-[color:var(--dark)]' />
      </label>
      <label htmlFor="email" className='border-2 p-[16px] flex flex-col rounded-[10px] text-[color:var(--grey)]'>
        Email
        <input type="text" id='email' value={user?.email || ""} disabled className='outline-none bg-transparent text-[color:var(--dark)]' />
      </label>
      <label htmlFor="phone" className='border-2 p-[16px] flex flex-col rounded-[10px] text-[color:var(--grey)]'>
        Phone
        <input type="text" id='phone' value={user?.phoneNumber || ""} disabled className='outline-none bg-transparent text-[color:var(--dark)]' />
      </label>
      <div className='flex flex-col-reverse sm:flex-row gap-[12px] sm:self-end mt-auto'>
        <Button bg={"transparet"} border={"grey"} size={"lg"} >Cancel</Button>
        <Button bg={"orange"} border={"orange"} size={"lg"} text={"white"} >Save</Button>
      </div>
    </div>
  )
}

export default Account
