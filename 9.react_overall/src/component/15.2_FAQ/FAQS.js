import React, { useState } from 'react';
import FAQ from './FAQ';
import {faqsData} from './Data';
import style from './faqs.module.css';

const FAQS = () => {
    const [faqs, setFaqs] = useState(faqsData);

    return <main className={style.container}>
        <section className={style.faqs}>
            <h1 className={style.h1}>FAQs</h1>
            {
                faqs.map(faq => <FAQ key={faq.id} {...faq} />)
            }
        </section>
    </main>;
};

export default FAQS;