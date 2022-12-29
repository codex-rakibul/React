import React, {useEffect, useState} from 'react';
import {faqsData} from './DATA'
import FAQ from './FAQ';

const FAQS = () => {
    const [faqs, setFaqs] = useState(faqsData);
   

    return <main>
        <section>
            <h1>FAQs</h1>
            {
                faqs && faqs.map(faq =><FAQ key={faq.id} faq={faq}/>)    
            }
        </section>
    </main>;
};

export default FAQS;