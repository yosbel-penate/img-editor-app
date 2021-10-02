import './App.css';
import MyEditor from './componets/myeditor/myeditor.js'
import ImageComposer from './componets/myeditor/imagecomposer.js'
import React, { Component } from 'react'
export class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <MyEditor/>
      </header>
    </div>
    )
  }
}

export default App

