import React, { Component } from 'react'
import defaultIcon from './assets/default.png' 
import './CharacterPreview.css'

export default class CharacterPreview extends Component {
  render() {
    const character = this.props.character || {
      image: defaultIcon,
      origin: {},
      location: {},
      episode: []
    }

    return (
      <div className="character-preview">
        <img src={character.image} alt={character.name}/>
        <h2>{character.name}</h2>
        <div className="charcter-field">
          <p>Status:</p>
          <p>{character.status}</p>
        </div>
        <div className="charcter-field">
          <p>Species:</p>
          <p>{character.species}</p>
        </div>
        <div className="charcter-field">
          <p>Type:</p>
          <p>{character.type}</p>
        </div>
        <div className="charcter-field">
          <p>Gender:</p>
          <p>{character.gender}</p>
        </div>
        <div className="charcter-field">
          <p>Origin:</p>
          <p>{character.origin.name}</p>
        </div>
        <div className="charcter-field">
          <p>Location:</p>
          <p>{character.location.name}</p>
        </div>
        <div className="charcter-field">
          <p>Appearances:</p>
          <p>{character.episode.length} episodes</p>
        </div>
      </div>
    )
  }
}
