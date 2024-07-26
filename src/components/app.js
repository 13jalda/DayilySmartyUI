import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchbar';
import RecentPost from './recentpost';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
          <SearchBar/>
          <RecentPost/>
        </div>
      </div>
    );
  }
}
