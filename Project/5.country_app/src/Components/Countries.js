import React from 'react';
import {v4 as uuidv4} from 'uuid';
import Country from './Country';
import style from './countries.module.css';

const Countries = ({countries,onRemoveCountry}) => {
    return <section className={style.countries}>
        {
            countries.map(country => {
                const countryNew = {country,id:uuidv4()};
                return <Country {...countryNew} key={countryNew.id} onRemoveCountry={onRemoveCountry}/>;
            })
        }
    </section>;
};

export default Countries;