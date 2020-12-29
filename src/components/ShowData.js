import React, { Component } from 'react';
import axios from 'axios';
import './CSS/style.css';
import Menu from './Menu';


class ShowData extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {

            username :"",
            email : "",
            mobile : "",
            password: "",
            data : []
        }
    }



    componentDidMount()
    {

        axios.post('http://localhost/login_signup/ShowData.php')

            .then((response)=>{
               

                

                this.setState({data  :  response.data});
               // Document.getElementById('requestSend').interHTML = "Reuest sending...";
               console.log(this.state.data);

            }).catch(function(error)
            {
                alert(error);
            })




    }



    render()
    {


        return (

                <div>

                <Menu />

<table class="table">
  <caption  className="h"><h1 >List of users</h1></caption>
  <thead>
    <tr>
      <th scope="col">Id </th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Password</th>

    </tr>
  </thead>
  <tbody>
    {

        this.state.data.map((user,index)=>(




            <tr key={user.id}>
               <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
               <td>{user.password}</td>

            </tr>
        ))

    }
  </tbody>
</table>

                </div>

        )


    }
}


export default ShowData;