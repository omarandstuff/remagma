import React, { Component } from 'react'
import CharacterItem from './CharacterItem'
import './CharacterList.css'

export default class CharacterList extends Component {
  render() {
    const characters = this.props.characters.map(character => {
      return <CharacterItem
        key={character.id}
        character={character}
        onClick={this.props.onSelect}
        selected={character.id === this.props.selected}
      />
    })

    return (
      <div className="character-list">
        {characters}
      </div>
    )
  }
}
