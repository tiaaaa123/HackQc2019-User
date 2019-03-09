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

const styles = {
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
};

class App extends Component {
  state = {
    tab: 0,
  };

  handleChange = (event, value) => {
    this.setState({ tab: value });
  };


  render() {
    return (
      <div className="App">
        <div style={styles.content}>
          <ItemsCarousel
            activeItemIndex={this.state.tab}
            numberOfCards={1}
            style={{ overflowY: 'scroll' }}
          >
            <ScannerRouter key={0} />
            <OrganisationRouter key={1} />
            <div key={2}>thrid tab</div>
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

export default App;
