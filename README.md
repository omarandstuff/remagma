# Re-Magma

This project is meant to help intermediate/advanced JS developers to get into the React library alongside the Redux pattern and library by building a small single page application that access a public API and shows the provided information to the user.

## Pre-requisites
Previous **JS** experience, not too much but at least basic understanding of the **ES6** syntax.

**Node JS**, basic understanding of exports and requires and **npm** install.

you can get it by in MacOS by running
```brew install node```

And in Ubuntu
```sudo apt-get install nodejs npm``` 

## 01 Base application

For this workshop we will use the ```create react app``` library that allows us to rapidly initialize a **React** application with pre-configured *development server*, *webpack*, *babel*, *jest testing* and *production build* generation.

### Create react app

You can install the **[library](https://github.com/facebook/create-react-app)** and initialize a new React application in 2 different ways.

The first one documented in the page by March 2, 2018 needs the **[npx](https://github.com/zkat/npx)** library which we can obtain by running

```npm install -g npx```

Then just generate the new app

```npx create-react-app <app name>```

The second way is by installing the ```create react app``` package globally with npm

```npm install -g create react app```

Then just generate the new app

```create-react-app <app name>```

And then navigate into our new React app

```cd <app name>```

To see the basic generated app in action just run

```npm start```

## 02 Dependencies

We will need the next libraries
Name | Description
----- | -----------
react | A declarative, efficient, and flexible JavaScript library for building user interfaces
react-dom | This package serves as the entry point of the DOM-related rendering paths
react-redux | Official React bindings for Redux
react-scripts | Shiped with create react app
redux | Redux is a predictable state container for JavaScript apps
redux-thunk | Thunk middleware for Redux
axios | Promise based HTTP client for the browser and node.js
immutable | Immutable collections for JavaScript

### Install

```npm install --save redux react-redux redux-thunk axios immutable```

## 03 Redux configuration

Redux is composed by three basic concepts:

### The Store
Is where our app state will be allocated, the store will keep track of the state and supply it to our application when require it.

```src/redux/store.js```
```javascript
import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

export default createStore(reducer, applyMiddleware(thunk))
```

### Reducer/s
The reducer is in charge of change the state after and actions is triggered.

```src/redux/reducer.js```
```javascript
import Immutable from 'immutable'
import * as constants from './constants'

export default function reducer(state = Immutable.Map(), action) {
  switch (action.type) {
    default:
      return state
  }
}
```

### Actions
The actions will be call to trigger events, the actions supply the reducer with an action type and an action payload.

```src/redux/actions.js```
```javascript
import * as constants from './constants'

export function() {
    return {
        type: constants.ACION_NAME
    }
}
```

---

More concepts

### Constants
Optionally you can use a set of STRING constants to represent action type names.

```src/redux/contants.js```
```javascript
export const ACTION_NAME = 'ACTION_NAME'
```


### Provider

This React component wraps our app and supplies the inner components with the store object.

```javascript
import { Provider } from 'react-redux'
import store from './redux/store'

<Provider store={store}>
   ...Rest of compoenents
</Provider>
```

---

At the end you will end up with the next files hierarchy

```
- src
 |_ redux
   |_ actions.js
   |_ constants.js
   |_ reducer.js
   |_ store.js 
```

## 04 React components

React creates a virtual DOM in memory which at the end will be rendered to the browser DOM as common DOM children tags, but while they are in memory will also have a reacty plus, by having a life cycle, properties and state.

### Basic HTML components

React can easily create components that will render common HTML tags into the browser DOM, they don't need any special configuration and can have any attribute their analogue HTML can have, except for the ```class``` attribute in React this should be written as ```className```.

JSX example div:
```javascript
<div className="juts-a-div">Content</div>
```

This will render as:
```html
<div class="just-a-div">Content</div>
```

Let's take a look to our current App.js file.
```javascript
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
```

This will render as
```html
<div class="App">
  <header class="App-header">
    <img src="/static/media/logo.5d5d9eef.svg" class="App-logo" alt="logo">
    <h1 class="App-title">Welcome to React</h1>
  </header>
  <p class="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>
```

As you can see the ```<Provider />``` component is not being rendered as a HTML, this is because only common HTML tags React components will be rendered into the browser DOM any other Component is just a wrapper with the logic needed to render the desired HTML.

### Our first component

Lets replace the boilerplate code inside our ```<App/>``` component with or own ```IndexPage``` component.

```src/components/IndexPage.jsx```

```javascript
import React, { Component } from 'react';

class IndexPage extends Component {
  render() {
    return (
      <div className='index-page'>
        This our brand new Page
      </div>
    );
  }
}

export default IndexPage;
```

Then just require our new component in ```App.js``` and replace all the content for our own.

```javascript
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import IndexPage from './components/IndexPage'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IndexPage />
      </Provider>
    );
  }
}

export default App;
```

Now our app will render

```html
<div class="index-page">This our brand new Page</div>
```

Again neither ```<Provider />``` or ```<IndexPage />``` are being rendered as HTML tags but since ```IndexPage``` is rendering some common react components in its inside, they are being rendered to the browser DOM.
