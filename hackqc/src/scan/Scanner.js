import React from 'react';
import QrReader from 'react-qr-reader';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import throttle from 'lodash.throttle';
import Client from '../Client';
import OverlaySpinner from '../components/OverlaySpinner';

class Scanner extends React.Component {
  state = {
    lookingForEntity: false,
  }

  throttleSelectRecipient = throttle((recipient) => {
    this.setState({ lookingForEntity: false }, () => {
      this.props.onRecipientFound(recipient);
    });
  }, 2000, { trailing: false, leading: true })

  handleScan = async (data) => {
    if (data && (typeof data === 'string' || data instanceof String)) {
      await this.setState({ lookingForEntity: true });

      const splittedData = data.split('/');
      const entityUUID = splittedData[splittedData.length - 1];
      const recipient = await Client.get(`recipients/${entityUUID}?lon=0&lat=0`, {});
      console.log(recipient);
      if (recipient.type === 'CITIZEN_IN_NEEDS') {
        setTimeout(() => {
          this.throttleSelectRecipient(recipient);
        }, 400);
      }
    }
  }

  handleError = (err) => {
    console.error(err);
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">Scan a QR code</Typography>
          </Toolbar>
        </AppBar>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p
          style={{ padding: '20px 10px' }}
        >
          To donate to this person or organism, please place the QR code within the red square.
        </p>

        <OverlaySpinner open={this.state.lookingForEntity} />
      </div>
    );
  }
}

export default Scanner;
