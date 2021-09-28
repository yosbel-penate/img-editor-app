import './App.css';
import MyEditor from './componets/myeditor/myeditor.js'
import * as React from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyEditor/>
        <Button variant="contained">Hello World</Button>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      </header>
    </div>
  );
}

export default App;
