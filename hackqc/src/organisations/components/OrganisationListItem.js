import React from 'react'
import { ListItem, ListItemText, Divider } from '@material-ui/core';

export default function OrganisationListItem({ organisation, onPress }) {
  return (
    <React.Fragment>
      <ListItem
        button
        alignItems={"flex-start"}
        onClick={() => onPress(organisation.reference)}>
        <ListItemText>{organisation.name}</ListItemText>
      </ListItem>
      <Divider />
    </React.Fragment>
  )
}