import React from 'react';
import {
  List, ListItem, ListItemText, Divider, AppBar, Toolbar, Typography, IconButton,
} from '@material-ui/core';
import BackButtonIcon from '@material-ui/icons/ArrowBack';
import OverlaySpinner from '../components/OverlaySpinner';

const amounts = [
  {
    label: '1$',
    value: 1,
  },
  {
    label: '2$',
    value: 2,
  },
  {
    label: '3$',
    value: 3,
  },
  {
    label: '5$',
    value: 5,
  },
  {
    label: '8$',
    value: 8,
  },
];

export default class AmountList extends React.Component {
  render() {
    console.log(this.props.title);
    return (
      <div style={{ flex: 1, overflowY: 'scroll' }} key={0}>
        <AppBar position="static">
          <Toolbar style={{ paddingLeft: 0 }}>
            <IconButton color="inherit" onClick={this.props.onGoBack}>
              <BackButtonIcon color="inherit" />
            </IconButton>
            <Typography variant="h6" color="inherit">{this.props.title}</Typography>
          </Toolbar>
        </AppBar>

        <List style={{ marginTop: 0 }}>
          {amounts.map(amount => (
            <div key={amount.label}>
              <ListItem
                button
                alignItems="flex-start"
                onClick={() => this.props.onAmountPress(amount.value)}
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <ListItemText primary={amount.label} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>

        <OverlaySpinner open={this.props.sendingDonation} />
      </div>
    );
  }
}
