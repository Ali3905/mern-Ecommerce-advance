import React from 'react'
import Button from './UI/Button'

const Navbar = () => {
    return (
        <nav className='bg-[color:var(--light-green)]'>
            <div className='flex justify-between gap-[47px] mx-auto py-[40px] px-[40px]'>
                <img src="/logo.png" alt="logo" height={38} width={95} />
                <input type="search" placeholder='search' className='flex-grow rounded-md px-[20px] py-[15px] outline-none' />
                <span className='flex gap-[20px]'>
                    <Button text={"green"} size={"sm"} bg={"transparent"} border={"grey"}>Login</Button>
                    <Button text={"white"} size={"md"} bg={"black"}>My Cart</Button>
                </span>
            </div>
        </nav>
    )
}

export default Navbar