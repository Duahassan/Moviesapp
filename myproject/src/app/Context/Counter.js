import { createContext, useState } from "react";

const CounterContext = createContext(null);
 export const CounterProvider =(props)=>{
    const[count, setCount]=useState(0);

    return(
        <CounterContext.Provider value={count}>
            {props.children}
        </CounterContext.Provider>
    )

 }