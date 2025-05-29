import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

function App(){
  // inital states using reatc hooks
  const [video,setVideo]=useState("");
  const [videoURL,setVideoURL]=useState("https://youtu.be/sa9l-dTv9Gk");
  function handleSearch(){
    movieTrailer(video).then((res)=>{
      setVideoURL(res);
    })
  }
return(
  <div className='App'>
  <div className='search-box'>
    <label>
      search for any movies/shows:{" "}
    </label>
  <input
  type="text"
  onChange={(e)=>{
    setVideo(e.target.value);
  }}
  />
  <button onClick={()=>{handleSearch()}}>search</button>
  </div>

  <ReactPlayer  url={videoURL} controls={true}       />

  </div>
)

}



export default App;