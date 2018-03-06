import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import IndexPage from './components/IndexPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IndexPage title="Rick and Morty characters"/>
      </Provider>
    );
  }
}

export default App;
