import React from 'react'
import isEqual from 'lodash.isequal'
import { Toolbar, Typography, AppBar, IconButton } from '@material-ui/core';
import BackButtonIcon from '@material-ui/icons/ArrowBack'

export default class OrganisationDetail extends React.Component {

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(props.organisation, state.organisation)) {
      return {
        organisation: props.organisation,
      }
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      organisation: props.organisation
    }
  }

  render() {
    const { organisation } = this.state
    return (
      <div style={{ flex: 1 }}>
        <AppBar position="static" style={{}}>
          <Toolbar>
            <IconButton color="inherit" onClick={this.props.onGoBack} >
              <BackButtonIcon color="inherit" />
            </IconButton>
            <Typography variant="h6" color="inherit">Organizations</Typography>
          </Toolbar>
        </AppBar>

        {!!organisation &&
          <h6>{organisation.name}</h6>
        }
      </div>
    )
  }
}