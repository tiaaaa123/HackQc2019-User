import React from 'react'
import ItemsCarousel from 'react-items-carousel';
import OrgnanisationList from './OrgnanisationList';
import OrganisationDetail from './OrganisationDetail'

export default class OrganisationRouter extends React.Component {

  state = {
    tab: 1,
    organisation: undefined,
  }

  render() {
    return (
      // <BrowserRouter>
      //   <Switch>
      //     <Route exact path="/:id" component={OrganisationDetail} />
      //     <Route path="/" component={OrgnanisationList} />
      //   </Switch>
      // </BrowserRouter>
      <ItemsCarousel
        activeItemIndex={this.state.tab}
        numberOfCards={0}
      >
        <OrgnanisationList
          onOrganisationSelected={(organisation) => this.setState({ tab: 1, organisation: organisation })}
          key={0} />
        <OrganisationDetail
          organisation={this.state.organisation}
          key={1}
          onGoBack={() => this.setState({ tab: 0, organisation: undefined })}
        />

      </ItemsCarousel>
    )
  }
}
