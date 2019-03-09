import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import OrganisationListItem from './components/OrganisationListItem';

export default class OrgnanisationList extends React.Component {

  state = {
    redirectTo: undefined
  }

  selectOrganisation = (id) => {
    this.setState({ redirectTo: id })
  }

  render() {
    return (
      <div>
        {this.state.redirectTo &&
          <Redirect to={`/${this.state.redirectTo}`} />
        }

        <span>organisation list</span>

        <OrganisationListItem id={5} name="Organisation A" onPress={this.selectOrganisation} />
        <OrganisationListItem id={6} name="Organisation B" onPress={this.selectOrganisation} />
        <OrganisationListItem id={7} name="Organisation C" onPress={this.selectOrganisation} />
        <OrganisationListItem id={8} name="Organisation D" onPress={this.selectOrganisation} />
        <OrganisationListItem id={9} name="Organisation E" onPress={this.selectOrganisation} />
      </div>
    )
  }
}