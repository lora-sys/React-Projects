import React,{useState} from 'react';
import validator from 'validator'

const App=()=>{
const [errorMessage,seterrorMessage]=useState('')
const validateCreditCard=(value)=>{
  if(validator.isCreditCard(value)){
    seterrorMessage("Valid CreditCard Number")
  }else{
    seterrorMessage("Enter valid CreditCard Number!")
  }
}
const restart=()=>{
  seterrorMessage('');
}
  return(
  <div style={{
    marginLeft:"200px",
    display:"flex",
    flexWrap:"nowrap",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
  }}>
  <pre>
    <h2>Validating CreditCard in ReactJS</h2>
    <span>Enter CreditCard:</span><input 
    type="text" onChange={(e)=>validateCreditCard(e.target.value)}
    /> <br/>
    <span style={{
    fontWeight:"bold",
    color:"red",
    }}>
    {errorMessage}
    </span >
    <button onClick={restart}>Click Me</button>
    </pre>



  </div>


  );




}
export default App;
// props top -> bottom
// value bottom -> top
