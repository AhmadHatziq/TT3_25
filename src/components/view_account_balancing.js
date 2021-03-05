import React, { Component } from "react";
import axios from 'axios';

export default class ViewAccountBalance extends Component {

    // Constructor: To store state variables
    
    constructor() {
        super()
        this.state = {
          username: "Group25",
          password: "om1o6OBdD9ZwjuH", 
          api_access_point: 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', 
          api_key: 'nkIw7MUaN61afevVxT2eQjJTq86GH9O6oahdb3x7'
        }
      }

    // To get user profile  
    getProfile = async () => { 
        console.log('getProfile Method launched'); 
        

        let jsonObj = {
            username: this.state.username,
            password: this.state.password
        }; 

        console.log(jsonObj); 

        const response = await fetch(this.state.api_access_point, {
            method: 'POST', 
            headers: {'x-api-key': this.state.api_key},
            // credentials: 'include', // To get cookie from backend
            body: JSON.stringify(jsonObj)
        });

        const content = await response.json();

        console.log(content);
    }

    // Render method
    render () {
        return ( 
            <div>
                <center><h1>Please view your account balance below: </h1></center>
                <button onClick = {this.getProfile}>Trigger</button>
            </div>
        ); 
    }
}; 