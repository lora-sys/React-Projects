import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup  from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component{
constructor(props){
  super(props);
  this.state={
    userInput:"",
    list: [],
  };
}
updateInput(value){
  this.setState({
    userInput:value
  });
}
addItem(){
  if(this.state.userInput!== ""){
  const userInput={
    // add  a random id which is used to delete
    id : Math.random(),
    // add the user value to list
    value: this.state.userInput,
  };

  // update list
  const list=[...this.state.list];
  list.push(userInput);
  //reset state
  this.setState({
    list,
    userInput: "",
  });
  }
}

//this function to deltete item fron list use id to delete
deleteItem(key){
const list=[...this.state.list];
// filter the list to remove the item with the id
const updatelist=list.filter((item) => item.id !==key);
//update list in state
this.setState({
  list: updatelist,
});
}
// this function to edit item in the list
editItem = (index)=>{
const todos =[...this.state.list];
const editTodo =prompt("Edit your todo");
if(editTodo !== null && editTodo.trim()!==''){
let updatedTodos =[...todos];
updatedTodos[index].value=editTodo;
this.setState({
  list:updatedTodos,
});
}
}

  render(){
return(
<Container>
<Row  style={{display : "flex",
justifyContent: "center",
alignItems: "center",
fontSize: "2rem",
fontWeight: "bolder",
marginTop: "20px",
textAlign: "center",
}} >
  <Col>
  <h1>Todo List</h1>
  </Col>
</Row>

<hr/>
<Row>
<Col >
<InputGroup classname="mb-3" >
<FormControl  
plavceholder="add item . . ."
size="lg"
value={this.state.userInput}
onChange={
  (item) => this.updateInput(item.target.value)

}
aria-label="add item"
aria-describedby="basic-addon2"
/>

<InputGroup>
<Button
variant="dark"
classname="mt-2"
onClick={() => this.addItem()}
>
ADD
</Button>
</InputGroup>
</InputGroup>
</Col>
</Row>

<Row>
<Col md={{span:5,offset:4}}>
<ListGroup>
{/*map over and print items */}
{this.state.list.map(  
  (item,index) =>{
    return(

    <ListGroup.Item
    variant="dark"
    action
    style={{display:"flex",
      justifyContent:"space-between",// to make the button to the right
    }}
    key={item.id}
    >
    {item.value}
    <span>
    <Button style={{marginRight: "10px"}}
    variant="light"
    onClick={()=> this.deleteItem(item.id)}
    >
    Delete
    </Button>
    <Button
    variant="light"
    onClick={()=>this.editItem(index)}

    >
    Edit
    </Button>
    </span>
    </ListGroup.Item>

    );
  
  })}
</ListGroup>
</Col>
</Row>

</Container>
);
  }
}
export default App;