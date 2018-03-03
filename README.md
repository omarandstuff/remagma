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
axios | Promise based HTTP client for the browser and node.js
immutable | Immutable collections for JavaScript
react | A declarative, efficient, and flexible JavaScript library for building user interfaces
react-dom | This package serves as the entry point of the DOM-related rendering paths
react-redux | Official React bindings for Redux
react-scripts | Shiped with create react app
redux | Redux is a predictable state container for JavaScript apps
redux-thunk | Thunk middleware for Redux

### Install

```npm install --save redux react-redux redux-thunk axios immutable```

