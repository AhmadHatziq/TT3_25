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
                    let orderType = response.orderType; 
                    let timestamp = response.timestamp; 
                    let assetSymbol = response.assetSymbol; 
                    let assetAmount = response.assetAmount; 
                    let assetPrice = response.assetPrice; 
                    let cashAmount = response.cashAmount; 

                    transact_html.push(<li key={accountKey}>{orderType}</li>)
                    transact_html.push(<li key={accountKey}>{timestamp}</li>)
                    transact_html.push(<li key={accountKey}>{assetSymbol}</li>)
                    transact_html.push(<li key={accountKey}>{assetAmount}</li>)
                    transact_html.push(<li key={accountKey}>{assetPrice}</li>)
                    transact_html.push(<li key={accountKey}>{cashAmount}</li>)
                };
            };

        }
            
        return ( 
            
            <div>
                <h3>Transaction history</h3>
                <button onClick = {this.getTransactionHistory}>Trigger</button>
                
                <table>
                    <th>timestamp orderType assetSymbol assetAmount assetPrice cashAmount</th>
                    {this.state.transactionHistory.map((item =>
                    <tr><td key={item.accountKey}> {item.timestamp} {item.orderType} {item.assetSymbol} {item.assetAmount} {item.assetPrice} {item.cashAmount} </td></tr>
                    ))}
                    
                </table>
            </div>
        );
    };
};
 
export default TransactionHistory;