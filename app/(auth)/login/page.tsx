'use client'

import Image from 'next/image'
import Link from 'next/link'
import Form from 'next/form'

import {  Mail }  from 'lucide-react'
import TextInput from '@/app/components/auth/TextInput'
import { PasswordInput } from '@/app/components/auth/PasswordInput'
import { useState } from 'react'

const Login = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <>
            <div className='flex flex-col'>
                <h1 className='font-fraunces tracking-tight text-3xl'>Welcome to <span className='text-terracotta-600 italic mr-px'>Maison</span> Soleil</h1>
                <p className='text font-sans text-neutral-700 font-medium tracking-tight'>Login to check your stay</p>
            </div>

            <Form className='flex flex-col gap-6'>
                <TextInput
                    title='E-MAIL'
                    type='email'
                    placeholder='example@123.com'
                    icon={Mail}
                />
                <PasswordInput
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1 items-center'>
                        <input type='checkbox' id='remember' className='rounded border-neutral-400 border'/>
                        <label htmlFor='remember' className='font-sans text-neutral-700'>Remember me</label>
                    </div>
                    <Link href='/forgot' className='text-terracotta-600'>Forgot your password?</Link>
                </div>

                <button 
                    type='submit' 
                    className='flex items-center gap-1 py-3 px-6 w-full justify-center bg-amber-700 hover:cursor-pointer'
                >
                    <p className='font-sans text-white text-lg'>Login</p>
                    <Image 
                        className='mt-0.5'
                        src='/ArrowRight.svg'
                        alt='right arrow'
                        width={13}
                        height={13}
                    />
                </button>
            </Form>
        </>
    )
}

export default Login