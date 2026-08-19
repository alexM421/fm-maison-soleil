'use client'

import Image from 'next/image'
import Link from 'next/link'
import Form from 'next/form'

import {  Mail, TriangleAlert, Check }  from 'lucide-react'
import TextInput from '@/app/components/auth/TextInput'
import { PasswordInput } from '@/app/components/auth/PasswordInput'
import {  useActionState, useState } from 'react'
import { login } from '@/app/actions/auth'

const Login = () => {

    const initialError = {
        message: '',
        errors: null,
        key: '',
    }

    
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [errorObj, action] = useActionState(login, initialError)
    
    const { message, key } = errorObj

    return (
        <>
            <div className='flex flex-col'>
                <h1 className='font-fraunces tracking-tight text-3xl'>Welcome to <span className='text-terracotta-600 italic mr-px'>Maison</span> Soleil</h1>
                <p className='text font-sans text-neutral-700 font-medium tracking-tight'>Login to check your stay</p>
            </div>

            { message && 
                <div 
                    key={key}
                    className='p-3 rounded-lg bg-[#FFDAD6] text-[#93000A] border border-[#BA1A1A33] gap-2 flex items-center animate-[quick-bounce_0.45s_ease]'
                >
                    <TriangleAlert size={24}/>
                    {message}
                </div>
            }

            <Form
                action={action} 
                className='flex flex-col gap-6'
            >
                <TextInput
                    title='E-MAIL'
                    name='email'
                    type='email'
                    placeholder='example@123.com'
                    icon={Mail}
                    required={true}
                />
                <PasswordInput
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    idName='login-password'
                />
                <div className='flex justify-between items-center'>
                    <label htmlFor='remember' className='flex items-center gap-2 cursor-pointer'>
                        <input name='remember' value={'true'} type='checkbox' id='remember' className='rounded border-neutral-400 border peer sr-only'/>
                        <div className="size-4 rounded border border-neutral-400 peer-focus:outline peer-checked:bg-terracotta-600 peer-checked:border-terracotta-600 mb-0.5 transition-all duration-150">
                            <Check size={14} color='white'/>
                        </div>
                        Remember me
                    </label>
                    <Link href='/forgot' className='text-terracotta-600'>Forgot your password?</Link>
                </div>

                <button 
                    type='submit' 
                    className='flex items-center gap-1 py-3 px-6 w-full justify-center bg-amber-700 hover:cursor-pointer hover:gap-2 transition-all duration-150 hover:bg-['
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
