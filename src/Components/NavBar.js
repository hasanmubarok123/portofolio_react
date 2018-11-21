import React, {Component} from 'react';
import logoicon from "../logoicon.png"
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import "./Navbar.css";
// import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
// import {findDOMNode} from "react-dom";
// import CartScrollBar from "./CartScrollBar";
// import EmptyCart from "../empty-states/EmptyCart";


export const iconStyle={
    width : "50px",
    height : "50px"
}

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state={
            showCart: false,
            cart: this.props.cartItems
        }
    }
    handleCart(e){
        e.preventDefault();
        this.setState({
            showCart: !this.state.showCart
        });
    }
    handleSubmit(e){
        e.preventDefault();
    }
    render(){
        if(this.props.is_login){
            return (
                <nav className="navbar navbar-expand-md navbar-light fixed-top" style={{backgroundColor:"skyblue", color:"white"}}>
                    <div>
                        <img className="manixmanik-logo-navbar" src={logoicon} style={iconStyle} alt="Logo" />
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"><h4>haSports</h4></Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/signin" className="nav-link">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link">Sign Up</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/signin" onClick={() => this.props.handleLogout()}className="nav-link">Sign Out</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            </li>
                        </ul>
                        <div className="dropdown" style={{paddingRight:50}}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Category
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{backgroundColor:"darkcyan", color:"white"}}>
                            <Link to="#" className="dropdown-item" >Shoes</Link>
                            <Link to="#" className="dropdown-item" >Clothing</Link>
                            <Link to="#" className="dropdown-item" >Sports Bag</Link>
                        </div>
                        </div>
                        <form className="form-inline my-2 my-lg-0">
                            <input 
                                className="form-control mr-sm-2" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search" 
                                onChange={this.props.handleSearch}
                                />
                            {/* <button
                                className="search-button"
                                type="submit"
                                onClick={this.handleSubmit.bind(this)}
                            /> */}
                            {/* <button class   Name="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button> */}
                        </form>
                        <div className="cart-info">
                        <table>
                            <tbody>
                            <tr>
                                <td>No. of items</td>
                                <td>:</td>
                                <td>
                                <strong>{this.props.totalItems}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>Sub Total</td>
                                <td>:</td>
                                <td>
                                <strong>{this.props.totalAmount}</strong>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        <a 
                        style={{paddingLeft:10}}
                        href="#"
                        onClick={this.handleCart.bind(this)}>
                            <img width="45px" height="45px" src="https://cdn0.iconfinder.com/data/icons/citycons/150/Citycons_bag-512.png" alt="Cart"/>
                        </a>
                        
                    </div>
                </nav>
            )
            

        } else{
            return (
                <nav className="navbar navbar-expand-md navbar-light fixed-top" style={{backgroundColor:"skyblue", color:"white"}}>
                    <div>
                        <img className="manixmanik-logo-navbar" src={logoicon} style={iconStyle} alt="Logo" />
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"><h4>haSports</h4></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signin" className="nav-link">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link">Sign Up</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/signin" onClick={() => this.props.handleLogout()}className="nav-link">Sign Out</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            </li> */}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button> */}
                        </form>

                                      
                    </div>
                </nav>
            )

        }
    }
    
}

export default connect("token, is_login, type", actions)(withRouter(NavBar))