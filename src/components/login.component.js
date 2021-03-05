import React, { Component } from "react";

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userAccount: {
          Username: "props.Username",
          Password: "props.Password",
          api_access_point: 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', 
          api_key: 'nkIw7MUaN61afevVxT2eQjJTq86GH9O6oahdb3x7'
            }
        }
      }

    nextPath(path) {
        this.props.history.push(path);
      }

      getUserAccount = async () => { 
        console.log('getUserAccount Method launched'); 
        

        let jsonObj = {
            Username: this.state.Username,
            Password: this.state.Password
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

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
          [name]:value 
        })
        var userAccount = this.state.userAccount;

        this.setState({
            userAccount : userAccount
        });
    }  

    handleButtonClicked() {
        console.log(this.state.userAccount);
      }

    render() {
        return (
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="Username" 
                        placeholder="Enter username" 
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control"
                        name="Password" 
                        placeholder="Enter password" 
                    />
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary btn-block" 
                    onClick={() => this.nextPath('/')}
                >Login
                </button>
            </form>
        );
    }
}