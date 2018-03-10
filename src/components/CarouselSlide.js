import React, { Component } from 'react';

export default class CarouselSlide extends Component {

render() {

  return(
    <div className="slide">
      <div className="row">
        <div className="col-lg-6">
            <img src={this.props.data.preview} alt={this.props.data.title} className="preview"/>
        </div>
        <div className="col-lg-6">
            <div className="slide-title"><h1>{this.props.data.title}</h1></div>
            <div className="tags-wrapper">
              {this.props.data.tags.map((e,i)=> {
                return <button key={i} className="btn btn-secondary tags disabled btn-light">{e}</button>
              })}
            </div>
            <div className="description">
              <p>{this.props.data.description}</p>
            </div>
            <a  target="_blank" rel="noopener noreferrer" href={this.props.data.link}>
              <button className="btn btnsource">View Source</button>
            </a>
        </div>
    </div>
    </div>
  )
}

}
