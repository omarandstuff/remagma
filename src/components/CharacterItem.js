import React, { Component } from 'react'
import './CharacterItem.css'

export default class CharacterItem extends Component {
  onClick = () => {
    if(this.props.onClick) {
      this.props.onClick(this.props.character)
    }
  }

  render() {
    const character = this.props.character
    const className = this.props.selected ? 'character-item selected' : 'character-item'

    return (
      <div key={character.id} className={className} onClick={this.onClick} >
        <img src={character.image} alt={character.name} />
        <div className="character-description">
          <h4>{character.name}</h4>
          <p>{character.species}</p>
        </div>
      </div>
    )
  }
}
