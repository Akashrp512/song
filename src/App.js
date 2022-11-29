import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import {selectSong} from './actions';
import SongList from './components/SongList';

const App= ()=> {

  return (
    <div className="App">
     <SongList />
    </div>
  );
};

export default App
