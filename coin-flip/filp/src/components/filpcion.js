// import React,{Component} from 'react'
// import Coin from './coin'

// class FilpCoin extends Component
// {
//     static defaultProps={
//         coins:[
//         {
//         side: 'head', 
//         imgSrc:
//         'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'
//         },
//         {
//         side: 'tail', 
//         imgSrc:
//             'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'
//         }

//         ]
//     }
//     constructor(props){
//         super(props)
//         //Resopnsible to render current updated coin face
//         this.state={
//             currFace:null,
//             totalFlips:0,
//             heads:0
//         }
//         // Binding context of this keyword
//         this.handleClick=this.handleClick.bind(this);
//     }
//     choice(arr){
//         const randomindex=Math.floor(Math.random()*arr.length)
//         return arr[randomindex]
//     }
//     //filpcoin function
//     flipCoin(){
//         const newFace=this.choice(this.props.coins)
//         this.setState(
//             currState=>{
//                 const newheads=currState.heads+(newFace.side==='head'? 1 : 0)
//                 return{
//                     currFace:newFace,
//                     totalFlips:currState.totalFlips+1,
//                     heads:newheads
//                 }
//             }
//         )
//     }
//     handleClick(){
//         this.flipCoin()
//     }
//     render(){
//     const {currFace,totalFlips,heads}=this.state
//     return(
//         <div>
//         <h2>Let' s flip a coin</h2>
//         {/*if current flip exist then show current face*/}
//         {currFace && <Coin info={currFace}/>}
//         <button onClick={this.handleClick}>Flip Me!</button>
//         <p>
//             Out of {totalFlips} flips ,there have been{heads} heads
//             and {totalFlips-heads}tails
//         </p>
//         </div>
//     )
//     }
// }
// export default FilpCoin

import React, { useState } from 'react';
import Coin from './coin';

const FlipCoin=({
    coins = [{
    side: 'head',
    imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'
}, {
    side: 'tail',
    imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'
}]
}) =>{
const [currFace,setcurrface]=useState(null);
const [totalFlips,settotalFlips]=useState(0);
const [heads,setheads]=useState(0);
const choice=(arr)=> arr[Math.floor(Math.random()*arr.length)]
const flipCoin=()=>{
    const newFace=choice(coins);
    setcurrface(newFace);
    settotalFlips(prev=>prev+1);
    if(newFace.side==='head') setheads(prev=>prev+1);
};
return(
<div>
    <h2>Let' s flip a coin</h2>
    {currFace && <Coin info={currFace}/>}
    <button onClick={flipCoin}>Flip Me!</button>
    <p>
        Out of {totalFlips} flips,there have been {heads} heads and
        {totalFlips-heads} tails
        </p>
</div>
)
};
export default FlipCoin;