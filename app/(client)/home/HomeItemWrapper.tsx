import { LucideIcon } from 'lucide-react'
import React from 'react'

type HomeItemWrapperProps = {
    icon: LucideIcon,
    title: string,
    undertitle: string,
    category: string,
    colorCode: string,
    number: number,
    children: React.ReactNode
}

const HomeItemWrapper = ({
    icon: Icon,
    title,
    undertitle,
    category,
    colorCode,
    number,
    children
}:HomeItemWrapperProps) => {
  return (
    <div className='flex flex-col bg-neutral-50 border border-neutral-400 rounded-2xl px-5 py-6 gap-6 drop-shadow flex-1 max-w-100 h-full'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2.5 items-center'>
                <div 
                    className='w-10 h-10 rounded-lg flex justify-center items-center'
                    style={{ backgroundColor: colorCode}}
                >
                    <Icon 
                        color='white'
                        size={24}
                    />
                </div>
                <h3 className='font-mono font-medium text-sm tracking-widest leading-[140%] uppercase' style={{color: colorCode}}>{category}</h3>
            </div>
            <p className='font-fraunces text-2xl tracking-tight leading-[140%]' style={{color: colorCode}}>{number<10? `0${number}`:number}</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <h2 className='text-neutral-900 font-fraunces text-2xl tracking-tight leading-[140%]'>{title}</h2>
                <p className='text-neutral-600 font-sans text-xs tracking-wide leading-[120%]'>{undertitle}</p>
            </div>
            {children}
        </div>
    </div>
  )
}

export default HomeItemWrapper