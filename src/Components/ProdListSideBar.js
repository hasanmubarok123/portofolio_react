import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import {connect } from "unistore/react";
import {actions} from "../store"

class ProdListSideBar extends Component {
    render () {
        const route='/detail/'+this.props.id
        return (            
            <div className="col-xs-12 col-sm-3">
                <div className="card mb-3">
                    <img className="card-img-top" src={this.props.url_picture} alt="Card cap" />
                    {/* src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?cs=srgb&dl=attractive-beautiful-beautiful-girl-458766.jpg&fm=jpg" */}
                    <div className="card-body">
                        <h5 className="card-title">Nama Item : {this.props.name}</h5>
                        <p className="card-text">Category : {this.props.category.name}</p>
                        <p className="card-text">Price : {this.props.price}</p>
                        <p className="card-text">Qty : {this.props.stock}</p>
                    </div>
                    <Link to={route}><button>Edit</button></Link>
                </div>
            </div>
        )
        }
}
    

export default connect("listTools, tool, token, type, is_login", actions)(withRouter(ProdListSideBar))