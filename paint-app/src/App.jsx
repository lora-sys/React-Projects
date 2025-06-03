import { useEffect,useState,useRef } from "react";
import Menu from './components/Menu'
import "./App.css"

function App(){
const canvasRef=useRef(null);
const ctxRef=useRef(null); 
const [isDrawing,setIsDrawing]=useState(false);
const [linewidth,setLineWidth]=useState(5);
const [lineColor,setLineColor]=useState("black");
const [lineOpacity,setLineOpacity]=useState(0.1);

useEffect(()=>{
const canvas=canvasRef.current;
const ctx=canvas.getContext("2d");
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.globalAlpha=lineOpacity;
ctx.strokeStyle=lineColor;
ctx.lineWidth=linewidth;
ctxRef.current=ctx;
},[linewidth,lineColor,lineOpacity]);

const startdrawing=(e)=>{
  ctxRef.current.beginPath();
  ctxRef.current.moveTo(
    e.nativeEvent.offsetX,
    e.nativeEvent.offsetY
  );
  setIsDrawing(true);
}

const endDrawing=()=>{
  ctxRef.current.closePath();
  setIsDrawing(false);
}

const draw=(e)=>{
if(!isDrawing){
  return;
}
ctxRef.current.lineTo(
  e.nativeEvent.offsetX,
  e.nativeEvent.offsetY
);
ctxRef.current.stroke();
};

const clearCanvas=()=>{
  const canvas=canvasRef.current;
  const ctx=canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空整个画布
}
        return (
  <div className="App">
  <h1>Paint App</h1>
  <div className="draw-area">
  <Menu
  setLineColor={setLineColor}
  setLineWidth={setLineWidth}
  setLineOpacity={setLineOpacity}
  
  />
 
 <canvas
 onMouseDown={startdrawing}
 onMouseUp={endDrawing}
 onMouseMove={draw}
 ref={canvasRef}
 width={`1080`}
 height={`720`}
 />
  </div>

<button  className="btn" onClick={()=>clearCanvas()}>Clear Canvas</button>

  </div>

);



}
export default App;