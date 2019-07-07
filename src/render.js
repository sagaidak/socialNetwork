import ReactDOM from "react-dom";
import React from 'react';
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText}/>, document.getElementById('root'));
};