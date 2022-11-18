
import './App.css';
import Navbar from './component/Navbar';
import DetailSongs from './component/DetailSongs';
import ListSongs from './component/ListSongs';
import Player from './component/Player';
import { Songs } from './Context';
import DataSong from './data/songs.json'
import { useState } from 'react';
function App() {
  const [song,setSong] = useState(DataSong[0])
  const handleSetSong = (idSong) => {
    const song = DataSong.find(song =>  song.id === idSong)
    setSong(song)

  if(!song) 
    setSong(DataSong[0])
  else 
    setSong(song)
  }
  return (
    <div className="App">
      <Songs.Provider value={{ DataSong ,song ,handleSetSong }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden overflow-y-scroll'>
          {/* span 1 */}
          <DetailSongs />
          {/* span 2 */}
          <ListSongs />
        </div>
        <Player />
      </Songs.Provider>
    </div>
  );
}

export default App;
