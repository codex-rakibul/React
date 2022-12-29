import React, { useState} from 'react';
import style from './faq.module.css';

const FAQ = ({faq}) => {
    const { title, desc} =  faq;
    const [ toggle, setToggle] = useState(false);
    
    
    const renderTitle = (
        <div className={style.desc}>
            <p>{desc}</p>
        </div>
    );
    return (
        <div  className={style.block}>
            <div>
                <h2>{title}</h2>
                <button className={style.btn}
                    onClick={()=>{setToggle(!toggle)}}>
                        {
                            toggle?"-":"+"
                        }
                </button>   
            </div>
            <div>
                {toggle && renderTitle}
            </div>
        </div>
    );
};

export default FAQ;