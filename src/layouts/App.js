import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Page from './Page';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          {<Page />}
        </div>
      </Router>
    );
  }
}

export default App;