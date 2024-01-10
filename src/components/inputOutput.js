import React from 'react'

import html from './html.svg'
import css from './css.svg'
import js from './js.svg'
import play from './play-solid.svg'

function run(){
  let hCode = document.getElementById("htmlCode").value;   
  let cCode = document.getElementById("cssCode").value;
  let jCode = document.getElementById("jsCode").value;
  let Output = document.getElementById("output");
  

  Output.contentDocument.body.innerHTML = hCode +"<style>"+cCode+"</style>";
  Output.contentWindow.eval(jCode);
}


export default function inputOutput(prop) {
  return (
     <div class="container">
        <div class="box1">
            <div id="HTML">
                <span class="head">
                    <img src={html} alt='html'/>
                    <label htmlFor="HTML">HTML</label>
                </span>
                <textarea id="htmlCode" onkeyup={()=>this.run()}>{prop.html}</textarea>
            </div>
            <div id="CSS">
                <span class="head">
                    <img src={css} alt='css'/>
                    <label for="CSS">CSS</label>
                </span>
                <textarea id="cssCode" onkeyup={()=>this.run()}>{prop.css}</textarea>
            </div>
            <div id="JAVASCRIPT">
                <span class="head">
                    <img src={js} alt='js'/>
                    <label htmlFor="JAVASCRIPT">JAVASCRIPT</label>
                </span>
                <textarea id="jsCode" onkeyup={()=>this.run()}>{prop.js}</textarea>
            </div>
        </div>
        <div class="box2">
            <span class="head">
                <img src={play} alt='play' onClick={run}/>
                <label>Output</label>
            </span>
            <iframe id="output"></iframe>
        </div>
    </div>
  )

}