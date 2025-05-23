import React,{Component} from 'react'

class Box extends Component
{
constructor(props){
    super(props)
    this.handleChangeColor=this.handleChangeColor.bind(this)
}

handleChangeColor(){
    this.props.changeColor(this.props.color);
}
render(){
return (<div onClick={this.handleChangeColor}
style={{backgroundColor:this.props.color,
width:'13em',height:'13em'}
}
>
{this.props.color} 
</div>)

}

}
export default Box;