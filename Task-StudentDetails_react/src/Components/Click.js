import React from 'react';
import {useState} from 'react';

const Click=(props)=>{
    var i=0;
    const[d,setD] = useState("Hi");
    const change=()=>{
        setD("Changed");
    }

        return(
            <div>
                <button onClick={change}>Click</button>
                <span>{d}</span>
            </div>
        )
        }
    export default Click; 