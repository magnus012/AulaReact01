import { Component } from "react";

export default class Placar extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state={
            placarAtual : 0
        }
    }
    componentDidUpdate(){
    }

    aumentar=()=>{
        this.setState({
            placarAtual: this.state.placarAtual+1
        })  
    }

    diminuir=()=>{
        if(this.state.placarAtual>0)
        {    
            this.setState({
                placarAtual: this.state.placarAtual-1
            })
        }
    }

    render(){
        return(
            <div>
            <h1 style={{border:'5px solid blue', padding:'0rem 0.4rem', width:'40px'}}>{this.state.placarAtual}</h1>
            <h2 style={{padding:'0rem 0.6rem'}}><button onClick={this.aumentar}>+</button>
            <button onClick={this.diminuir}>-</button></h2>
            </div>
        )
    }

}