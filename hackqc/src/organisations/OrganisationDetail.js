import React from 'react'

export default class OrganisationDetail extends React.Component {

  componentDidMount() {

  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <h1>{}</h1>

        <span>{match.params.id}</span>
      </div>
    )
  }
}