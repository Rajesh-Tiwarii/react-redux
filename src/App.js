import React, { Component } from 'react';
import './App.css';
import './components/Post';
import Post from './components/Post';
import PostForm from './components/PostForm';
import {Provider} from 'react-redux';
import store from './store';
import Search from './components/Search';

class App extends Component {
  
  render() {
     
    return (
      <Provider store = {store}>
      <div className="App">
        <PostForm />
        <hr />
        <div>
        <Search />
      </div>
        <hr />
        <Post />
      </div>
      </Provider>
    );

    
  }
}

export default App;
