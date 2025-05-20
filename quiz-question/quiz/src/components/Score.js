import React,{Component} from 'react'
import '../App.css'

class Score extends Component{
    render(){ const {score,onRestart} =this.props;
    return(
    <div>
        <h2>Results</h2>
        <h4>Your Score: {score}</h4>
        <button onClick={onRestart}  className="btn btn-primary mt-3">Restart Question</button>
    </div>
    );


}
}
export default Score;