import React, { Component } from "react";

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userAccount: {
          Username: "props.Username",
          Password: "props.Password"
            }
        }
      }

    nextPath(path) {
        this.props.history.push(path);
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