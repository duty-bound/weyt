import { deals } from './deals'

const initialState = {
  deals: deals,
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    default: return state
  }
}
