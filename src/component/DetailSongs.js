import React, { useContext } from 'react'
import { Songs } from '../Context'

export default function DetailSongs() {
  const {song} = useContext(Songs)
  return (

    <div className='col-span-1 p-3 '>
      <div className='fixed'>
      <h2 className='text-cyan-400 font-bold'>Now playing...</h2>
      <h2 className='text-stone-500 text-2xl'>Sing me to sleep</h2>
      
      <div className='w-[240px] m-auto mt-5'>
          <img className='w-full rounded-3xl' src={song.links.images[0].url} alt='avatar'/>
      </div>
      <div className='flex justify-evenly items-center mt-5'>
        <img className='w-[70px] rounded-full' src={song.links.images[1].url} alt='avatar'/>
        <span className='text-xl text-white'>{song.author}</span>
      </div>
    </div>
    </div>
  )
}
