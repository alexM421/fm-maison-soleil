import React from 'react'

type CheckItemProps = {
    date: Date,
    variant: 'in' | 'out'
}

type CheckInOutProps = {
    inDate: Date,
    outDate: Date
}


const CheckItem = ({
    date,
    variant
}: CheckItemProps) => {

    const dayMon = date.toLocaleString('en-GB',{
        day: 'numeric',
        month: 'short'
    })
    const weekDay = date.toLocaleString('en-GB', { weekday: 'long'})
    const hour = date.toLocaleString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }) 

    return(
        <div className='flex flex-col items-center'>
            <p className='font-mono text-xs tracking-wider text-neutral-600 mb-2'>{`CHECK ${variant.toUpperCase()}`}</p>
            <p className='text-neutral-900 font-fraunces text-3xl tracking-tight mb-1.5'>{dayMon}</p>
            <p className='text-neutral-700 text-sm tracking-wide font-sans'>{weekDay}<span className='mx-1'>·</span>{hour}</p>
        </div>
    )
}

const CheckInOut = ({
    inDate,
    outDate
}: CheckInOutProps) => {

    
  return (
    <div className='flex justify-center items-center gap-20'>
        <CheckItem date={inDate} variant='in'/>
        <CheckItem date={outDate} variant='out'/>
    </div>
  )
}

export default CheckInOut