
'use client'

import Image from 'next/image'
import React from 'react'
import SidebarItem from './SidebarItem'
import { BedDouble, ConciergeBell, House, Mail, MapPin } from 'lucide-react'
import { usePathname } from 'next/navigation'
import SidebarWeather from './SidebarWeather/SidebarWeather'
import SidebarCopyright from './SidebarCopyright'

const Sidebar = () => {


  const pathname = usePathname()

  return (
    <div className='flex flex-col p-4 gap-4 w-75 border-r border-neutral-400 h-screen'>
        <div className='flex gap-2 items-center'>
            <Image
                width={34}
                height={34}
                alt='sun icon'
                src='/Sun.png'
            />
            <div className='flex flex-col'>
                <p className='font-fraunces italic text-terracotta-600 leading-4'>Maison</p>
                <p className='font-fraunces text-neutral-900 leading-4'>Soleil</p>
            </div>
        </div>
        <hr className='h-px bg-neutral-400 border-0'/>
        <div className='flex flex-col gap-0.5 flex-1'>
          <SidebarItem
            title='Your stay'
            icon={BedDouble}
            path={pathname}
            link={'/home'}
          />
          <SidebarItem
            title='The house'
            icon={House}
            path={pathname}
            link={'/house'}
          />
          <SidebarItem
            title='Around town'
            icon={MapPin}
            path={pathname}
            link={'/map'}
          />
          <SidebarItem
            title='Breakfast'
            icon={ConciergeBell}
            path={pathname}
            link={'/breakfast'}
          />
          <SidebarItem
            title='Messages'
            icon={Mail}
            path={pathname}
            link={'/messages'}
          />
        </div>
        <div className='flex flex-col gap-5'>
          <SidebarWeather/>
          <SidebarCopyright/>
        </div>
    </div>
  )
}

export default Sidebar