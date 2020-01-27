import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import ChatPage from '../pages/ChatPage';
import ErrorPage from '../pages/ErrorPage';

class Page extends Component {

    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/chat" component={ChatPage} />
                <Route component={ErrorPage} />
            </Switch>
        );
    }
}

export default Page;