import React from 'react';
import {Link} from "react-router-dom";
function Top (){
    return(
        <div>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/profile">Profile</Link>&nbsp;
            
            <Link to="/students/:id/:name/:cgpa">Students</Link>&nbsp;
        </div>
    )
} 
export default Top;