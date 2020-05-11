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

<div id= "titlestuff"> 

<div className='main'>
<h1><strong>Interdisciplinary Analysis of Big Tech Companies in Cities</strong> </h1>

<div id="titlelines"><strong><p id="titleline"> By Greta Solomon </p> </strong></div>
</div>


<div className="firstline">


      
      <button id="Intro" onClick>Intro</button>
      <button id="Litreview" onClick>Literature</button>
      <button id="Method" onClick>Method</button>
      <button id="Analysis" onClick>Analysis</button>
      <button id="Futureplans" onClick>Future </button>
    </div>
<br></br>

<div class="videos">
<div id="video"><iframe iframe="true" src={mainContent[0]} iframe width="560" height="315" frameborder="0" allow="autoplay" allow="fullscreen" mute="true" loop="true"></iframe> </div>
</div>

<div className="sections">

  <div id="intro">
  <p>Introduction</p>
 <img src= "https://i.ibb.co/xs8B5Rj/JMJ3998.jpg" height = "400" width = "300" />
  </div>
  
  <div id="lit">
  <p>Literature Review</p>
  <img src= "https://i.ibb.co/ZSNMRpB/JMJ4025.jpg" height = "300" width = "500" />
  </div>
  <div id="method">
  <p>Method</p>
  <img src= "https://i.ibb.co/dLcpvLM/JMJ4021.jpg" height = "300" width = "500" />
  </div>

  <div id="analysis">
  <p>Analysis</p>
  <img src= "https://i.ibb.co/BPrgF0B/JMJ4017.jpg" height = "300" width = "500" />
  </div>

  <div id="future">
  <p>Future Plans</p>
  <img src= "https://i.ibb.co/YhfwP7P/JMJ4029.jpg" height = "300" width = "500" />
  </div>

</div></div>

  )


}

export default App;
