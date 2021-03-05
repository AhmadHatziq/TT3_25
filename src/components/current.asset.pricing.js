import React, { Component } from "react";
import axios from 'axios';
import { Link } from  "react-router-dom";
import './styles.css';


export default class currentassetpricing extends Component {

    // Constructor: To store state variables

    constructor() {
        super()
        this.state = {
            username: "Group25",
            password: "om1o6OBdD9ZwjuH",
            api_access_point: 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current',
            api_key: 'nkIw7MUaN61afevVxT2eQjJTq86GH9O6oahdb3x7',
            account_key: '8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924',
            assetSymbol: '',
            price: '',
            timestamp: '',
        }
    }

    // To get user profile  
    getProfile = async () => {
        // console.log('getProfile Method launched'); 

        // Create Request Body (JSON)
        let jsonObj = {
            accountKey: this.state.account_key
        };
        // console.log(jsonObj); 

        // Send response
        const response = await fetch(this.state.api_access_point, {
            method: 'POST',
            headers: { 'x-api-key': this.state.api_key },
            // credentials: 'include', // To get cookie from backend
            body: JSON.stringify(jsonObj)
        });

        // Get response content and extract contents
        const content = await response.json();
        console.log(content);
        const assetSymbol = content.assetSymbol;
        const price = content.price;
        const timestamp = content.timestamp;

        // Update state with content objects
        this.setState({
            assetSymbol: assetSymbol,
            price: price,
            timestamp: timestamp
        });
    }

    // Render method
    render() {
        return (
            <div class="container col-8 containerStyle headerMargin">
                <center><h1>View Current Pricing of Asset: </h1></center>
                <h1>Asset Name: {this.state.assetSymbol}</h1>
                <h1>Price: {this.state.price}</h1>
                <h1>Time: {this.state.timestamp}</h1>

                <br/><Link to = "/sign-in">Sign Out</Link>
               <br/><Link to = "/current.asset.pricing">View Current Asset Pricing</Link>
               <br/><Link to = "/transaction_history">View Transaction History</Link>
               <br/><Link to = "/credentials">Credentials</Link>
            </div>
        );
    }
}; 