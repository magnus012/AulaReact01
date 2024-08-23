import { Component } from "react";

export default class Placar extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state={
            placarAtual : new Placar().
        }
    }
    componentDidUpdate(){
    }

    aumentar(){
        this.setState({
            placarAtual: this.placarAtual+1
        })  
    }

    diminuir(){
        this.setState({
            placarAtual: this.placarAtual-1
        })  
    }

    render(){
        return(
            <h1>
                {this.state.placarAtual}
            <button onClick={this.state.placarAtual.aumentar}>+</button>
            <button onClick={this.state.placarAtual.diminuir}>-</button>
            </h1>
        )
    }

}