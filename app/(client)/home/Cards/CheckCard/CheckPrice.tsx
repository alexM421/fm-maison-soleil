import React from 'react'

const CheckPrice = ({
    title,
    price
}:{
    title: string,
    price: number
}) => {
  return (
    <div className='flex justify-between items-center'>
        <p className='font-sans text-neutral-900 text-sm leading-[140%]'>{title}</p>
        <p className='font-mono text-xs text-neutral-900 leading-[140%]'>{`€ ${price.toFixed(2)}`}</p>
    </div>
  )
}

export default CheckPrice