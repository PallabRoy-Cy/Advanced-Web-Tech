import React from 'react';

const Person=(props)=>{
    return(
        <div>
            Name: {props.name}<br/>
            Id: {props.id}<br/>
            Cgpa: {props.cgpa}
        </div>
    )
}
export default Person; 