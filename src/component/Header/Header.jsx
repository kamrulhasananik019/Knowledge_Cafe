import React from 'react';
import hlog from '../../assets/Ellipse 1.png'
const Header = () => {
    return (
        <div className='container'>
        <div className=" d-flex align-items-center justify-content-between py-2">
             <h1>Knowledge Cafe</h1>
             <img src={hlog} alt="" />
        </div>
        <hr />
   </div>
    );
};

export default Header;