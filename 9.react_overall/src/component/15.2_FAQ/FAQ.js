import React,{useState} from 'react';
import style from './faq.module.css';

const FAQ = ({id, title, desc}) => {
    const [ toggle, setToggle] = useState(false);
    
    const handleToggle = (e) =>{
        setToggle(!toggle)
    };
    
    const renderFqa =(
        <article className={style.faq}>
            <div>
                <h4>{title}</h4>
                <button className={style.btn}
                    onClick={handleToggle}>
                    {
                        !toggle? "+" : "-"
                    }
                </button>
            </div>
            {toggle && ( <p className={style.pra}>{desc}</p>)}
        </article>
    );

    return renderFqa ;
};

export default FAQ;