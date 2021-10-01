import React from 'react'
import ReactAvatarEditor from 'react-avatar-editor'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

class MyEditor extends React.Component {

  state = {
    image: 'https://pixabay.com/get/gba04cc7484c97dfa7106cd85b0d03471e84d2f47af4a42a9b4c03a6002f2a86e02f7cc685c49d7d91e1b43df9686dbbe660b09a6bc49954f848b6f0305e7f2aa_1280.jpg',
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 0,
    preview: null,
    width: 200,
    height: 200,
  }

  handleScale = e => {
    const scale = parseFloat(e.target.value)
    this.setState({ scale })
  }
  
  handleRotate = e => {
    const rotate = parseInt(e.target.value)
    this.setState({ rotate })
  }

  handlePositionChange = position => {
    this.setState({ position })
  }

  render() {
    return (
      <div>
            <ReactAvatarEditor
              scale={parseFloat(this.state.scale)}
              width={this.state.width}
              height={this.state.height}
              position={this.state.position}
              onPositionChange={this.handlePositionChange}
              rotate={parseFloat(this.state.rotate)}
              borderRadius={this.state.width / (100 / this.state.borderRadius)}
              image={this.state.image}
              className="editor-canvas"
            />
            <Box width={300}>
                <input
                  name="scale2"
                  type="range"
                  onChange={this.handleScale}
                  min={this.state.allowZoomOut ? '0.1' : '1'}
                  max="2"
                  step="0.01"
                  defaultValue="1"
              />
              <input
                name="rotate"
                type="range"
                onChange={this.handleRotate}
                min="0"
                max="180"
                step="1"
                defaultValue="0"
              />
            </Box>
          </div>
    )
  }
}

export default MyEditor