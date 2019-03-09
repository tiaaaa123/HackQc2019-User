import React from 'react'

export default function OrganisationListItem({ id, name, onPress }) {
  return (
    <div onClick={() => onPress(id)}>
      <span>{name}</span>
    </div>
  )
}