import React, { Component } from 'react';

class IndexPage extends Component {
  state = { numberOfCharacters: 0 }

  addCharacter = () => {
    const newValue = this.state.numberOfCharacters + 1

    this.setState({ numberOfCharacters: newValue })
  }

  render() {
    return (
      <div className='index-page'>
        {this.props.title}: {this.state.numberOfCharacters}
        <button onClick={this.addCharacter}>Add character</button>
      </div>
    );
  }
}

export default IndexPage;
