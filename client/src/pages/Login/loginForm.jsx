import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../components/UI/Button'
import { Link } from 'react-router-dom'
import { KeySquare, Mail } from 'lucide-react'

const loginForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const onSsubmit = (data) => {
        console.log(data);
    }
    return (
        <form className='flex flex-col gap-[30px] bg-white px-[40px] py-[30px] min-w-[40%] rounded-lg' onSubmit={handleSubmit(onSsubmit)}>
            <p className='font-bold text-xl text-center'>Welcome back</p>
            <label htmlFor="email" >
                <span className='border-2 rounded-[10px]  w-full flex gap-[10px] items-center p-4 '>
                    <Mail className='text-[color:var(--grey)]' />
                    <input {...register("email", { required: "Email is required" })} id='email' type="text" placeholder='Enter your registered email' className='outline-none text-[color:var(--grey)] w-full' />
                </span>
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
            </label>
            <label htmlFor="password">
                <span className='border-2 rounded-[10px]  w-full flex gap-[10px] items-center p-4 '>
                    <KeySquare className='text-[color:var(--grey)]' />
                    <input {...register("password", { required: "Password is required", minLength: { value: 5, message: "Password must contain atleast 5 characters" } })} id='email' type="text" placeholder='Enter your registered email' className='outline-none text-[color:var(--grey)] w-full' />
                </span>
                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            </label>
            <span className='text-center'>
                <p>Forgot <Link to="#" className='text-blue-400'>password</Link></p>
                <p>Don't have an account ? <Link to={"/signup"} className='text-blue-400'>Craete one</Link></p>
            </span>
            <Button bg={"orange"} text={"white"}>Login</Button>
        </form>
    )
}

export default loginForm