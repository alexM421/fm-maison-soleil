import React, { SetStateAction } from 'react'

import { LockKeyhole, Eye, EyeOff } from 'lucide-react'

type PasswordInputProps = {
    showPassword: boolean,
    setShowPassword: React.Dispatch<SetStateAction<boolean>>,
    idName: string
}

export const PasswordInput = ({
    showPassword,
    setShowPassword,
    idName
}: PasswordInputProps) => {

     
    const id = `id-${idName}`
    const toggleShowPassword = () => setShowPassword(prevState => !prevState)

  return (
    <div className='flex flex-col gap-1'>
        <label htmlFor={id} className='font-mono text-[12px] tracking-tight text-neutral-700 leading-none'>PASSWORD</label>
        <div className='flex gap-3 items-center border-b justify-between border-neutral-400 py-2 transition-all duration-300 has-[input:focus]:border-terracotta-600'>
            <LockKeyhole size={16} className='text-neutral-700 mt-px'/>
            <input 
                type={showPassword? 'text':'password'}
                id={id}    
                name={idName}
                min={8}
                max={255}
                required
                className='w-full outline-none'
                placeholder='••••••••'
                autoComplete='password'
            />
            <button className='hover:cursor-pointer' type='button' onClick={toggleShowPassword}>
                {showPassword
                    ?<Eye size={16} className='text-neutral-700'/>
                    :<EyeOff size={16} className='text-neutral-700'/>
                }
            </button>
        </div>
    </div>
  )
}
