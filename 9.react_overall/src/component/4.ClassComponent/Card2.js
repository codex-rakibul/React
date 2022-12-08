import React, {Component} from 'react';

class Card2 extends Component {
   
    render() {
        const {name, id} =this.props;
        return (
            <div>
                <h3>{name}</h3>
                <p>{id}</p>
            </div>
        )
    }
}

export default Card2;