import Image from 'next/image'

const SidebarWeather = () => {
  return (
    <div className='flex flex-col bg-sun-300 relative px-4 py-3 gap-1.5 rounded-2xl'>
        <p className='text-neutral-700 font-mono tracking-[1px] text-xs'>TODAY IN CASSIS</p>
        <p className='font-fraunces text-3xl text-neutral-900 tracking-tight'>27°</p>
        <p className='font-sans text-neutral-700 tracking-wide text-sm'>Sunny · light breeze</p>
        <Image 
            className='absolute right-0 top-0 rounded-tr-2xl'
            src='/SunnyIcon.png' 
            alt='sunny weather icon'
            width={70}
            height={52}
        />
    </div>
  )
}

export default SidebarWeather