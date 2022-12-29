import React from 'react';
import style from './country.module.css';
const Country = ({country,onRemoveCountry}) => {
    const {name, flags, capital, population, area} = country;

    const handleRemoveCountry = (countryName) =>{
        onRemoveCountry(countryName);
    };
    return <article className={style.country}>
        <div>
            <img src={flags.png} alt={name.common} className={style.flag}/>
            <h3>Name : {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <button className={style.btn}
                onClick={()=>{handleRemoveCountry(name.common)}}>
                Remove
            </button>
        </div>
    </article>;
};

export default Country;