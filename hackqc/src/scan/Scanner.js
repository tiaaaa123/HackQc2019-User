import React from 'react';
import QrReader from 'react-qr-reader';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import throttle from 'lodash.throttle';
import Client from '../Client';
import OverlaySpinner from '../components/OverlaySpinner';

const instructions = {
  citizens: 'Pour faire un don à cette personne ou à cet organisme, veuillez placer le code QR dans le carré rouge.',
  organisations: 'Pour effectuer un paiement, veuillez placer le code QR dans le carré rouge.',
};

class Scanner extends React.Component {
  state = {
    lookingForEntity: false,
  }

  handleScan = async (data) => {
    if (!this.props.rendered) return;
    if (data && (typeof data === 'string' || data instanceof String)) {
      if (this.state.lookingForEntity) return;
      await this.setState({ lookingForEntity: true });

      const splittedData = data.split('/');
      const entityUUID = splittedData[splittedData.length - 1];
      const recipient = await Client.get(`recipients/${entityUUID}?lon=0&lat=0`, {});
      setTimeout(async () => {
        await this.setState({ lookingForEntity: false }, () => {
          this.props.onRecipientFound(recipient);
        });
      }, 400);
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
            <Typography variant="h6" color="inherit">Scanner un code QR</Typography>
          </Toolbar>
        </AppBar>
        <div style={{ position: 'relative' }}>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
          <OverlaySpinner open={this.state.lookingForEntity} />

        </div>

        <Typography align="center">
          <p
            style={{ padding: '20px 10px' }}
          >
            {instructions[this.props.type]}
          </p>
        </Typography>
      </div>
    );
  }
}

export default Scanner;
