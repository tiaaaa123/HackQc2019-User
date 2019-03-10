import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import AmountList from '../donation/AmountList';
import Scanner from './Scanner';
import ThankYouScreen from './ThankYouScreen';

const title = {
  citizens: 'Combien voulez-vous donner?',
  organisations: 'Quel prix est le produit?',
};

export default class ScannerRouter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 0,
      recipient: undefined,
    };
  }

  resetTab = () => {
    setTimeout(() => {
      this.setState({ tab: 0 });
    }, 500);
  }

  render() {
    return (
      <ItemsCarousel
        activeItemIndex={this.state.tab}
        numberOfCards={1}
      >
        <Scanner
          key={0}
          onRecipientFound={recipient => this.setState({ tab: 1, recipient: recipient })}
          type={this.props.type}
          rendered={this.state.tab === 0}
        />
        <AmountList
          key={1}
          onGoBack={() => this.setState({ tab: 0 })}
          onAmountPress={async (amount) => {
            try {
              await this.props.onSendingDonation(this.state.recipient, amount);
              this.setState({ tab: 2 });
            } catch (e) {
              // Nothing to do
            }
          }}
          sendingDonation={this.props.sendingDonation}
          title={title[this.props.type]}
        />

        <ThankYouScreen
          key={2}
          onCloseDonation={() => {
            this.setState({ tab: 0, recipient: undefined });
            this.props.onClosingTransaction();
          }}
          transaction={this.props.transaction}
          type={this.props.type}
        />
      </ItemsCarousel>
    );
  }
}
