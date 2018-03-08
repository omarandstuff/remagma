import Immutable from 'immutable'
import * as constants from './constants'

export default function reducer(state = Immutable.Map(), action) {
  switch (action.type) {
    case constants.POPULATE_CHARACTERS:
      return state.set('characters', action.characters)
                  .set('count', action.count)
                  .set('pages', action.pages)
    default:
      return state
  }
}
