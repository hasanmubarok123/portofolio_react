import React, { Component } from "react";
import { Link } from 'react-router-dom';

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import dashboard from "../dashboard.jpg";

import "../App.css";
import "../Styles/Dashboard.css"

class Dashboard extends Component {
    render() {
      return (
          <div >
              <NavBar />
              <div className="dashboard-page container">
                <div className='row shadow-lg p-3 mb-5 bg-white rounded'>
                    <div className='col-md-6 dashboard-item shadow-lg p-3 mb-5 bg-white rounded'>    
                        <div className="card text-white bg-info mb-3 ml-auto mr-auto shadow-lg p-3 mb-5 rounded" style={{width: "18rem"}}>
                            <h5 className="card-header">Your Products</h5>
                            <img className="card-img-top" src={dashboard} alt="Card cap"/>
                            <div className="card-body">
                                <Link to="/dashboard/productlist"><button type='button' className='btn btn-outline-light'>Your Products</button></Link>
                            </div>
                        </div>
                    </div>
                   

                    <div className='col-md-6 dashboard-item shadow-lg p-2 mb-5 bg-white rounded'>
                        <div className="card text-white bg-info mb-3 ml-auto mr-auto shadow-lg p-3 mb-5 rounded" style={{width: "18rem"}}>
                                <h5 className="card-header">Your Profile</h5>
                                <img className="card-img-top" src={dashboard} alt="Card cap"/>
                                <div className="card-body">
                                <Link to="/dashboard/profile">
                                    <button type='button' className='btn btn-outline-light'>See Profile</button>
                                </Link>
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

export default Dashboard;