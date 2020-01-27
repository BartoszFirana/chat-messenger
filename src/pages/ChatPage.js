import React from 'react';

import { Link, Route, Switch } from 'react-router-dom';

import Logo from '../components/Logo';
import Chatlog from '../components/Chatlog';

import '../styles/Chat.css';

import doeAvatar from '../images/doe-avatar.svg';
import smithAvatar from '../images/smith-avatar.svg';


const ChatPage = () => {
    return (
        <>
            <header className="chat__header">
                <div className="logo">
                    <Logo />
                </div>
                <div className="account">
                    <div className="account__button">
                        <MyName />
                    </div>
                    <Link className="account__button" to="/">Logout</Link>
                    <div className="account__button">
                        <MyAvatar />
                    </div>
                </div>
            </header>
            <main className="chat__main">
                <div className="friend">
                    <div className="friend__avatar">
                        <FriendAvatar />
                    </div>
                    <div className="friend__name">
                        <FriendName />
                    </div>
                </div>
                <div className="chatlog">
                    <Chatlog />
                </div>
            </main>
        </>
    );
}

const MyName = () => {
    return (
        <Switch>
            <Route path="/chat/John-Doe" exact>John Doe</Route>
            <Route path="/chat/John-Smith" exact>John Smith</Route>
        </Switch>
    );
}

const MyAvatar = () => {
    return (
        <Switch>
            <Route path="/chat/John-Doe" exact>
                <img src={doeAvatar} alt="" className="account__avatar" />
            </Route>
            <Route path="/chat/John-Smith" exact>
                <img src={smithAvatar} alt="" className="account__avatar" />
            </Route>
        </Switch>
    );
}

const FriendAvatar = () => {
    return (
        <Switch>
            <Route path="/chat/John-Doe" exact>
                <img src={smithAvatar} alt="" className="account__avatar" />
            </Route>
            <Route path="/chat/John-Smith" exact>
                <img src={doeAvatar} alt="" className="account__avatar" />
            </Route>
        </Switch>
    );
}

const FriendName = () => {
    return (
        <Switch>
            <Route path="/chat/John-Doe" exact>John Smith</Route>
            <Route path="/chat/John-Smith" exact>John Doe</Route>
        </Switch>
    );
}

export default ChatPage;