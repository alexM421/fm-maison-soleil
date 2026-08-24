import React from 'react'
import CheckInOut from './CheckInOut'
import CheckPrice from './CheckPrice'

const CheckCard = () => {

    const prices = [{
        price: 620,
        title: 'Room · La Garrigue × 4 nights'
    },{
        price: 96,
        title: 'Breakfast × 2 guests'
    },{
        price: 14.40,
        title: 'Tourist tax'
    }]


  return (
    <div className='flex flex-col px-6 py-4 rounded-lg gap-5 bg-neutral-50 w-100 h-105 shadow bg-[repeating-linear-gradient(to_bottom,transparent_0_23px,rgba(43,38,32,0.02)_23px_24px)]'>
        <div className='flex flex-col gap-3'>
            <div className='flex'>
                <div className='flex flex-col justify-between flex-1'>
                    <p className='font-mono tracking-wider text-xs text-neutral-600'>RECEIPT</p>
                    <p className='font-fraunces tracking-tight text-lg text-neutral-900'>Your stay</p>
                </div>
            <p className='text-neutral-600 font-mono tracking-wider text-xs text-end'><span className='text-[9px]'>№</span> MS-2026<br/>0421-AH</p>
            </div>
            <hr className='border-top border-dashed border-neutral-400 w-full'/>
        </div>
        <div className='flex flex-col gap-10'>
            <CheckInOut inDate={new Date()} outDate={new Date()}/>
            <CheckInOut inDate={new Date()} outDate={new Date()}/>
        </div>
        <div className='flex flex-col gap-3'>
            <hr className='border-t border-dashed border-neutral-400'/>
            <div className='flex flex-col gap-1'>
               {prices.map(el => <CheckPrice title={el.title} price={el.price} key={`${el.title.trim().toLowerCase()}-key`}/>)}
            </div>
            <hr className='w-full bg-neutral-600 -mt-1.5'/> 
        </div>
    </div>
  )
}

export default CheckCard