import React from 'react';

const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

const year = [];
year.push(dateName + "/" + monthName + "/"+ yearName);

const Card = (props) => {
    const {title, desc} = props.allData;
    return (
        <div>
            <div className='card'>
                <h3 className='cardTitle'>{title}</h3>
                <p className='cardDesc'>{desc}</p>
                <p className='cardFooter'>{year}</p>
            </div>
        </div>
    );
};

export default Card;