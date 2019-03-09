import React from 'react';
import { ListItem, ListItemText, Divider, ListItemSecondaryAction, ListItemIcon } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import BedIcon from '@material-ui/icons/Hotel';
import FoodIcon from '@material-ui/icons/Restaurant';

export default function OrganisationListItem({ organisation, onPress }) {
  return (
    <React.Fragment>
      <ListItem
        button
        alignItems={'flex-start'}
        onClick={() => onPress(organisation)}
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div>
          <ListItemText
            primary={organisation.name}
          />
          <div>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemIcon><BedIcon /></ListItemIcon>
            <ListItemIcon><FoodIcon /></ListItemIcon>
          </div>
        </div>
        <ListItemSecondaryAction>
          <span style={{ fontSize: 14, color: '#cccccc' }}>{organisation.distance}km</span>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </React.Fragment>
  );
}
