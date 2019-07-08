import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import ReactDOM from "react-dom";
import App from "./App";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App
             store={store}
        />,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
