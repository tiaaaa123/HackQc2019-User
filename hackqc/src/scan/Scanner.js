import React from 'react';
import QrReader from 'react-qr-reader'
import Client from '../Client';
import CircularProgress from '@material-ui/core/CircularProgress';
import AmountList from '../donation/AmountList';

function WhileScanEnabled({ handleScan, handleError }) {
  return (
    <React.Fragment>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p
        style={{padding: '20px 10px'}}
      >
        To donate to this person or organism, please place the QR code within the red square.
      </p>
    </React.Fragment>
  )
}

function WhileSeeking() {
  return (
    <div style={{ height: 'calc(600px - 74px)', position: 'relative' }}>
      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} >
        <CircularProgress size={100} value={100} />
      </div>
    </div>
  )
}

export default class Scanner extends React.Component {
  state = {
    result: 'No result',
    lookingForEntity: false,
    entityFound: false,
  }

  handleScan = async data => {
    if (data && (typeof data === 'string' || data instanceof String)) {
      await this.setState({ lookingForEntity: true })
      const splittedData = data.split('/')
      const entityUUID = splittedData[splittedData.length - 1]
      const recipient = await Client.get(`recipients/${entityUUID}?lon=0&lat=0`, {})
      setTimeout(() => {
        this.setState({ lookingForEntity: false, entityFound: true })
      }, 1000)
    }
  }

  handleError = err => {
    console.error(err)
  }
  
  render() {
    let ComponentToRender = WhileScanEnabled.bind(null, {
      handleScan: this.handleScan, handleError: this.handleError
    });

    if (this.state.lookingForEntity) {
      ComponentToRender = WhileSeeking
    }
    if (this.state.entityFound) {
      ComponentToRender = AmountList
    }

    return (
      <React.Fragment>
        <ComponentToRender />
      </React.Fragment>
    )
  }
}