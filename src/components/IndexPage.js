import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import Header from './Header'
import CharacterList from './CharacterList'
import CharacterPreview from './CharacterPreview'
import Pager from './Pager'

import './IndexPage.css'

class IndexPage extends Component {
  state = { selected: null }

  componentWillMount() {
    this.props.loadCharacters()
  }

  goToPage = (page) => {
    this.props.loadCharacters(page)
  }

  onSelect = (character) => {
    this.setState({
      selected: character.id
    })
  }

  render() {
    const selectedCharacter = this.props.characters.find(character => {
      return character.id === this.state.selected
    })

    return (
      <div className="index-page">
        <Header count={this.props.count} />
        <Pager
          total={this.props.pages}
          onChange={this.goToPage}
        />
        <div className="index-characters">
          <CharacterList
            characters={this.props.characters}
            selected={this.state.selected}
            onSelect={this.onSelect}
          />
          <CharacterPreview character={selectedCharacter} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    characters: state.get('characters') || [],
    count: state.get('count') || 0,
    pages: state.get('pages') || 0
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadCharacters: (page) => {
      dispatch(actions.loadCharacters(page))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
