import React, { Component } from "react";

class TransactionHistory extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            username: "Group25",
            password: "om1o6OBdD9ZwjuH", 
            api_access_point: 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', 
            api_key: 'nkIw7MUaN61afevVxT2eQjJTq86GH9O6oahdb3x7', 
            account_key: '8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924', 
            transactionHistory: []

        }

        this.getTransactionHistory = this.getTransactionHistory.bind(this);
    }
    
    getTransactionHistory = async () => { 

        // Create Request Body (JSON)
        let jsonObj = {
            accountKey: this.state.account_key
        }; 

        // Send response
        const response = await fetch(this.state.api_access_point, {
            method: 'POST', 
            headers: {'x-api-key': this.state.api_key},
            body: JSON.stringify(jsonObj)
        });

        // Get response content and extract contents
        const content = await response.json();
        console.log(content);
        this.setState({
            transactionHistory:content.data
        })
       // const transactions = content.map(transaction => 
       // <transaction 
       //     key = {transaction.transactionId}
       //     orderType = {transaction.orderType}
       //     timestamp = {transaction.timestamp}
       //     assetSymbol = {transaction.assetSymbol}
       //     assetAmount = {transaction.assetAmount}
       //     assetPrice = {transaction.assetPrice}
       //     cashAmount = {transaction.cashAmount}
       // />)

        // Update state with content objects
       // this.setState({
       //     transactionHistory: transactions, 
            
       // }); 
    }

    render() { 
        return ( 
            <div>
                <button onClick = {this.getTransactionHistory}>get transaction history</button>
                <h3>Asset Balance: {this.state.transactionHistory}</h3>
            </div>
        )
    }
}
 
export default TransactionHistory;