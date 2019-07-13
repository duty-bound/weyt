import React from 'react' //can this be deleted?
import { connect } from 'react-redux'
import { Deals as Component } from './deals'

// const mapStateToProps = state => {
//   return {
//     deals: state.deals
// }

function mapStateToProps(state) {
  return { deals: state.deals }
}

export const Deals = connect(mapStateToProps)(Component)
