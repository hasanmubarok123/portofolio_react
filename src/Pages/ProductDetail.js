import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";

import "./SignIn.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer"

class ProductDetail extends Component {
    state = {
        tool_name: '',
        category: '',
        price: 0,
        stock: ''
    }

    tool = []
    componentWillMount = () => {
        let id = this.props.match.params.id
        this.props.getTool(id)
        this.tool = this.props.tool
        
        this.setState({
            tool_name: this.tool.tool_name,
            category: this.tool.category,
            price: this.tool.price,
            stock: this.tool.stock
        })
    }
    
    changeInput = e => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state)
    };

    saveProduct = (id) => {
        const body = {
            tool_name: this.state.tool_name,
            category: this.state.category,
            price: this.state.price,
            stock: this.state.stock
        }
        const url = "https://portofolioalphatech.herokuapp.com/api/users/items/" + id
        const auth = "Bearer " + this.props.token
        const header = {
            "Authorization": auth,
            "Access-Control-Allow-Origin": "*"
        }

        axios
        .patch(url, body, { headers: header })
        .then((response) => {
        
            alert("Update success")
            console.log("Response update: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    delProduct = (id) => {
        const url = "https://portofolioalphatech.herokuapp.com/api/users/items/" + id
        const auth = "Bearer " + this.props.token
        const header = {
            "Authorization": auth,
            "Access-Control-Allow-Origin": "*"
        }

        axios
        .delete(url, { headers: header })
        .then((response) => {
        
            alert("Delete success")
            console.log("Response update: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        // console.log(this.props.match.params.id)
        const route = '/dashboard'
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row" style={{paddingTop: 100, paddingBottom: 100}}>

                        <div className='card col-sm-12 col-xs-12'>
                              
                            <div className="mt-3 mb-3" style={{ height: "100%" }}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img className="card-img-top" src={this.tool.url_picture} alt="Card cap"/>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-body" style={{ padding: 0 }}>

                                            <form className="form-signin" onSubmit={e => e.preventDefault()}>
                                                <div className="form-label-group">
                                                    Name :
                                                    <input name="tool_name" type="text" className="form-control" placeholder="Name" value={this.state.tool_name} required autoFocus onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Category :
                                                    <input name="category" type="text" className="form-control" placeholder="Category" value={this.state.category} required  onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Price : 
                                                    <input name="price" type="text" className="form-control" placeholder="Price" required value={this.state.price} onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Stock : 
                                                    <input name="stock" type="text" className="form-control" placeholder="Stock" required value={this.state.stock} onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                
                                                <Link to={route} className="btn  btn-primary text-uppercase" onClick={() => this.saveProduct(this.props.match.params.id)}> Save </Link >
                                                    &nbsp;
                                                <Link to={route} className="btn  btn-danger text-uppercase" onClick={() => this.delProduct(this.props.match.params.id)}> Delete </Link >
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

export default connect("listTools, tool, token, type, is_login", actions)(withRouter(ProductDetail))
