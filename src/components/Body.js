import React, { Component } from 'react';
import BlockAboutMe from './BlockAboutMe.js'
import BlockPortfolio from './BlockPortfolio.js'
//import BlockContact from './BlockContact.js'
import BlockStats from './BlockStats.js'
import Footer from './Footer.js'

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {

  }

  handleLoad(val) {
    this.props.chartLoaded(val)
  }

  render() {
    return(
  <div className="blocks">
      <BlockStats isLoaded={this.handleLoad}/>
    <div className="bg-transition-1"></div>
      <BlockPortfolio className="animated fadeIn" />
    <div className="bg-transition-2"></div>
    <BlockAboutMe />
      <div className="bg-transition-tofooter"></div>
    <Footer />
    {/*
    <BlockContact /> */ }
  </div>
    )
  }
}
