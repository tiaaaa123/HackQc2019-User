import React from 'react';
import isEqual from 'lodash.isequal';
import { Toolbar, Typography, AppBar, IconButton, Card, CardMedia, CardContent } from '@material-ui/core';
import BackButtonIcon from '@material-ui/icons/ArrowBack';
import MapLocation from '../assets/organisationLocation.png';

export default class OrganisationDetail extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (!isEqual(props.organisation, state.organisation)) {
      return {
        organisation: props.organisation,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      organisation: props.organisation,
    };
  }

  render() {
    const { organisation } = this.state;
    return (
      <div style={{ flex: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ paddingLeft: 0 }}>
            <IconButton color="inherit" onClick={this.props.onGoBack} >
              <BackButtonIcon color="inherit" />
            </IconButton>
            {organisation &&
              <Typography noWrap variant="h6" color="inherit">{organisation.name}</Typography>
            }
          </Toolbar>
        </AppBar>

        {!!organisation &&
          <div>
            <Card>
              <CardMedia
                image={MapLocation}
                title="Location"
                style={{
                  height: 0,
                  paddingTop: '56.25%',
                }}
              />
            </Card>
            {/* <img src={MapLocation} alt="Location" style={{ width: '100%' }} /> */}

            <Card>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Description
                </Typography>
                <Typography paragraph>
                  {organisation.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
        }
      </div>
    );
  }
}
