import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import image1 from './Image/login.svg';
import {Link} from 'react-router-dom';
import './CSS/Login.css';

class Home extends Component
{
    constructor(props)
    {
        super(props);

        this.state  = {


        }
    }


    render(){

        return(
            <div>

                    <h1>This is Home Page</h1>

            </div>

        )
    }
}



export default Home;