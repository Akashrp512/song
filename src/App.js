import { useState } from 'react'
import './App.css';
import {selectSong} from './actions';
import SongList from './components/SongList';

const App= ()=> {

  return (
    <div className="App ui container grid">
      <div className='ui row'>
          <div className='column eight wide'>
          <SongList />
          </div>
       </div>
    </div>
  );
};

export default App
