import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import AmountList from '../donation/AmountList';
import Scanner from './Scanner';


export default class ScannerRouter extends React.Component {
  state = {
    tab: 0,
  }

  render() {
    return (
      <ItemsCarousel
        activeItemIndex={this.state.tab}
        numberOfCards={1}
      >
        <Scanner key={0} />
        <AmountList onGoBack={() => this.setState({ tab: 0 })} key={1} />

        <AmountList />
      </ItemsCarousel>
    );
  }
}
