import React, { Component } from "react";

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
          Username: "",
          Password: "",
          api_access_point: 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', 
          api_key: 'nkIw7MUaN61afevVxT2eQjJTq86GH9O6oahdb3x7'
            
        }
        this.handleChange = this.handleChange.bind(this)
      }

    nextPath(path) {
        this.props.history.push(path);
      }

      

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        })
        
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
                        onChange={this.handleChange}

                    />
                    <h1>{this.state.Username}</h1>
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control"
                        name="Password" 
                        placeholder="Enter password" 
                        onChange={this.handleChange}
                    />
                    <h1>{this.state.Password}</h1>
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