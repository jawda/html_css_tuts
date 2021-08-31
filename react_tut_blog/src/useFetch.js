import { useState, useEffect } from 'react';

// making a custom hook 
const useFetch = (url) => {

        // making hooks that are reactive
        const [data, setData] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);

        // be careful changing state in here as it can cause infinite loop 
    //this also runs at page load
    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            // console.log("use effect ran");
            // pass in the url and associate the abort controller with this fetch 
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok)
                    {
                        // fire error because something is wrong 
                        throw Error('could not fetch the data for that resource');
                    }
                    // get the response object 
                    return res.json();
                })
                .then(data => {
                    // get the data after 
                    // console.log(data);
                    setData(data);
                    // once data is loaded remove loading container 
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    //check for abort error
                    if (err.name === 'AbortError')
                    {
                        console.log('fetch aborted');
                    } 
                    else 
                    {
                        // console.log(err.message);
                        setIsPending(false);
                        setError(err.message);
                    }
                   
                })
                // wait 1000 ms so that the timer shows don't do this in actual app just doing this for demo 
        }, 1000);

        // handle memory leak by doing a cleanup 
        return () => abortCont.abort();

    // console.log(name);
        // adding an empty dependency array here causes this to only run once 
        // }, []);
        // or we can make it have a dependency and then it will only change if that value changes. 
        // }, [name]);
    }, [url]);
    return { data, isPending, error }
}

export default useFetch;