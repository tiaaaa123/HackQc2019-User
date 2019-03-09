import React from 'react';
import QrReader from 'react-qr-reader';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Client from '../Client';
import AmountList from '../donation/AmountList';
import ItemsCarousel from 'react-items-carousel';

function WhileScanEnabled({ handleScan, handleError }) {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">Scan a QR code</Typography>
        </Toolbar>
      </AppBar>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p
        style={{ padding: '20px 10px' }}
      >
        To donate to this person or organism, please place the QR code within the red square.
      </p>
    </React.Fragment>
  );
}

function WhileSeeking() {
  return (
    <div style={{ height: 'calc(600px - 74px)', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      }}
      >
        <CircularProgress size={100} value={100} />
      </div>
    </div>
  );
}

export default class Scanner extends React.Component {
  state = {
    result: 'No result',
    lookingForEntity: false,
    tab: 0,
  }

  handleScan = async (data) => {
    if (data && (typeof data === 'string' || data instanceof String)) {
      await this.setState({ lookingForEntity: true });
      const splittedData = data.split('/');
      const entityUUID = splittedData[splittedData.length - 1];
      const recipient = await Client.get(`recipients/${entityUUID}?lon=0&lat=0`, {});
      if (recipient.type === 'CITIZEN_IN_NEEDS') {
        setTimeout(() => {
          this.setState({ lookingForEntity: false, tab: 1 });
        }, 400);
      }
    }
  }

  handleError = (err) => {
    console.error(err);
  }

  success = (amount) => {
    this.setState({
      tab: 0
    })
  }

  goBack = () => {
    this.setState({
      tab: 0,
    })
  }

  render() {
    let ComponentToRender = WhileScanEnabled.bind(null, {
      handleScan: this.handleScan, handleError: this.handleError,
    });

    if (this.state.lookingForEntity) {
      ComponentToRender = WhileSeeking;
    }

    return (
      <React.Fragment>
        <ItemsCarousel
          activeItemIndex={this.state.tab}
          numberOfCards={1}
        >
            <ComponentToRender key={0} />
            <AmountList key={1} onGoBack={this.goBack} onSuccess={this.success}/>
            <div key={2}></div>
        </ItemsCarousel>
      </React.Fragment>
    );
  }
}
