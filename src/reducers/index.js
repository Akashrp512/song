import {combineReducers} from 'redux';

const songReducer = () => {

  return (
    [
        { title: 'KGF title song', duration: '4:05'},
        { title: 'Kantara title song', duration: '4:15'},
        { title: 'RRR title song', duration: '3:05'},
        { title: 'Vikranth Rona title song', duration: '3:50'}
    ]
  );
};

const selectedSongReducer = (selectedSong=null , action) =>{
       if(action.type === 'SONG_SELECTED') {
        return action.payload;
       }

       return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});