import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from "unistore/react";
import {actions} from "../store";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer"

const style = {
    width : "200px",
    display : "block",
    // backgroundColor : "lightblue"
}

class ProductDesc extends Component{
    state = {
        tool_name:'',
        category :'',
        price:'',
        stock:'',
        url_picture:'',
        username:''
    }
    tool = []
    componentWillMount = () => {
        let id = this.props.match.params.id
        this.props.getTool(id)
        this.tool = this.props.tool
        
        this.setState({
            tool_name: this.tool.tool_name,
            category: this.tool['tool_category.name'],
            price: this.tool.price,
            stock: this.tool.stock,
            url_picture: this.tool.url_picture,
            username:this.tool['users.name']
        })
    }
    render(){
        return(
            <div>
                <NavBar />
                    <div className="container">
                        <div className='row' style={{paddingTop:150, paddingBottom:100}}>
                            <div className="col-6">
                                <img className="img-profil ml-auto" style={style} src={this.state.url_picture} alt="tool picture"/>
                            </div>
                            <div className="col-6">
                                <p>Name: {this.state.tool_name}</p>
                                <p>Category: {this.state.category}</p>
                                <p>Price: {this.state.price}</p>
                                <p>Stock: {this.state.stock}</p>
                                <p>Seller: {this.state.username}</p>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default connect("listTools, tool, token, type, is_login", actions)(withRouter(ProductDesc))
