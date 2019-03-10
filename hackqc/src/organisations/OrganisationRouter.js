import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import OrgnanisationList from './OrgnanisationList';
import OrganisationDetail from './OrganisationDetail';
import AmountList from '../donation/AmountList';
import ThankYouScreen from '../scan/ThankYouScreen';

export default class OrganisationRouter extends React.Component {
  state = {
    tab: 0,
    organisation: undefined,
  }

  resetTab = () => {
    this.setState({ tab: 0 });
  }


  render() {
    return (
      <ItemsCarousel
        activeItemIndex={this.state.tab}
        numberOfCards={1}
      >
        <OrgnanisationList
          onOrganisationSelected={organisation => this.setState({ tab: 1, organisation: organisation })}
          key={0}
        />

        <OrganisationDetail
          organisation={this.state.organisation}
          key={1}
          onDonate={() => this.setState({ tab: 2 })}
          onGoBack={() => this.setState({ tab: 0, organisation: undefined })}
        />

        <AmountList
          key={2}
          onGoBack={() => this.setState({ tab: 1 })}
          onAmountPress={async (amount) => {
            try {
              await this.props.onSendingDonation(this.state.organisation, amount);
              this.setState({ tab: 3 });
            } catch (e) {
              console.log(e);
            }
          }}
          sendingDonation={this.props.sendingDonation}
          title="Combien voulez-vous donner?"
        />

        <ThankYouScreen
          key={3}
          onCloseDonation={() => {
            this.setState({ tab: 0, organisation: undefined });
            this.props.onClosingTransaction();
          }}
          transaction={this.props.transaction}
        />
      </ItemsCarousel>
    );
  }
}
