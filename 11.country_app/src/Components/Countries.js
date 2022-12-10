import React from 'react';
import {v4 as uuidv4} from 'uuid';
import Country from './Country';
import style from '../Components/countries.module.css';

const countries = (props) => {
    console.log(props.countries);
    return <section className={style.countries}>
        {
            props.countries.map((country) => {
                const countryNew ={ country,id: uuidv4()}
                return <Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry}/>;
            })
        }
    </section>;
};

export default countries;