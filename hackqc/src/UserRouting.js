import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AspectRatio from '@material-ui/icons/AspectRatio';
import PlaceIcon from '@material-ui/icons/Place';
import AccountIcon from '@material-ui/icons/AccountBox';
import ItemsCarousel from 'react-items-carousel';
import OrganisationRouter from './organisations/OrganisationRouter';
import ScannerRouter from './scan/ScanRouter';
import './App.css';
import Client from './Client';
import AccountScreen from './account/AccountScreen';

const styles = {
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    position: 'relative',
  },
};

class UserRouting extends Component {
  state = {
    tab: 0,
    sendingDonation: false,
    transaction: undefined,
  };

  handleChange = (event, value) => {
    this.setState({ tab: value });

    if (value !== 0) {
      this.scannerRoute.resetTab();
    }
    if (value !== 1) {
      this.organisationRoute.resetTab();
    }
  };

  sendDonation = async (recipient, amount) => {
    try {
      console.log('sending donation');
      this.setState({ sendingDonation: true });

      const response = await Client.post('citizens/me/donations', {
        to: recipient.reference,
        amount: amount,
      });

      this.setState({ sendingDonation: false, transaction: response });
    } catch (e) {
      this.setState({ sendingDonation: false });
      throw e;
    }
  }

  render() {
    return (
      <div className="App">
        <div style={styles.content}>
          <ItemsCarousel
            activeItemIndex={this.state.tab}
            numberOfCards={1}
          >
            <ScannerRouter
              key={0}
              onSendingDonation={this.sendDonation}
              sendingDonation={this.state.sendingDonation}
              transaction={this.state.transaction}
              type="citizens"
              onClosingTransaction={() => this.setState({ transaction: undefined })}
              ref={item => this.scannerRoute = item}
            />
            <OrganisationRouter
              key={1}
              onSendingDonation={this.sendDonation}
              sendingDonation={this.state.sendingDonation}
              type="citizens"
              transaction={this.state.transaction}
              onClosingTransaction={() => this.setState({ transaction: undefined })}
              ref={item => this.organisationRoute = item}
            />
            <AccountScreen type="citizens" key={2} rendered={this.state.tab === 2} />
          </ItemsCarousel>

        </div>

        <BottomNavigation
          value={this.state.tab}
          onChange={this.handleChange}
          showLabels
          style={{
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
        >
          <BottomNavigationAction label="Scan" icon={<AspectRatio />} />
          <BottomNavigationAction label="Organizations" icon={<PlaceIcon />} />
          <BottomNavigationAction label="Account" icon={<AccountIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}

export default UserRouting;
