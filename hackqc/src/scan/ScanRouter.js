import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import AmountList from '../donation/AmountList';
import Scanner from './Scanner';
import ThankYouScreen from './ThankYouScreen';

export default class ScannerRouter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 0,
      recipient: undefined,
    };
  }

  render() {
    return (
      <ItemsCarousel
        activeItemIndex={this.state.tab}
        numberOfCards={1}
      >
        <Scanner key={0} onRecipientFound={recipient => this.setState({ tab: 1, recipient: recipient })} />
        <AmountList
          key={1}
          onGoBack={() => this.setState({ tab: 0 })}
          onAmountPress={async (amount) => {
            try {
              await this.props.onSendingDonation(this.state.recipient, amount);
              this.setState({ tab: 2 });
            } catch (e) {
              console.log(e);
            }
          }}
          sendingDonation={this.props.sendingDonation}
        />

        <ThankYouScreen key={2} onCloseDonation={() => this.setState({ tab: 0, recipient: undefined })} />
      </ItemsCarousel>
    );
  }
}
