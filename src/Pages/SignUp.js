import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import logoicon from '../logoicon.png'; 
import NavBar, {iconStyle} from "../Components/NavBar";
import Footer from "../Components/Footer"; 
import axios from "axios";
import "./SignIn.css";

import { connect } from "unistore/react";
import { actions } from "../store";


class SignUp extends Component {
	state={
		name:"",
		username:"",
		email:"",
		password:"",
		no_telp:"",
		address:"",
		usernameHasExist: false,
		emailHasExist: false
	}

	inputHandler(name){
        const url = "https://portofolioalphatech.herokuapp.com/api/users/register"

        const body = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            no_telp: this.state.no_telp,
            address: this.state.address,
        }
        const self = this
        console.log(body)
        axios
        .post(url, body)
        .then((response) => {
            console.log("Response: ", response)

            if(name === "username" && this.state.usernameHasExist){
                self.setState({usernameHasExist: false})            
            }

            if(name === "email" && this.state.emailExist){
                self.setState({emailHasExist: false})            
            }
        })
        .catch((err) => {
            if(name === "username"){
                self.setState({usernameHasExist: true})            
            }

            if(name === "email"){
                self.setState({emailHasExist: true})            
            }
            console.log(err)
        })
    }

    changeInput = e => {
        if(e.target.value.length > 3){
            console.log(e.target.value)
            if(e.target.name === 'username' || e.target.name === 'email' )
            this.inputHandler(e.target.name)
        }

        this.setState({[e.target.name]: e.target.value});
    };

	render() {
	  return (
	  
	  	<div>
			<NavBar />
			<div id='SignIn' class="container">
				<div>
					<div className="container">
						<div className="row" style={{marginTop:70}}>
							<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
								<div className="card card-signin my-5">
									<div className="card-body">
										<div className="text-center">
											<img src={logoicon} style={iconStyle} className="img-logo-brand" alt="logo-login"></img>    
											<h5 className="card-title" style={{marginTop: 10}}>haSports</h5>
										</div>
										{/*onSubmit={}*/}
										<form className="form-signin">
                                        <div className="form-label-group">
											<input name="name" type="text" id="inputName" className="form-control" placeholder="name" required autoFocus onChange={(e) => this.changeInput(e)}></input>
										</div>
										<div className="form-label-group">
											<input name="username" type="text" id="inputUserName" className="form-control" placeholder="username" required onChange={(e) => this.changeInput(e)}></input>
											<small className='text-danger'><i>{ (this.state.usernameHasExist) ? "*username has been used" : ""}</i></small>
										</div>
                                        <div className="form-label-group">
											<input name="email" type="text" id="inputEmail" className="form-control" placeholder="email" required autoFocus></input>
											<small className='text-danger'><i>{ (this.state.emailHasExist) ? "*email has been used" : ""}</i></small>
										</div>
										{/*onChange={}*/}
										<div className="form-label-group">
											<input name="password" type="password" id="inputPassword" className="form-control" placeholder="password" required onChange={(e) => this.changeInput(e)}></input>
										</div>
                                        <div className="form-label-group">
											<input name="no_telp" type="text" id="inputNoTelp" className="form-control" placeholder="no_telp" required onChange={(e) => this.changeInput(e)}></input>
										</div>
                                        <div className="form-label-group">
											<input name="address" type="text" id="inputAddress" className="form-control" placeholder="address" required onChange={(e) => this.changeInput(e)}></input>
										</div>
										<div className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" id="customCheck1"></input>
										</div>
										{/*onClick={}*/}
										<Link to="/dashboard/profile" onClick={() => this.props.signUpHandle(this.state.name, this.state.username, this.state.email, this.state.password, this.state.no_telp, this.state.address)}><button className="btn btn-lg btn-primary btn-block text-uppercase">Sign Up</button></Link>
										</form>
									</div>
									<div className="text-center" style={{marginBottom: 20}}>
                                        <span>Has alraedy account? <Link to="/signin">Sign In here!</Link></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	  );
	}
}

export default connect("token, is_login, type", actions) (withRouter(SignUp));