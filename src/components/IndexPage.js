import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class IndexPage extends Component {
  state = { page: 1, previousDisabled: true, nextDisabled: true }

  componentWillMount() {
    this.props.loadCharacters()
  }

  componentWillReceiveProps(nextProps) {
    const nextDisabled = nextProps.pages === this.state.page

    this.setState({ nextDisabled })
  }

  goToPreviousPage = () => {
    const page = this.state.page - 1

    this.goToPage(page)
  }

  goToNextPage = () => {
    const page = this.state.page + 1

    this.goToPage(page)
  }

  goToPage = (page) => {
    const previousDisabled = page === 1
    const nextDisabled = this.props.pages === page

    this.props.loadCharacters(page)
    this.setState({ page, previousDisabled, nextDisabled })
  }

  render() {
    const characters = this.props.characters.map(character => {
      return <li key={character.id}>{character.name}</li>
    })

    return (
      <div className='index-page'>
        {this.props.title}: {this.props.count}
        <ul>
          {characters}
        </ul>
        <div>
          <button
            disabled={this.state.previousDisabled}
            onClick={this.goToPreviousPage}
          >
            Previous
          </button>
          {this.state.page}
          <button
            disabled={this.state.nextDisabled}
            onClick={this.goToNextPage}
          >
            Next
          </button>
        </div>
      </div>
    );
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
