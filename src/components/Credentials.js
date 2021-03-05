import React, { Component } from "react";
import axios from 'axios'; 
import "../components/Credentials.module.css"
import './styles.css';

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

        nextPath(path) {
            this.props.history.push(path);
            
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
            
            <div class="container col-10 containerStyle headerMargin">
                <h3 class="mt-20 mb-20">Credentials Details</h3>
                <div class = "row mt-20">
                <div class = "box col"><b>Account Key</b></div>
                <div class="box col"><b>First Name</b></div>
                <div class="box col"><b>Last Name</b></div>
                <div class="box col"><b>Nric</b></div>
                <div class="box col"><b>Address</b></div>
                <div class="box col"><b>phone Number</b></div>
                <div class="box col"><b>Email</b></div>
                </div>
                <div class = "row mb-20">
                <div class = "box col">{this.state.accountKey}</div>
                <div class="box col">{this.state.firstName}</div>
                <div class="box col">{this.state.lastName}</div>
                <div class="box col">{this.state.nric}</div>
                <div class="box col">{this.state.address}</div>
                <div class="box col">{this.state.phoneNumber}</div>
                <div class="box col">{this.state.email}</div>
                </div>
                <center>
                <button 
                
                    type="submit" 
                    className="btn btn-primary btn-block buttonStyle" 
                    onClick={() => this.nextPath('/view_account_balance')}
                >Back
                </button>
                </center>
            </div>
            
        )
    }
}
export default Credentials
