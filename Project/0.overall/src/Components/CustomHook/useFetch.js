import React, {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] =useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) =>{
            if(!response.ok){
                throw new Error("Fetching data failed");
                
            }else{
                return response.json();
            }
        })
        .then((data) =>{
            setData(data);
            setIsLoading(false);
            setError("");
        })
        .catch((error) =>{
            setError(error.message);
            setIsLoading(false);
        });
    },[url]);
    
    return {data,isLoading,error};
};

export default useFetch;