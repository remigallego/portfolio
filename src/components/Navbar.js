import React, { Component } from 'react';



export default class Navbar extends Component {
  render() {
    return(
      <div>
      <nav class="navbar fixed-top navbar-dark bg-dark navbar-expand">
        <div className="container">
          <div className="row">
            <div className="navbar-cat col-3">WORKS</div>
            <div className="navbar-cat col-3">ABOUT</div>
            <div className="navbar-cat col-3">CONTACT</div>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}
