import Image from 'next/image'
import React from 'react'

export type NoteCardProps = {
    noteName: string,
    noteDesc: string,
    noteRoom: string
}

const NoteCard = ({
    noteName,
    noteRoom,
    noteDesc
}: NoteCardProps) => {
  return (
    <div className='flex flex-col h-105 w-100 p-6 rounded-xl drop-shadow-lg drop-shadow-terracotta-700 bg-radial-[at_top_right] from-terracotta-400 from-0% via-terracotta-500 via-50% to-terracotta-700 to-100% '>
        <div className='flex flex-col gap-4'>
            <hr className='border-top border-dashed border-terracotta-400 w-full h-px'/>
            <div className='flex justify-between items-start'>
                <p className='text-sun-50 font-mono text-[10px] tracking-wide'>WELCOME CARD</p>
                <Image
                    src='/SunIconNoteCard.png'
                    width={49}
                    height={49}
                    alt='Sun Icon'
                />
            </div> 
        </div>
        <div className='flex flex-col flex-1'>
            <p className='mb-2 font-fraunces italic tracking-tight text-[20px] text-sun-200'>A note from your host,</p>
            <p className='mb-6 font-fraunces text-sun-50 text-[40px] tracking-tight'>{noteName}.</p>
            <p className='text-sun-50 font-sans text-sm'>{noteDesc}</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-sun-50 font-mono tracking-wider text-[10px]'>ROOM</p>
            <p className='text-sun-50 font-fraunces text-[20px] tracking-tight'>{noteRoom}</p>
        </div>
    </div>
  )
}

export default NoteCard