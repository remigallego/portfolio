import React, { Component } from 'react';
//import Navbar from './Navbar.js';
import BoxName from './BoxName.js'
import CatchPhrase from './CatchPhrase.js'
import Body from './Body.js'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: ""
    }
    this.handleLoad = this.handleLoad.bind(this);
  }
  handleLoad(val) {
    // Change when Prod
    let delay1, delay2, delay3
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      delay1 = 0
      delay2 = 0
      delay3 = 0
    } else {
      delay1 = 700
      delay2 = 500
      delay3 = 300
    }

    if(val)
      $('.loading-wrapper').delay(delay1).fadeOut(delay2,"swing", () => {$('.app-body').fadeIn(delay3, "swing")})
  }
  render() {
    return (
      <div>
        <div className="loading-wrapper"><div className="app-loading"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg></div></div>
        <div className="app-body">
          <BoxName />
          <CatchPhrase />
          <Body chartLoaded={this.handleLoad}/>
        </div>
      </div>
    );
  }
}

export default App;
