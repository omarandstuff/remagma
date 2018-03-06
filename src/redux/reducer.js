import Immutable from 'immutable'
import * as constants from './constants'

export default function reducer(state = Immutable.Map(), action) {
  switch (action.type) {
    case constants.LOAD_CHARACTERS:
      return state.set('characters', action.characters)
    default:
      return state
  }
}
