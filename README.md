# Re-Magma

This proyect is meant to help intermediate/advanced JS developers to get into the React library along side the Redux pattern and library by building a small single page application that access a public api and shows the provided information to the user.

## Pre requisites
Previous **JS** experince, not to much but at least basic understandng of the **ES6** syntaxis.

**Node JS**, basic undestanding of exports and requires and **npm** install.

you can get it by in MacOS by running
```brew install node```

And in ubuntu
```sudo apt-get install nodejs npm``` 

## 01 Base application

For this worshop we will use the ```create react app``` library that alllows us to rapidly initializate a **React** application with pre configured *development server*, *webpack*, *babel*, *jest testing* and *production build* generation.

### Create react app

You can install the **[library](https://github.com/facebook/create-react-app)** and initializate a new React application in 2 differnt ways.

The first one documented in the page by March 2, 2018 needs the **[npx](https://github.com/zkat/npx)** library wich we can obtain by running

```npm install -g npx```

Then just generate the new app

```npx create-react-app <app name>```

The second way is by installing the ```create react app``` package globaly with npm

```npm install -g create react app```

Then just generate the new app

```create-react-app <app name>```

And then navigate into our new React app

```cd <app name>```

To see the basic generated app in action just run

```npm start```
