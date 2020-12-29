import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import image1 from './Image/login.svg';
import {Link} from 'react-router-dom';
import './CSS/Login.css';




class LoginForm extends Component{

    constructor(props){
        super(props);
       
        this.state = {
            email : "",
            password : "",
            logged : false,
           
        }
    }


    handleChangeAll = (event) =>{

        this.setState({[event.target.name ] : event.target.value});

    }



    // Submit function start here 

    handleSubmit = (event) =>{
            event.preventDefault();
            
            if(this.state.email.length !=0 && this.state.password.length !=0)
            {

                let formData = new FormData();
                formData.append("email",this.state.email);
                formData.append("password",this.state.password);
                axios.post('http://localhost/login_signup/Login.php',formData)
                .then((response)=>{

                   console.log(response.data);
                  if(response.data[0] === "success")
                  {
                      //this.setState({logged:true});
    
                      window.sessionStorage.setItem("userID",response.data[1]);
                      this.setState({logged:true});
                     
                  }
                  else
                   { 
                       console.log("Else data ",response.data);
                       this.setState({logged : false});
                       document.getElementById('para').innerHTML="Invalid Email or Password";
                   }


                }).catch(function (error){

                    alert(error);
                })

               
            }
            else
            {
                alert("Password Must be more the 1 digit ");
            }


    }

    render(){

        if(this.state.logged === true)
        {
            return <Redirect to="/Home" />
        }


            return(
                <div>

            <div className="header">
                
                <div>
                {/* Logo */}

                </div>
                


            </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 col-sm-12">
                
               
                
                <div className="wrapperLogin fadeInDown">
                  <div id="formContent">
                  
                    <div className="fadeIn first">
                      <img src={image1} id="icon" alt="User Icon" height="200px"  />
                      <h3>User Login</h3>    
                    </div>

                  
                    <form   onSubmit={this.handleSubmit}>
                      <input type="email" id="login" className="fadeIn second" name="email" placeholder="email"  value={this.state.email} onChange={this.handleChangeAll}  required/>
                      <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"  value={this.state.password} onChange={this.handleChangeAll} required />
                      <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>

                   
                    <div id="formFooter">
                      <Link to="/SignUp">Sign UP</Link>
                        <p id="para" style={{color : "red"}}></p>
                    </div>

                  </div>
                </div>

            
            
            </div>
         </div>
        </div>  




 </div>

        );

    }



}


export default LoginForm;