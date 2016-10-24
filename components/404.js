import React, { Component } from 'react';
import { Link } from 'react-router';

export class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>404</h1>
        <p>We cannot find the page you're looking for. Maybe you're looking for
        these:</p>
        <Link
          to="/">
          Audience
        </Link>
        <Link
          to="/speaker">
          Speaker
        </Link>
        <Link
          to="/Board">
          Board
        </Link>
      </div>
    );
  }
}
