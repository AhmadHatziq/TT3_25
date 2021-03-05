import React, { Component } from "react";
import bcrypt from 'bcryptjs';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
          checkboxes: [],
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
        const target = event.target;
        var value = target.value;
        this.setState({
          [event.target.name]: event.target.value
        })
        var passwordSalt = this.state.Password;
        
        
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(passwordSalt, salt, (err, hash) => {
                  console.log(hash); 
                  //store hash in database
            });
        });
        

        //console.log(this.refs.checkboxes.checked);
        if (this.refs.checkboxes.checked == false) {
            console.log("not checked");
        }
        else {
            console.log("checked");
        }
        
          console.log(passwordSalt);
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
                <div>
                Remember me <input id="rememberChkBox" value="checked" ref="checkboxes"name="checkboxes"type="checkbox"/>
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