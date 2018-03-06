import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class IndexPage extends Component {
  state = { numberOfCharacters: 0 }

  componentWillMount() {
    this.props.loadCharacters()
  }

  render() {
    const characters = this.props.characters.map(character => {
      return <li key={character.id}>{character.name}</li>
    })

    return (
      <div className='index-page'>
        {this.props.title}: {this.props.characters.length}
        <ul>
          {characters}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.get('characters') || []
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadCharacters: () => {
      dispatch(actions.loadCharacters())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
