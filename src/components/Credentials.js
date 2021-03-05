import React, { Component } from "react";
import axios from 'axios'; 
import "../components/Credentials.module.css"

class Credentials extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "Group25",
            password: "om1o6OBdD9ZwjuH", 
            url: 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', 
            apiKey: 'nkIw7MUaN61afevVxT2eQjJTq86GH9O6oahdb3x7',
            accountKey: "",
            firstName: "",
            lastName: "",
            nric: "",
            address: "",
            phoneNumber: "",
            email: "",
          }
        }
        
    profile = async () => { 
        console.log('getProfile Method launched'); 
        let usernamePassword = {
            username: this.state.username,
            password: this.state.password
        }; 
        const response = await fetch(this.state.url, {
            method: 'POST', 
            headers: {'x-api-key': this.state.apiKey},
            // credentials: 'include', // To get cookie from backend
            body: JSON.stringify(usernamePassword)
        });

        const content = await response.json();

        console.log(content);

        const accountKey= content.accountKey;
        const firstName = content.firstName;
        const lastName= content.lastName;
        const nric= content.nric;
        const address= content.address;
        const phoneNumber= content.phoneNumber;
        const email= content.email;

        // Update state with content objects
        this.setState({
            accountKey: accountKey,
            firstName: firstName,
            lastName: lastName,
            nric: nric,
            address: address,
            phoneNumber: phoneNumber,
            email: email,
        }); 
        
    }
    
    componentDidMount(){
        this.profile()
    }
    render(){

        return(
            <div>
                <p className = "box">Account Key: {this.state.accountKey}</p>
                <p className = "box">First Name: {this.state.firstName}</p>
                <p className = "box">Last Name: {this.state.lastName}</p>
                <p className = "box">Nric: {this.state.nric}</p>
                <p className = "box">Address: {this.state.address}</p>
                <p className = "box">phone Number: {this.state.phoneNumber}</p>
                <p className = "box">Email: {this.state.email}</p>
            </div>
        )
    }
}
export default Credentials
