import React from 'react';
import {
  ListItem, ListItemText, Divider, ListItemSecondaryAction, withStyles,
} from '@material-ui/core';
import OrganisationServices from './OrganisationSerivces';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: 0,
  },
});

function OrganisationListItem({ organisation, onPress, classes }) {
  return (
    <React.Fragment>
      <ListItem
        button
        alignItems="flex-start"
        onClick={() => onPress(organisation)}
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div>
          <ListItemText
            primary={organisation.name}
          />
          <OrganisationServices hideLabel organisation={organisation} />
        </div>
        <ListItemSecondaryAction>
          <span style={{ fontSize: 14, color: '#cccccc' }}>
            {organisation.distance}
            km
          </span>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </React.Fragment>
  );
}

export default withStyles(styles)(OrganisationListItem);
