import React from 'react'
import CheckCard from './Cards/CheckCard/CheckCard'
import NoteCard from './Cards/NoteCard/NoteCard'

const page = () => {
  return (
    <div>
        <CheckCard/>
        <NoteCard
          noteName='Margaux'
          noteRoom='La garrigue'
          noteDesc="We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you."
        />
    </div>
  )
}

export default page