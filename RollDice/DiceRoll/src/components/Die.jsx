import React,{Component} from "react";
import './Die.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Die extends Component{
render(){
    const {face,rolling}=this.props;
    return(
        <div>
        <FontAwesomeIcon icon={['fas',`fa-dice-${face}`]} className={`Die
            ${rolling && `Die-sharking`}`} />
        </div>
    )
}

}
export default Die;