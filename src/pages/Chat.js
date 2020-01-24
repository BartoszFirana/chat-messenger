import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <NavLink to="/">Logout</NavLink>
                <p>Chat</p>
            </>
        );
    }
}

export default Chat;