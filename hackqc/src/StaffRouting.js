import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AspectRatio from '@material-ui/icons/AspectRatio';
import AccountIcon from '@material-ui/icons/AccountBox';
import ItemsCarousel from 'react-items-carousel';
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

class StaffRouting extends Component {
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
  };

  sendDonation = async (recipient, amount) => {
    try {
      this.setState({ sendingDonation: true });

      const response = await Client.post('organizations/me/redeem', {
        from_recipient: recipient.reference,
        amount: amount,
        service: 'FOOD',
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
              type="organisations"
              onClosingTransaction={() => this.setState({ transaction: undefined })}
              ref={item => this.scannerRoute = item}
            />
            <AccountScreen key={2} type="organisations" />
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
          <BottomNavigationAction label="Organisation" icon={<AccountIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}

export default StaffRouting;
