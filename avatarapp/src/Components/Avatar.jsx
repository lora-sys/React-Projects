import React,{ useState} from 'react'
import '../Styles/Avatar.css'
import Axios from 'axios';


const Avatar =() =>{
    const [sprite,setSprite] =useState("bottts");//avatar styles
    const [seed,setSeed]=useState(1000);// avatar seed

    function handleSprite(spritetype){
        setSprite(spritetype);
    }
    function handleGenerate(){
        let x=Math.floor(Math.random()*1000);
        setSeed(x);
    }
    function downloadImage(){
        Axios({
            method:"get",
            url: `https://api.dicebear.com/9.x/${sprite}/svg?seed=${seed}`,
            responseType:"arraybuffer"
        })
        .then((response) => {
            var link = document.createElement("a");
            link.href = window.URL.createObjectURL(
                new Blob([response.data], 
                { type: "application/octet-stream" })
            );
            link.download = `${seed}.svg`;
            document.body.appendChild(link);
            link.click();
            setTimeout(function () {
                window.URL.revokeObjectURL(link);
            }, 100);
        })
        .catch((error)=>{console.log(error)});
}
return (
    <div className='container'>
    <div className='nav'>
    <p>Random Avatar Generator</p>
    </div>
    <div className='home'>
    <div className='btns'>
    <button onClick={()=>{handleSprite("avataaars")}}>
    Human
    </button>
        <button onClick={()=>{handleSprite("pixel-art")}}>
    Pixel
    </button>
        <button onClick={()=>{handleSprite("bottts")}}>
    Bots
    </button>
        <button onClick={()=>{handleSprite("jdenticon")}}>
    Vector
    </button>
        <button onClick={()=>{handleSprite("identicon")}}>
    Identi
    </button>
        <button onClick={()=>{handleSprite("adventurer-neutral")}}>
    Alien
    </button>
        <button onClick={()=>{handleSprite("micah")}}>
    Avatars
    </button>
            <button onClick={()=>{handleSprite("lorelei")}}>
    lorelei
    </button>
            <button onClick={()=>{handleSprite("miniavs")}}>
    miniavs
    </button>
                <button onClick={()=>{handleSprite("notionists")}}>
    notionists
    </button>
                    <button onClick={()=>{handleSprite("rings")}}>
    rings
    </button>
                    <button onClick={()=>{handleSprite("adventurer")}}>
    adventurer
    </button>
                        <button onClick={()=>{handleSprite("big-smile")}}>
    big-smile
    </button>
                        <button onClick={()=>{handleSprite("croodles")}}>
    croodles
    </button>
                            <button onClick={()=>{handleSprite("initials")}}>
    initials
    </button>
                            <button onClick={()=>{handleSprite("personas")}}>
    personas
    </button>
                                <button onClick={()=>{handleSprite("shapes")}}>
    shapes
    </button>
                                <button onClick={()=>{handleSprite("thumbs")}}>
    thumbs
    </button>
                                <button onClick={()=>{handleSprite("pixel-art-neutral")}}>
    pixel-art-neutral
    </button>
                                    <button onClick={()=>{handleSprite("open-peeps")}}>
    open-peeps
    </button>
                                    <button onClick={()=>{handleSprite("fun-emoji")}}>
    fun-emoji
    </button>
                                        <button onClick={()=>{handleSprite("glass")}}>
    glass
    </button>
    </div>
    <div className='avatar'>
    <img
    src={`https://api.dicebear.com/9.x/${sprite}/svg?seed=${seed}`}
    alt="Generated Avatar"
    />
    </div> 
    <div className='generate'>
    <button id="gen" onClick={()=>handleGenerate()}>Next</button>
    <button id="down" onClick={()=>{downloadImage()}}>DownloadImage</button>
    </div>

    </div>

    </div>
)



}
export default Avatar;