import React from 'react'
import { Deal } from '../deal'

export const Deals = (props) =>
  <React.Fragment>
    {props.deals.map((deal, i) => <Deal key={i} deal={deal} />)}
  </React.Fragment>
