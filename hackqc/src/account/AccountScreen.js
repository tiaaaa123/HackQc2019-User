import React from 'react';
import {
  Typography, List, ListItemText, ListItem, Divider, ListItemSecondaryAction, AppBar, Toolbar,
} from '@material-ui/core';
import sortBy from 'lodash.sortby';
import Client from '../Client';

const title = {
  citizens: 'Historique des dons',
  organisations: 'Historique des transactions',
};

export default class AccountScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      donations: [],
    };
  }

  componentDidMount() {
    this.fetchAccount();
  }

  fetchAccount = async () => {
    try {
      const user = await Client.get('citizens/me');
      const { donations } = await Client.get('citizens/me/donations');
      const sortedDonations = sortBy(donations, ['donated_at']).reverse().slice(0, 9);
      this.setState({ user, donations: sortedDonations });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">{this.state.user.name}</Typography>
          </Toolbar>
        </AppBar>

        <Typography variant="h6" color="inherit" style={{ margin: '3px 0 3px 15px' }}>{title[this.props.type]}</Typography>

        <List style={{ marginTop: -7 }}>
          <Divider />

          {this.state.donations.map(donation => (
            <div key={donation.reference}>
              <ListItem
                button
                alignItems="flex-start"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <ListItemText primary={`${donation.amount}$`} />
                <ListItemSecondaryAction style={{ marginRight: 10 }}>
                  <span style={{ fontSize: 14, color: '#cccccc' }}>
                    {(new Date(donation.donated_at)).toLocaleString()}
                  </span>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    );
  }
}
