import React, { Component } from "react";
import { Link, withRouter, Redirect } from 'react-router-dom';
import logoicon from '../logoicon.png'; 
import NavBar, {iconStyle} from "../Components/NavBar";
import Footer from "../Components/Footer"; 

import "./SignIn.css";


import { connect } from "unistore/react";
import { actions } from "../store";

class SignIn extends Component {
	state = {
		username: '',
		password: ''
	}

	inputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value})
		console.log(e.target.value)
	}

	render() {
		if (this.props.is_login){
			alert('Anda telah login !')
			return <Redirect to={{pathname: "/"}} />
		} 
	  return (
	  
	  	<div>
			<NavBar />
			  
			<div id='SignIn' className="container">
				
				{/* <div style={{marginTop: 70, marginBottom: 10, textAlign: "center"}}>
					<h1>Masuk ke SINI</h1>
				</div> */}

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
										<form className="form-signin" onSubmit={(e) => e.preventDefault()}>
										<div className="form-label-group">
											<input name="username" type="text" id="inputEmail" className="form-control" placeholder="username" required autoFocus onChange={(e) => this.inputChange(e)}></input>
											</div>
										{/*onChange={}*/}
										<div className="form-label-group">
											<input name="password" type="password" id="inputPassword" className="form-control" placeholder="password" required onChange={(e) => this.inputChange(e)}></input>
										</div>

										<div className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" id="customCheck1"></input>
										</div>
										<Link to="/" onClick={() => this.props.signInHandle(this.state.username, this.state.password) }><button className="btn btn-lg btn-primary btn-block text-uppercase">Sign in</button></Link>
										</form>
									</div>
									<div className="text-center" style={{marginBottom: 20}}>
                                        <span>Don't have an account? <Link to="/signup">register here!</Link></span>
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

// export default SignIn;
export default connect("token, is_login, type", actions)(withRouter(SignIn))

