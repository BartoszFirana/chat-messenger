import React, { Component } from 'react';

import '../styles/Chatlog.css';

class Chatlog extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="editor">
                    <input type="text" className="editor__input" />
                    <button className="editor__button">send</button>
                </div>
            </>
        );
    }
}

export default Chatlog;