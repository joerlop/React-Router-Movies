import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    console.log(movie);
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route 
          exact 
          path="/movies/:id" 
          render={(routeProps) => (
            <Movie {...routeProps} addToSavedList={this.addToSavedList}/>
          )}
        />
      </div>
    );
  }
}
