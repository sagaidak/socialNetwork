import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {

    let postsData = [
        {id: 1, post: "Hi, how are you?", likes: 5},
        {id: 2, post: "Lost in the oblivion", likes: 10},
    ];

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Lena'},
        {id: 4, name: 'Katya'},
        {id: 5, name: 'Ksusha'},
        {id: 6, name: 'Albina'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'I love you'},
        {id: 1, message: 'I need you'},
        {id: 1, message: 'I want you'},
    ];

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData} />}/>
                    <Route path='/profile' render={() => <Profile postsData={postsData} />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;