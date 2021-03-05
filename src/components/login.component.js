import React, { Component } from "react";

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
          Username: "",
          Password: ""
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
                    onClick={() => this.nextPath('/main-menu')}
                >Login
                </button>
            </form>
        );
    }
}