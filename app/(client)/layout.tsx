import React from 'react'
import Sidebar from './home/Sidebar/Sidebar'

const layout = ({ children }: LayoutProps<"/">) => {
  return (
    <div className='flex'>
        <Sidebar/>
        {children}
    </div>
  )
}

export default layout