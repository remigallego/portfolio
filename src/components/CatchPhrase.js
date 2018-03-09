import React, { Component } from 'react';
import $ from 'jquery'

export default class CatchPhrase extends Component {

  componentDidMount() {
    $('.plus').mouseenter(function() {
  
      if(!$(this).hasClass('anim'))
      {
        $(this).addClass('anim');
        setTimeout(() => $(this).removeClass('anim'), 1200);
      }
    })

  }
  render() {
    return(
      <div className="catchphrase">
        <div className="container">
          <h2 className="catchphrase-tech ">Front-End <div className="plus">+</div> Back-End</h2>
        <h1 className="catchphrase-h1 ">I obsess about <div className="green">clean</div>, <div className="yellow">creative</div> and <div className="blue">optimized</div> code.</h1>
        </div>
      </div>
    )
  }
}
