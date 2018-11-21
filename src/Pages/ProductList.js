import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ProdListSideBar from "../Components/ProdListSideBar";

import "../App.css";
import { Link, withRouter } from 'react-router-dom' 
import { connect } from "unistore/react";
import { actions } from "../store";

class ProductList extends Component {
  state={
    listTools:[]

  }
    componentDidMount = () => {
        this.props.getUserTools(this.props.token)
    }
    render() {
        const listTools = this.props.userListTools
        const route='/add'
      return (
          <div >
              <NavBar />
              <div className="container" style={{paddingTop:100}}>
                    <div>
                    <Link to={route}><button>Tambah Item</button></Link>
                    </div>

                    <div className="row">
                            {
                                listTools.map((item, key) => {
                                    
                                    return <ProdListSideBar
                                    key={key}
                                    id = {item.id}
                                    name = {item.tool_name}
                                    category = {item.category}
                                    price = {item.price}
                                    stock = {item.stock}
                                    url_picture = {item.url_picture}
                                    status = {item.status}
                                    createdAt = {item.createdAt}
                                    updatedAt = {item.updatedAt}
                                    pelapak = {item['users.name']}
                                    />
                                })
                            }
                    </div>
                </div>
              <Footer />
          </div>
      );
    }
}

export default connect("listTools, userListTools, login_failed, token, is_login, type",actions) (withRouter(ProductList));