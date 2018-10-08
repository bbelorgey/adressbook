import React, { Component } from 'react';

import Contact from "./componants/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Contact  first="Nono" 
                  last="belorgey" 
                  email="bruno.belorgey31300@gmail.com" 
                  avatar="https://avatars3.githubusercontent.com/u/39262583?s=400&u=d5b05002c938517c20aea6da4cf6587b5c6d9ca7&v=4" alt="Avatar de nono" 
        />
        <Contact 
                  first="Loulou" 
                  last="fifi" 
                  email="adresseMail@gmail.com" 
                  avatar="https://avatars3.githubusercontent.com/u/39262583?s=400&u=d5b05002c938517c20aea6da4cf6587b5c6d9ca7&v=4"
        />
      </div>
    );
  }
}

export default App;
