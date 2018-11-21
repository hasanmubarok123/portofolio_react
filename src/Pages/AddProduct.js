import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";

import "./SignIn.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer"

class AddProduct extends Component {
    state = {
        name: '',
        category: '',
        price: '',
        url_picture: '',
        stock: 0
    }
    tool = []

    changeInput = e => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state)
    };

    addProduct = () => {
        console.log(this.state)
        const body = {
            tool_name: this.state.tool_name,
            category: parseInt(this.state.category),
            price: parseInt(this.state.price),
            stock: parseInt(this.state.stock),
            url_picture: this.state.url_picture
        }

        const url = "https://portofolioalphatech.herokuapp.com/api/users/items"
        const auth = "Bearer " + this.props.token
        const header = {
            "Authorization": auth
        }

        console.log(body)
        axios
        .post(url, body, { headers: header })
        .then((response) => {
            alert("Succes!")
            console.log("Response update: ", response)
        })
        .catch((err) => {
            alert("Failed!")
            console.log(err)
        })
    }

    render(){
        const route = "/dashboard"
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row" style={{paddingTop: 100, paddingBottom: 100}}>

                        <div className='card col-sm-12 col-xs-12'>
                              
                            <div className="mt-3 mb-3" style={{ height: "100%" }}>
                                <div className="row">
                                    <div className="col-sm-8 offset-sm-2">
                                        <div className="card-body" style={{ padding: 0 }}>

                                            <form className="form-signin" onSubmit={e => e.preventDefault()}>
                                                <div className="form-label-group">
                                                    Name :
                                                    <input name="tool_name" type="text" className="form-control" placeholder="Name" required autoFocus onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Category :
                                                    <input name="category" type="text" className="form-control" placeholder="Category" required  onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Price : 
                                                    <input name="price" type="text" className="form-control" placeholder="Price" required onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Stock : 
                                                    <input name="stock" type="text" className="form-control" placeholder="Stock" required onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                            
                                                <div className="form-label-group">
                                                    Url Picture : 
                                                    <input name="url_picture" type="text" className="form-control" placeholder="Url Gambar" required onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <Link to={route} className="btn btn-lg btn-primary btn-block text-uppercase" onClick={() => this.addProduct()}> Add </Link >
                                            </form>

                                        </div>  
                                        <br/>
                                    </div>
                                        
                                </div>  

                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

export default connect("listTools, tool, token, type, is_login", actions)(withRouter(AddProduct))
