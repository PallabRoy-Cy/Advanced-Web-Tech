import React from 'react';
import Navbar from '../../layouts/frontend/Navbar';

const Home = () => {
    return(
        <div>
        <Navbar/>
        <img src={require('./poster.png')} width="1400" height="500" />
        
        </div>
    );
}
export default Home;