import React, { useContext, useState } from 'react'
import Button from './UI/Button'
import { Link, useNavigate } from 'react-router-dom'
import { Blocks, X } from 'lucide-react'
import { AuthContext } from '../context/AuthState'

const Navbar = () => {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)
    const { isSignedIn } = useContext(AuthContext)
    return (
        <nav className='bg-[color:var(--light-green)] relative'>
            <div className='flex justify-between items-center gap-[47px] mx-auto sm:py-[40px] py-[20px] px-[40px]'>
                <Link to={"/"} ><img src="/logo.png" alt="logo" height={38} width={95} /></Link>
                <input type="search" placeholder='search' className='flex-grow rounded-md px-[20px] py-[15px] outline-none sm:block hidden' />
                <span className='sm:flex gap-[20px] hidden'>
                {isSignedIn ? <Button text={"green"} size={"sm"} bg={"transparent"} border={"grey"} onClick={() => navigate("/account")}>Account</Button> : <Button text={"green"} size={"sm"} bg={"transparent"} border={"grey"}>Login</Button>}
                    <Button text={"white"} size={"md"} bg={"black"} onClick={() => navigate("/cart")}>My Cart</Button>
                </span>
                {isVisible ? <X onClick={() => setIsVisible(prev => !prev)} className='sm:hidden' /> : <Blocks className='sm:hidden' onClick={() => setIsVisible(prev => !prev)} />}
            </div>
            <div className={`flex flex-col gap-2 w-full bg-[color:var(--light-green)] transition-all duration-500 py-[20px] px-[20px] ${!isVisible ? "absolute -top-[300%]" : "absolute top-[80px]"}`}>
                <input type="search" placeholder='search' className='flex-grow rounded-md px-[20px] py-[15px] outline-none' />
                {isSignedIn ? <Button text={"green"} size={"sm"} bg={"transparent"} border={"grey"} onClick={() => navigate("/account")}>Account</Button> : <Button text={"green"} size={"sm"} bg={"transparent"} border={"grey"}>Login</Button>}
                <Button text={"white"} size={"md"} bg={"black"} onClick={() => navigate("/cart")}>My Cart</Button>
            </div>
        </nav>
    )
}

export default Navbar