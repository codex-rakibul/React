import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Data from './data.json';

const Nmap = () => {

    return (
        <div>
            {
                Data.map((user) => {
                    const {name, id, Address} = user;
                    return (
                        <div key={id}>
                            <p>Name : {name}</p>
                            <p>Id : {id}</p>
                            {
                                Address.map((ad, index) =>{
                                    const {distrit, portNumber} = ad;
                                    return (
                                        <div key={index}>
                                            <p>Distrit : {distrit}</p>
                                            <p>Port Number : {portNumber}</p>
                                        </div>
                                    );
                                })
                            }
                            <br></br>
                        </div>
                    );
                })
            }
            
        </div>
    );
};

export default Nmap;