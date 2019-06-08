import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';

// Define the html element to be replaced
const rootElement = document.getElementById('root');

// Define the function to replace that html element with the application
let render = () => {
    ReactDOM.render(<App />, rootElement);
}

// Automatically update that application while running
if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    })
}

// Render (duh!)
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
