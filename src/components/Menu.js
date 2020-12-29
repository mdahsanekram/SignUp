import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/MenuStyle.css';

const Menu = () =>{

    return (
        <div className="Menustyle">
            <ul>
                <li><Link to="/" style={{ textDecoration: 'none' ,color:'white'}} >Insert Data</Link></li>
                <li><Link to="./ShowData" style={{ textDecoration: 'none',color:'white' }} >Display Records</Link></li>
               
            </ul>
        </div>

    );
}