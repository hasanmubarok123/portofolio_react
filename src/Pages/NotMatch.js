import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import "../App.css";


class NotMatch extends Component {
    render() {
      return (
          <div>
              <NavBar />
              <div className="testing-purpose">
              This is NotMatch
              </div>
              <Footer />
          </div>
      );
    }
}

export default NotMatch;