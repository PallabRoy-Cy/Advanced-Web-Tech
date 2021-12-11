import React from 'react';
import { useParams } from 'react-router';
import Hello from './hello';
const PDetails=()=>{
    const {id,name,cgpa} = useParams();
    return(
        <div>
           <h1>Student ID {id}</h1>
           <h1>Student Name {name}</h1>
           <h1>Student cgpa {cgpa}</h1>
        </div>
    )
}
export default PDetails;