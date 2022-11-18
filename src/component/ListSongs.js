import React, { useContext, useEffect, useState } from 'react'
import { Songs } from '../Context'

export default function ListSongs() {
  const {DataSong,handleSetSong,song} = useContext(Songs)
  const [idSong,setidSong] = useState(0)
  const handleSong = (idSong) =>{
  setidSong(idSong)
  handleSetSong(idSong)
  }
  useEffect(() => {
    setidSong(song.id)
  },[song])

    return (
    <div className='col-span-2 '>
        <table className='table-auto w-full'>
            <thead className='text-white h-12'>
                <tr>
                  <th className='w-[10%]'>#</th>
                  <th className='text-left'>Title</th>
                  <th className='w-[10%]'>Author</th>
                  <th className='w-[10%]'><i className='fa fa-download'></i></th>
                </tr>
            </thead>
            <tbody className='text-slate-400 bg-slate-800'>
              {DataSong.map((song,index) =>(  
              <tr className={`h-12 hover:bg-gray-600 hover:text-cyan-600 ${idSong === song.id && 'bg-gray-600 text-cyan-600'}`}
                  key={index}
                  onClick={() => handleSong(song.id)}>
                <td className='text-center'>{index + 1}</td>
                <td>{song.name}</td>
                <td className='text-center'>{song.author}</td>
                <td className='text-center'><a href={song.url}><i className='fa fa-download'></i></a></td>
              </tr>
            )) }
                
            </tbody>
        </table>
    </div>
  )
}
