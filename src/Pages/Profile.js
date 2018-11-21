import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CatalogProfile from "../Components/CatalogProfile";

import "../App.css";
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import {actions} from '../store'

class Profile extends Component {
    state = {
        listMe: []
    };
    componentDidMount = () => {
        const url = "https://portofolioalphatech.herokuapp.com/api/users/me"
        const auth = 'Bearer ' + this.props.token
        const self = this;
        axios
            .get(url, {headers:{'Authorization':auth}})
 
            .then(function(response){
                // handle success
                self.setState({
                    listMe: response.data
                });
                console.log("data", response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    render() {
        const {listMe} = this.state;
      return (
          <div>
              <NavBar />
              <div>
                    <CatalogProfile
                    name={listMe.name}
                    // desc={listMe.desc}
                    username={listMe.username}
                    email={listMe.email}
                    password={listMe.password}
                    no_telp={listMe.no_telp}
                    address={listMe.address}
                    />
              </div>
              <Footer />
          </div>
      );
    }
}

// export default Profile;
export default connect('is_login, token, type', actions)(withRouter(Profile));