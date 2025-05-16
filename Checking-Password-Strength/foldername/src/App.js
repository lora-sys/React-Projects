import React from 'react';
import validator from 'validator';
const App=() =>{
const [errorMessage,seterrorMessage]=React.useState("");

const validate=(value)=>{

  if(validator.isStrongPassword(value,{
    minlength :8,
    minLowercase :1,
    minUppercase :1,
    minNumbers :1,
    minSymbols:1,

  } )   ) {
  seterrorMessage("Is Strong Password");
  }else{
    seterrorMessage("Is Not Strong Password");
  }
}

return (

<div  style={{
  marginLeft: '200px',
}}    >
<pre>
<h2>checking Password Strength in ReactJS </h2>
<span style={{fontWeight : 'bold'}}  >Enter password:</span><input type="text"
onChange={(e)=>validate(e.target.value)  } placeholder='PassWord'   /><br/>
{errorMessage === ''? null : <span style={{fontWeight:'bold', color:
  'red'
}}
>
  {errorMessage
  }
</span>    }

</pre>




</div>








);


}






export default App;
