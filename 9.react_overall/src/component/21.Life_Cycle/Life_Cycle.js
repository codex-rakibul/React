import React, { Component } from 'react';

// Mounting -> constructor -> render -> componentDivMount
// Updating -> state/props -> render
// Unmounting
class Life_Cycle extends Component {
    constructor(props) {
      super(props)
    
      console.log("Constructor");

      this.state = {
         count: 0,
      }
    };

    // shouldComponentUpdate(){
    //     console.log("ShouldComponentUpdate");
    // };
    
    componentDidMount(){
        console.log("ComponentDidMount");
    };
    componentDidUpdate(){
        console.log("ComponentDidUpdate");
    };

    HandleIncrement =() =>{
        this.setState({
            count: this.state.count + 1,
        });
    };
    
    render() {
        console.log("Render");
        return (
            <div>
                <h3>Count : {this.state.count}</h3>
                <button onClick={this.HandleIncrement}>+</button>
            </div>
        );
    }
}

export default Life_Cycle;