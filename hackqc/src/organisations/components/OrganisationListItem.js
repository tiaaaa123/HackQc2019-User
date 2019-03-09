import React from 'react'

export default function OrganisationListItem({ organisation, onPress }) {
  return (
    <div onClick={() => onPress(organisation.reference)}>
      <span>{organisation.name}</span>
    </div>
  )
}