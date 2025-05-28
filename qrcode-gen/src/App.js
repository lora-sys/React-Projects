import { useEffect,useState } from "react";
import  "./App.css";

function App(){
const [temp,setTemp]=useState("");
const [word,setWord]=useState("");
const [size,setSize]=useState(400);
const [bgcolor,setBgcolor]=useState("ffffff");
const [qrcode,setQrcode]=useState("");

useEffect(()=>{
setQrcode(
  `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(word)}&size=${size}x${size}&bgcolor=${bgcolor}`
);

},[word,size,bgcolor]);

function handleClick(){
  setWord(temp);
}
return(
  <div className="App">
    <h1>QR Code Generator</h1>
    <div className="input-box">
      <div className="gen">
      <input
      type="text" onChange={(e)=>
      {setTemp(e.target.value)}
      }
      placeholder="Enter text to encode"
      />
      <button  className="button"
      onClick={handleClick}>
      Generator
      </button>
      </div>
      <div className="extra">
      <h5>Background color:</h5>
      <input
      type="color" onChange={(e)=>
        {setBgcolor(e.target.value.substring(1))
        }}
      />
      <h5>Dimension:</h5>
      <input
      type="range" min="200" max="600"
      value={size} onChange={(e)=>
      {setSize(e.target.value)}
      }
      />
      </div>
    <div className="output-box">
      <img src={qrcode} alt=""/>
      <a href={qrcode} download="QRcode">
      <button type="button">Download</button>
      </a>

    </div>
    </div>



  </div>
)

}
export default App;
