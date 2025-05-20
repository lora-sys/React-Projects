import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Question from './components/Question';
import Score  from './components/Score';
import qBank  from './components/QuestionBank';
import './App.css';


class App extends Component{
constructor(props){
  super(props);
  this.state={
    questionBank:qBank,
    currentQuestion:0,
    selectedOption:"",
    score:0,
    quizEnd:false,
  };
}
handleOptionChange=(e)=>{
  this.setState({
    selectedOption:e.target.value
  });
};
handleFormSubmit=(e)=>{
  e.preventDefault();
  this.checkAnswer();
  this.handleNextOption();
};
checkAnswer=()=>{
  const {questionBank,currentQuestion,selectedOption}=this.state;
  if(selectedOption===questionBank[currentQuestion].answer){
    this.setState( (prevState)=>
    ({
    score:prevState.score+1
    }));
  }
};
resetQuiz=()=>{
  this.setState({
    currentQuestion:0,
    selectedOption:"",
    score:0,
    quizEnd:false,
  });
};
handleNextOption=()=>{
const {questionBank,currentQuestion}=this.state;
if(currentQuestion+1<questionBank.length){
  this.setState((prevState)=>
  ({
  currentQuestion:prevState.currentQuestion+1,
  selectedOption:"",
  }));
} else{
  this.setState({
    quizEnd:true,
  });
};


}
render(){
const {questionBank,currentQuestion,selectedOption,quizEnd,score}=this.state;
return(
<div className="App d-flex flex-column justify-content-center align-items-center">
  <h1 className="app-title">QUIZ APP</h1>
  {!quizEnd? (
    <Question
    question={questionBank[currentQuestion]}
    selectedOption={selectedOption}
    onOptionChange={this.handleOptionChange}
    onSubmit={this.handleFormSubmit}
    />
  ):(
    <Score
    score={score}
    onNextQuestion={this.handleNextOption}
    className="score"
    onRestart={this.resetQuiz}
    />
  )}
  

</div>



);

}


};
export default App;


