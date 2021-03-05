import React, { Component } from "react";

class TransactionHistory extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            username: "Group25",
            password: "om1o6OBdD9ZwjuH", 
            api_access_point: 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', 
            api_key: 'nkIw7MUaN61afevVxT2eQjJTq86GH9O6oahdb3x7', 
            account_key: '8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924', 
            transactionHistory: []

        } ; 
    
    } ; 
    
    getTransactionHistory = async () => { 
        console.log('transaction history method');

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
        }); 

        // Process items in content
        let array_responses = []
        for (let i = 0; i < content.length; i++) {
            let response = content[i]; 
            array_responses.push(response); 
          }

        
        // Save item back to state history
        this.setState({
            transactionHistory: array_responses
        }); 


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

       
    } ; 

    render() { 
        // Declare var to display all transaction history
        let transact_html = [];
        const hist = this.state.transactionHistory; 

        if (typeof hist !== "undefined") {
            if (hist.length > 0) { 
                for (let i = 0; i < hist.length; i++) {
                    
                    let response = hist[i];

                    // Extract whatever u need
                    let accountKey = response.accountKey; 

                    transact_html.push(<li key={i}>{accountKey}</li>)
                };
            };
        }
        
        

        return ( 
            <div>
                <h3>Transaction history</h3>
                <button onClick = {this.getTransactionHistory}>Trigger</button>
                {transact_html}
            </div>
        );
    };
};
 
export default TransactionHistory;