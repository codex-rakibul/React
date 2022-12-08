import React, { Component } from 'react';

 class State extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }
    handelIncrement = (e) => {
        this.setState({ 
            count: this.state.count + 1,
            bg: 'red'
        })
        
        
    }
    handelDecrement = () => {
        this.setState({ 
            count: this.state.count - 1 
        })
    }

    render() { 
        const {count,bg} = this.state; 
        return (
            <div>
                <h1>Count : {count}</h1>
                <button style={{margin:'10px', width:'25px', backgroundColor:'#001933', color:'white'}} onClick={this.handelIncrement} disabled={count===5? true : false}  > + </button>
                <button style={{margin:'10px', width:'25px', backgroundColor:'#001933', color:'white'}} onClick={this.handelDecrement} disabled={count===0? true : false}> - </button>
            </div>
        );
    }
}

export default State;