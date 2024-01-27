import React from 'react'
import { IOffer } from '../models/offer'
import { useLocation } from 'react-router-dom'

interface LocationState{
  offer: IOffer
}

export default function SelectedPage() {
  const location = useLocation<LocationState>()
  const offer: IOffer = location.state?.offer
  return (
    <div>
      <h2>Offer was selected</h2>
      <p>{offer.details}</p>
      <p>{offer.company}</p>
      <p>{offer.price}</p>
    </div>
  )
}
