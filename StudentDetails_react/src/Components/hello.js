import React from 'react';
// import Top from './Top';
import Person from './Person';
const Hello=(props)=>{
    return(
        <div>
        <h1>Student Details</h1>
        <Person name="santo" id="7353" cgpa="3.57"/>
        <Person name="Rafi" id="1345" cgpa="3.93"/>
        <Person name="rakib" id="7765" cgpa="3.50"/>
        <Person name="setu" id="6593" cgpa="3.63"/>
        <Person name="wam" id="8285" cgpa="3.73"/>
        </div>
    )
}
export default Hello; 