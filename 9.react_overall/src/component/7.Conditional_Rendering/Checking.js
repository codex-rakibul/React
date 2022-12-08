import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

class Checking extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    

    render() {
        const {isLoggedIn} = this.state;
        let element = isLoggedIn? <HomePage/> : <LoginPage/>;
        
        return (
            <div>
                {element}
            </div>
        )
    }
}

export default Checking;