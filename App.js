
import React, { Component } from 'react'
import './App.css'

export class App extends Component {
  
    styles=
     {
      fontstyle: 'bold',
      color: 'cyan',
      fontsize: '1200px'
    };
    render()
    {
    return (
      <div>
        <h1 style ={this.styles}>
          hi guys
        </h1>
        Newprop
      </div>
    )
  }
}

export default App