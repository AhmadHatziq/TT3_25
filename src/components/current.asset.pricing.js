import React, { Component } from "react";
import axios from 'axios';


    constructor() {
        super();
        this.state = {
            tableData: [{
                username: "Group25",
                password: "om1o6OBdD9ZwjuH",
                api_access_point: 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current',
                api_key: 'nkIw7MUaN61afevVxT2eQjJTq86GH9O6oahdb3x7',
                account_key: '8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924',
                assetSymbol: '',
                price: '',
                timestamp: '',
            }],
        };
    }


    // To get user profile  
    componentDidMount() {
        axios.get('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current', { headers: { 'x-api-key': this.state.api_key } }, {
            responseType: 'json'
        }).then(response => {
            this.setState({ tableData: response.data });
        });
    }

    // Render method
    render() {
        const { tableData } = this.state;
        return (<ReactTable.default data={tableData}
            columns: [
            {
                Header: "Asset Symbol",
                accessor: "assetSymbol",
            },
            {
                Header: "Price",
                accessor: "price",
            },
            {
                Header: "Time Stamp",
                accessor: "timestamp",
            }
        ])
    }
