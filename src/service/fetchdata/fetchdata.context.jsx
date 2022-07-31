import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FetchContext = React.createContext(null);

export const FetchContextProvider = ({children}) => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch("wss://api-betatestnet.brine.finance/liveorderbookwire")
        .then((res)=> res.json)
        .then((result)=>{
            console.log(result);
        })
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <FetchContext.Provider value = {{ data }}>
            {children}
        </FetchContext.Provider>
    )
}