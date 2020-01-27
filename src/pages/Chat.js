import React, { Component } from 'react';

import { Link, Route, Switch } from 'react-router-dom';

import Logo from '../components/Logo';
import '../styles/Chat.css';
import doeAvatar from '../images/doe-avatar.svg';
import smithAvatar from '../images/smith-avatar.svg';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <header className="chat__header">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="account">
                        <div className="account__button">
                            <Switch>
                                <Route path="/chat/John-Doe" exact>John Doe</Route>
                                <Route path="/chat/John-Smith" exact>John Smith</Route>
                            </Switch>
                        </div>
                        <Link className="account__button" to="/">
                            Logout
                        </Link>
                        <div className="account__button">
                            <Switch>
                                <Route path="/chat/John-Doe" exact>
                                    <img src={doeAvatar} alt="" className="account__avatar" />
                                </Route>
                                <Route path="/chat/John-Smith" exact>
                                    <img src={smithAvatar} alt="" className="account__avatar" />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </header>
                <main className="chat__main">
                    <div className="friend">
                        <div className="friend__avatar">
                            <Switch>
                                <Route path="/chat/John-Doe" exact>
                                    <img src={smithAvatar} alt="" className="account__avatar" />
                                </Route>
                                <Route path="/chat/John-Smith" exact>
                                    <img src={doeAvatar} alt="" className="account__avatar" />
                                </Route>
                            </Switch>
                        </div>
                        <div className="friend__name">
                            <Switch>
                                <Route path="/chat/John-Doe" exact>John Smith</Route>
                                <Route path="/chat/John-Smith" exact>John Doe</Route>
                            </Switch>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default Chat;