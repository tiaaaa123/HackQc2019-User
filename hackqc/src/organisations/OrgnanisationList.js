import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import OrganisationListItem from './components/OrganisationListItem';
import Client from '../Client';

export default class OrgnanisationList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      redirectTo: undefined,
      organisations: []
    }
  }

  async componentDidMount() {
    try {
      const organisations = await Client.get('organizations', {})
      console.log(organisations);
      this.setState({ organisations: organisations })
    } catch (e) {
      console.log(e);
    }

  }

  selectOrganisation = (reference) => {
    console.log(reference);
    this.setState({ redirectTo: reference })
  }

  render() {
    return (
      <div>
        {this.state.redirectTo &&
          <Redirect to={`/${this.state.redirectTo}`} />
        }

        <span>organisation list</span>

        {this.state.organisations.map(organisation => (
          <OrganisationListItem
            key={organisation.reference}
            organisation={organisation}
            onPress={this.selectOrganisation} />
        ))}
      </div>
    )
  }
}