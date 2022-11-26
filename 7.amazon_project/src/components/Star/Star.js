import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faStarOfDavid} from '@fortawesome/free-solid-svg-icons';

const Star = (props) => {
    const star = props.str;
    console.log(star);

    const list = [];
    for(let i =0; i <star; i++){
        list.push(<p style={{color:'gold',padding:'2px'}}>{<FontAwesomeIcon icon={faStarOfDavid} />}</p>)
    }
    
    return (
        <div style={{display:'flex'}}>
            {list}
        </div>
    );
};

export default Star;