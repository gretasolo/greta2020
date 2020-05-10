import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

let mainContent = ["https://www.youtube.com/embed/onvlPpOiNsY?autoplay=1&lpp=1&autopause=0" ]
function App() {
  return (
  <div>
  <Main/>
  </div>
  );
} 

function Main(props) {



  return (

    <div id= "learnmore"> 


<h1><strong>Interdisciplinary Analysis of Big Tech Companies in Cities</strong> </h1>
<div className='main'>
      <div id= "title"> <strong><p id="titleline"> By Greta Solomon </p> </strong></div>
</div>

<div className="firstline">

      <button id="Intro" onClick>Intro</button>
      <button id="Litreview" onClick>Lit Review</button>
      <button id="Method" onClick>Method</button>
      <button id="Analysis" onClick>Analysis</button>
      <button id="Futureplans" onClick>Future Plans</button>
    </div>
<br></br>

<div id="video"><iframe class="iframe" src={mainContent[0]} iframe width="560" height="315" frameborder="0" allow="autoplay" allow="fullscreen" mute="true"></iframe> </div>
</div>
  )

}



export default App;
