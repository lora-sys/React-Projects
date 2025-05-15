import React from 'react'
import "./Button.css"

const Button =(props) =>{
return <button onClick={props.callApi}>
Click to generate a joke
</button>;

}
//Export Button component
export default Button;