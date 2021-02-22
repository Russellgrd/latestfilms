import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);

     useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
            setData(data);
            console.log(data);
            })
            .catch((err) => {
                console.log('couldnt connect - this is an error in Russells machine')
            })    
    },[url]);
    return {
        data
    };
};

export default useFetch;