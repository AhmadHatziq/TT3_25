import React, { Component } from "react";
import axios from 'axios';

// Component to view account balance. Please refer to 'View Wallet Balances' part of Documentation
// for API details. 
export default class ViewAccountBalance extends Component {

    // Constructor: To store state variables
    
    constructor() {
        super()
        this.state = {
          username: "Group25",
          password: "om1o6OBdD9ZwjuH", 
          api_access_point: 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', 
          api_key: 'nkIw7MUaN61afevVxT2eQjJTq86GH9O6oahdb3x7', 
          account_key: '8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924', 
          assetBalance: '', 
          cashBalance: '', 
          showBalance: false,
          balanceHtml: '', 
          table_style: 'border: 1px solid black;'
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
        const asset_balance = content.assetBalance; 
        const cash_balance = content.cashBalance; 

        // Update state with content objects
        this.setState({
            assetBalance: asset_balance,
            cashBalance: cash_balance
        }); 

        // Toggles the boolean value
        const doesShow = this.state.showBalance; 
        this.setState({showBalance: !doesShow});
    }

    // Render method
    render () {

        let balance_details = null;

        if (this.state.showBalance === true) {
            balance_details = ( 
                <div>
                    <center>
                    <table style={{border : '1px solid black'}}>
                        <tr>
                            <th style={{border : '1px solid black'}}>Account</th>
                            <th style={{border : '1px solid black'}}>Balance ($)</th>
                        </tr>
                        <tr>
                            <td style={{border : '1px solid black'}}>Asset Balance</td>
                            <td style={{border : '1px solid black'}}>{this.state.assetBalance}</td>
                        </tr>
                        <tr>
                            <td style={{border : '1px solid black'}}>Cash Balance</td>
                            <td style={{border : '1px solid black'}}> {this.state.cashBalance}</td>
                        </tr>
                        </table>
                    </center>
                </div>
            );
        }; 

        return ( 
            <div>
                <center><h1>Please view your account balance below: </h1></center>
                <button onClick = {this.getProfile}>Toggle Balance</button>
                <p>
                    As your balance is confidential, please ensure you are in a secure environment
                    before viewing balance ie ensure there is no one standing behind you. 
                </p>

               <center>
                <table>
                    {balance_details}
                </table>
               </center>
            </div>
        );
    }
}; 