import React from 'react';
import {
  List, ListItem, ListItemText, Divider, AppBar, Toolbar, Typography, IconButton,
} from '@material-ui/core';
import BackButtonIcon from '@material-ui/icons/ArrowBack';


const amounts = [
  {
    label: '$1',
    value: 1,
  },
  {
    label: '$2',
    value: 1,
  },
  {
    label: '$3',
    value: 1,
  },
  {
    label: '$5',
    value: 1,
  },
  {
    label: '$8',
    value: 1,
  },
];

export default class AmountList extends React.Component {
  render() {
    return (
      <div style={{ flex: 1, overflowY: 'scroll' }}>
        <AppBar position="static">
          <Toolbar style={{ paddingLeft: 0 }}>
            <IconButton color="inherit" onClick={this.props.onGoBack}>
              <BackButtonIcon color="inherit" />
            </IconButton>
            <Typography variant="h6" color="inherit">How much will you donate?</Typography>
          </Toolbar>
        </AppBar>
        <List style={{ marginTop: 0 }}>
          {amounts.map(amount => (
            <div key={amount.label}>
              <ListItem
                button
                alignItems="flex-start"
                onClick={() => { }}
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <ListItemText primary={amount.label} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    );
  }
}
