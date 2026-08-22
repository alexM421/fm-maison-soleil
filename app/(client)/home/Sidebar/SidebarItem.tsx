'use client'

import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

export type SidebarItemProps = {
    title: string,
    icon: LucideIcon
    path: string,
    link: string
}

const SidebarItem = ({
    title,
    icon: Icon,
    path,
    link,

}:SidebarItemProps) => {


    const isLocal = path.includes(link)

    return (
        <Link href={link} className={`flex gap-2 items-center px-3 relative py-2.5 rounded hover:cursor-pointer hover:bg-neutral-100 transition-all duration-300 ${isLocal && 'bg-neutral-0 shadow'}`}>
            <Icon size={20} className='text-neutral-900'/>
            <p className='text-neutral-900 font-sans font-medium'>{title}</p>
            {isLocal && <p className='bg-terracotta-600 absolute right-3 text-neutral-100 w-4 h-4 rounded-full flex justify-center items-center font-fraunces text-xs'>1</p>}
        </Link>
  )
}

export default SidebarItem