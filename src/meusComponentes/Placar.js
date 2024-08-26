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
                    <div className="visor" style={{textAlign: 'center', border:'2px solid blue', width:'40px'}}>
                        {this.state.placarAtual}
                    </div>
                    <div className="botoes" style={{textAlign: 'center', width:'45px'}}>
                        <button onClick={this.aumentar}>+</button>
                        <button onClick={this.diminuir}>-</button>
                    </div>
                </div>  
        )
    }
}