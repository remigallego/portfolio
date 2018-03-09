import React, { Component } from 'react';
import myface from '../assets/12-years-old-me.png'
export default class BlockAboutMe extends Component {



  render() {
    return(
      <div className="block-about-me">
        <div className="container body-container">
        <div className="svg-coffee">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12.874 6.999c4.737-4.27-.979-4.044.116-6.999-3.781 3.817 1.41 3.902-.116 6.999zm-2.78.001c3.154-2.825-.664-3.102.087-5.099-2.642 2.787.95 2.859-.087 5.099zm8.906 2.618c-.869 0-1.961-.696-1.961-1.618h-10.039c0 .921-1.13 1.618-2 1.618v1.382h14v-1.382zm-3.4 4.382l-1.286 8h-4.627l-1.287-8h7.2zm2.4-2h-12l2.021 12h7.959l2.02-12z"/></svg>
        </div>
        <div className="story-container">
          <div className="story-title"><h1>about me</h1></div>
              <p>When I was about 12, I built my first Simpsons fansite using HTML and PHP. I have never stopped
                learning about the web and computers ever since. </p>
              <p>
              I graduated in computer networks and went on producing <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=YjjmM3w2t_g">electronic music</a>,
              but computer logic and programming languages always stuck as my main influences.
              The reasonable amount of success of my music career helped me find my strengths and build an online presence.
              </p>
            <p>You may think a transition from music to tech is a big leap. Well, you're right, but having a strong web presence and insatiable <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/remigallego">desire to learn</a> makes it possible
             for me to dream big.</p>
           <p>I find my creative satisfaction with tools like <b className="bold">React</b> and <b className="bold">Bootstrap</b>, always eager to challenge myself in a field I have been passionate about my entire life.
            </p>
            <div className="image mx-auto" title="Aaaah... The 2000s..."><img src={myface}/></div>
          </div>
      </div>
      </div>
    )
  }
 }

 /*         <div className="story-container">
           <div className="story-title"><h1>about me</h1></div>
             <p>When I was about 12, I built my first Simpsons website with HTML and PHP, and I have never stopped
             learning about the web and computers ever since. </p>
           <p>
           When I graduated in computer networks and went on producing <a className="link" target="_blank" href="https://www.youtube.com/watch?v=YjjmM3w2t_g">electronic music</a>,
           computer logic and programming languages always stuck as my main influences.
           As I met a reasonable amount of success with my music career, it helped me to find my strengths and to build an online presence.
           </p>

             <p>You may think a transition from music to tech is a big leap. Well, you're right, but having a strong web presence and insatiable <a className="link" target="_blank" href="https://www.freecodecamp.org/remigallego">desire to learn</a> makes it possible
              for me to dream big.</p>

            <p>I find my creative satisfaction with tools like <div className="bold">React</div> and <div className="bold">Bootstrap</div>, and I'm eager to challenge myself in a field I have always been passionate about but never fully explored.
              There is no better time than now for me to dive in.

             </p>
           <div className="svg-coffee">
             <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12.874 6.999c4.737-4.27-.979-4.044.116-6.999-3.781 3.817 1.41 3.902-.116 6.999zm-2.78.001c3.154-2.825-.664-3.102.087-5.099-2.642 2.787.95 2.859-.087 5.099zm8.906 2.618c-.869 0-1.961-.696-1.961-1.618h-10.039c0 .921-1.13 1.618-2 1.618v1.382h14v-1.382zm-3.4 4.382l-1.286 8h-4.627l-1.287-8h7.2zm2.4-2h-12l2.021 12h7.959l2.02-12z"/></svg>
           </div>
           </div>
*/
