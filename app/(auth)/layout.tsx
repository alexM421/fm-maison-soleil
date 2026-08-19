import React from 'react'
import Image from 'next/image'

const AuthLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <div className='h-screen bg-neutral-200 justify-center flex items-center px-12'>
        <div className='flex border border-[#E4DED580] rounded-lg max-h-300'>
            <Image
                className='rounded-tl-lg rounded-bl-lg flex-1 min-w-0'
                loading='eager'
                src='/Terrasse.png'
                alt='Balcony image'
                width={1066}
                height={1476}
            />
            <div className='flex flex-1 flex-col bg-neutral-50 gap-8 px-16 py-12 justify-center rounded-tr-lg rounded-br-lg'>
                { children }
            </div>
        </div>
    </div>
  )
}

export default AuthLayout