import React, { Component } from 'react';
import $ from 'jquery'

export default class CatchPhrase extends Component {

  componentDidMount() {
    $('.plus').mouseenter(function(e) {
      let c = (e.offsetX < 6 ? 'anim' : 'anim-reverse')
      if(!$(this).hasClass('anim') && !$(this).hasClass('anim-reverse') )
      {
        $(this).addClass(c);
        setTimeout(() => $(this).removeClass(c), 1200);
      }
    }

  )
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
