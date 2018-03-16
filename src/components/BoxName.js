import React, { Component } from 'react';

export default class BoxName extends Component {
  render() {
    return(
      <div className="title-container">
        <div className="title-block">
          <h1 className="big-title">Hi, I'm <div className="big-title--name">Rémi.</div></h1>
          <div className="subtitle mx-auto">
            <p>I am a developer</p>
            <p>based in Berlin.</p>
          </div>
        </div>
      </div>
    )
  }
}
