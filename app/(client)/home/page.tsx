import React from 'react'
import CheckCard from './Cards/CheckCard/CheckCard'
import NoteCard from './Cards/NoteCard/NoteCard'
import Image from 'next/image'
import HomeItemWrapper from './HomeItemWrapper'
import { ConciergeBell, KeyRound, Wifi } from 'lucide-react'

const page = ({
  username='lucia'
}: {
  username: string
}) => {



  return (
    <div className='flex flex-col px-10 py-8 h-screen w-full gap-10'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-1'>
          <p className='text-neutral-600 font-mono text-xs uppercase tracking-widest leading-[140%]'>Booking · Confirmed</p>
          <h1 className='text-neutral-900 font-fraunces text-[40px] leading-[120%]'>Bienvenue, <span className='text-terracotta-600 italic capitalize'>{username}.</span></h1>
        </div>
        <div className='flex gap-4 items-center'>
          <button className='bg-transparent border border-neutral-400 rounded-full px-4 py-2.5 hover:cursor-pointer hover:bg-neutral-200 transition-all duration-300 text-neutral-900 leading-[120%] tracking-wide text-sm font-semibold font-sans'>Print receipt</button>
          <button className='bg-neutral-900 text-sun-50 rounded-full px-4 py-2.5 leading-[120%] tracking-wide hover:cursor-pointer hover:bg-neutral-800 transition-all duration-300 text-sm font-sans font-semibold'>Add to calendar</button>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='relative flex  m-auto -space-x-2 justify-center py-2 hover:cursor-pointer group/cards hover:gap-50 gap-0 transition-all duration-500'>
          <div className='-rotate-4 group-hover/cards:rotate-5 transition-all duration-500'>
            <CheckCard/>
          </div>
          <div className='rotate-4 relative group-hover/cards:-rotate-5 transition-all duration-500'>
            <NoteCard
              noteName='Margaux'
              noteRoom='La garrigue'
              noteDesc="We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you."
            />
          </div>
          <Image
            className='absolute -z-10 top-1/2 -translate-y-1/2'
            src={'/SunIconHome.png'}
            alt='Sun Icon'
            width={164}
            height={164}
          />
        </div>
        <div className='flex gap-2 items-center self-center'>
          <Image src={'/FanHoverIcon.png'} alt='Hover to fan icon' width={8} height={8}/>
          <p className='text-neutral-600 font-mono text-[10px] leading-[140%] tracking-wider'>HOVER TO FAN</p>
          <Image src={'/FanHoverIcon.png'} alt='Hover to fan icon' width={8} height={8}/>
        </div>
      </div>
      <div className='flex items-center gap-6 justify-center'>
        <HomeItemWrapper
          category='arrival'
          title='Check-in from 15:00'
          undertitle='Sat, 25 April'
          colorCode='#B9411B'
          icon={KeyRound}
          number={1}
          key={`arrival-key`}
          
        >
          <p className='font-sans text-sm leading-[140%] text-neutral-700'>Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.</p>
        </HomeItemWrapper>
        <HomeItemWrapper
          category='wifi'
          title='Le Soleil · Guest'
          undertitle='Password below'
          colorCode='#5769C6'
          icon={Wifi}
          number={2}
          key={'wifi-key'}
        >
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between items-center bg-neutral-200 rounded-lg px-2.5 h-8'>
              <p className='text-neutral-600 font-mono text-xs leading-[140%] tracking-widest'>NETWORK</p>
              <p className='text-neutral-900 font-sans text-xs leading-[120%] tracking-wide'>Le Soleil · Guest</p>
            </div>
            <div className='flex justify-between items-center bg-neutral-200 rounded-lg px-2.5 h-8'>
              <p className='text-neutral-600 font-mono text-xs leading-[140%] tracking-widest'>PASSWORD</p>
              <div className='flex items-center gap-1.5'>
                <p className='text-neutral-900 font-sans text-xs leading-[120%] tracking-wide'>Le Soleil · Guest</p>
                <button className='bg-transparent border border-neutral-400 rounded-full px-2 pt-1 pb-0.5 text-neutral-600 font-mono text-[10px] leading-[140%] tracking-wider hover:cursor-pointer hover:bg-neutral-400 transition-all duration-300'>COPY</button>
              </div>
            </div>
          </div>
        </HomeItemWrapper>
        <HomeItemWrapper
          title='Served 8 – 10:30'
          undertitle='On the terrace'
          category='breakfast'
          colorCode='#C04A72'
          icon={ConciergeBell}
          number={3}
          key={'breakfast-key'}
        >
          <p className='font-sans text-sm leading-[140%] text-neutral-700'>Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.</p>
        </HomeItemWrapper>
      </div>
    </div>
  )
}

export default page