import { useState } from 'react'
import './App.css';
import {selectSong} from './actions';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

const App= ()=> {

  return (
    <div className="App ui container grid">
      <div className='ui row'>
          <div className='column eight wide'>
          <SongList />
          </div>
          <div className='column eight wide'>
            <SongDetail />
          </div>
       </div>
    </div>
  );
};

export default App
