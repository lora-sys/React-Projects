import Axios from 'axios'
import './App.css';
import { useState } from 'react';

function App(){
const [artist,setArtist] =useState("");
const [song,setSong]=useState("");
const [lyrics,setLetrics]=useState("");

function searchLyrics(){
  if(artist=== "" || song===""){
    return;
  }
  Axios.get(
    `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`
  ).then(res=>{
    console.log(res.data.lyrics);
    setLetrics(res.data.lyrics);
  })

}
return(
  <div className='App'>
  <h1>lyrics Finder</h1>
  <input
  className='inp'
  type='text'
  placeholder='Artist name'
  onChange={(e)=>setArtist(e.target.value)}
  />
  <input
  className='inp'
  type="text"
  placeholder='Song name'
  onChange={(e)=>setSong(e.target.value)}
  />
  <button className='btn' onClick={()=>searchLyrics()}>Search</button>
  <hr />
  <pre>{lyrics}</pre>
  </div>
)

}





export default App;
