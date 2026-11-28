import React, { Component } from 'react'
import Add from './Add';
import Sub from './Sub';

export default class Counter extends Component {
constructor(){
    super();
    this.state={
        count:0,
    };
}

add=()=>{
    this.setState({count:this.state.count +1});
};

sub=()=>{
    this.setState({count:this.state.count -1});
};

  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <Add add={this.add}/>
        <Sub sub={this.sub}/>
        
      </div>
    )
  }
}
