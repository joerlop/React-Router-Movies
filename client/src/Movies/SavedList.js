import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink 
            to={`/movies/${movie.id}`}
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
