import * as constants from './constants'
import axios from 'axios'

export function loadCharacters(page = 1) {
  return dispatch => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(function (response) {
      const characters = response.data.results
      const pages = response.data.info.pages
      const count = response.data.info.count

      dispatch(populateCharacters(characters, count, pages))
    })
  }
}

function populateCharacters(characters, count, pages) {
  return {
    type: constants.POPULATE_CHARACTERS,
    characters,
    count,
    pages
  }
}
