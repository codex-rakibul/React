import React, { Component } from 'react'

export default class Even_Handler extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changeValue:''
      }
    }
    
    HandelOnChange = (e) =>{
        this.setState({
            changeValue: e.target.value
        })
    }

  render() {
    return (
      <div>
        <input type="text" onChange={this.HandelOnChange} style={{width:'200px', height:'40px', margin:'10px', padding:'3px' }} />
        <p style={{color:'red', margin:'10px'}}>{this.state.changeValue}</p>
      </div>
    )
  }
}
