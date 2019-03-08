import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ItemsCarousel from 'react-items-carousel';
import './App.css';

const styles = {
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }
}

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
          >
            <div key={0}>first tab</div>
            <div key={1}>second tab</div>
            <div key={2}>thrid tab</div>
          </ItemsCarousel>

        </div>
        <BottomNavigation
          value={this.state.tab}
          onChange={this.handleChange}
          showLabels
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div >
    );
  }
}

export default App;
