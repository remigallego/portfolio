import React, { Component } from 'react';
import CarouselSlide from './CarouselSlide.js'
import $ from 'jquery'
import Hammer from 'react-hammerjs'
import 'bootstrap/dist/js/bootstrap.min.js'


export default class BlockPortfolio extends Component {
  constructor(props) {
    super(props);

    this.gameOfLife = {
      title: 'Game Of Life',
      description: 'A Game Of Life with basic statistics built with React and recharts, as part of the FreeCodeCamp curriculum.',
      preview: 'https://camo.githubusercontent.com/ee41af111b90bee504f84aed2460b65fbcc584b1/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f345a354538644e637046524979586462626a2f67697068792e676966',
      tags: ['React','CSS','Javascript','Webpack'],
      link: 'https://github.com/remigallego/fcc-gameoflife'
    }

    this.rogueLike = {
      title: 'RogueLike',
      description: 'A rogue like game with procedurally generated dungeons, showcasing the power of React and Redux.',
      preview: 'https://media.giphy.com/media/21SVrsFSSwejSDU8Of/giphy.gif',
      tags: ['React','Redux','SASS','Javascript'],
      link: 'https://github.com/remigallego/fcc-roguelike-react'
    }

    this.handleSwipe = this.handleSwipe.bind(this)
  }
  componentDidMount() {


  }

  handleSwipe(e) {
    if(e.direction === 4)
      $('.carousel').carousel('prev');
    if(e.direction === 2)
      $('.carousel').carousel('next');
  }

render() {
  return(
    <div className="block-portfolio">
      <div className="container body-container">
        <div className="story-container">
          <div className="story-title"><h1>work</h1></div>
          <Hammer onSwipe={this.handleSwipe} direction='DIRECTION_HORIZONTAL'>
            <div id="carouselExampleControls" className="carousel slide" data-interval="false" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <CarouselSlide data={this.rogueLike}/>
                </div>
                <div className="carousel-item ">
                  <CarouselSlide data={this.gameOfLife}/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
        </Hammer>
        <p>I am following the <a href="https://www.freecodecamp.org/remigallego" className="link">FreeCodeCamp</a> curriculum and diving into as many interesting projects as I can find.
          When I'm not learning new cool <b className="bold">Sass</b> tricks, I try and solidify my <b className="bold">Node</b> skills, or get a <b className="bold">React</b>/<b className="bold">Redux</b> project up and running from scratch or with <b className="bold">Webpack</b>.</p>
        <p className="job">I am currently looking for a full-time job in the <u>Berlin</u> or the <u>London</u> area.</p>
          </div>
      </div>
    </div>
  )

}
}
