import * as constants from './constants'

export function loadCharacters() {
  return {
    type: constants.LOAD_CHARACTERS,
    characters: [
      { id: 1, name: 'Rick' },
      { id: 2, name: 'Morty' },
      { id: 3, name: 'Llamas' }
    ]
  }
}
