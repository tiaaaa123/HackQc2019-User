import React from 'react'
import { ListItem, ListItemText, Divider, ListItemSecondaryAction } from '@material-ui/core';

export default function OrganisationListItem({ organisation, onPress }) {
  return (
    <React.Fragment>
      <ListItem
        button
        alignItems={"flex-start"}
        onClick={() => onPress(organisation)}
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <ListItemText primary={organisation.name} />
        <ListItemSecondaryAction>
          <span style={{ fontSize: 14, color: '#cccccc' }}>{organisation.distance}km</span>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </React.Fragment>
  )
}