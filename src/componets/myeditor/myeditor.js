import ReactAvatarEditor from 'react-avatar-editor'
import Box from '@mui/material/Box';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import Viewer from 'react-viewer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GooglePayButton from '@google-pay/button-react';

const Input = styled('input')({
  display: 'none',
});

class MyEditor extends React.Component {

  state = {
    image:'https://pixabay.com/get/gba04cc7484c97dfa7106cd85b0d03471e84d2f47af4a42a9b4c03a6002f2a86e02f7cc685c49d7d91e1b43df9686dbbe660b09a6bc49954f848b6f0305e7f2aa_1280.jpg',
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 0,
    preview: {img:""},
    width: 200,
    height: 200,
  }

  handleNewImage = e => {
    this.setState({ image: e.target.files[0] });
  }

  handleSave = data => {
    // const img = this.editor.getImageScaledToCanvas().toDataURL();
    const img = this.editor.getImage().toDataURL();

    this.setState({
      preview: {img}
    });
  }
  
  setEditorRef = editor => {
    if (editor) this.editor = editor;
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

  render() {return (
      <div>
            <ReactAvatarEditor
              ref={this.setEditorRef}
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
            <Box width={300} >
                <input
                    name="scale2"
                    type="range"
                    onChange={this.handleScale}
                    min={this.state.allowZoomOut ? '0.1' : '1'}
                    max="2"
                    step="0.01"
                    defaultValue="1"
                />
              <br />
                <input
                  name="rotate"
                  type="range"
                  onChange={this.handleRotate}
                  min="0"
                  max="180"
                  step="1"
                  defaultValue="0"
                />
              <br/>
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" onChange={this.handleNewImage}/>
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
                <label >
                  <Input type="button" onClick={this.handleSave} value="Preview" />
                  <IconButton color="primary" aria-label="Save picture" component="span">
                    <SaveIcon />
                  </IconButton>
                </label>
              <br/>
                {!!this.state.preview && <img alt="" src={this.state.preview.img} />}
                <br/>
                <Viewer
                  visible={this.state.visible}
                  onClose={() => { this.setState({visible:false}); } }
                  images={[{src: this.state.preview.img, alt: ''}]}
                />
                <label>
                  <Input type="button" onClick={() => {this.setState({visible:true});}}/>
                  <IconButton color="primary" aria-label="Save picture" component="span">
                    <VisibilityIcon />
                  </IconButton>
                </label>
                <br/>
                <GooglePayButton
                  environment="TEST"
                  paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                      {
                        type: 'CARD',
                        parameters: {
                          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                          allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                          type: 'PAYMENT_GATEWAY',
                          parameters: {
                            gateway: 'example',
                            gatewayMerchantId: 'exampleGatewayMerchantId',
                          },
                        },
                      },
                    ],
                    merchantInfo: {
                      merchantId: 'BCR2DN6T3PJ3P7LH',
                      merchantName: 'LimonBank',
                    },
                    transactionInfo: {
                      totalPriceStatus: 'FINAL',
                      totalPriceLabel: 'Total',
                      totalPrice: '1.00',
                      currencyCode: 'USD',
                      countryCode: 'US',
                    },
                  }}
                  onLoadPaymentData={paymentRequest => {
                    console.log('load payment data', paymentRequest);
                  }}
                />
                <br/>
            </Box>
          </div>
    )
  }
}

export default MyEditor