import React, { Component } from 'react';
import { Link } from 'react-router';

export const Header = (props) => (
  <header className="row">
    <div className="col-xs-10">
      <h1>{props.title}</h1>
      <Link
        to="/">
        Index
      </Link>
      <Link
        to="/speaker">
        Speaker
      </Link>
      <Link
        to="/board">
        Board
      </Link>
    </div>
    <div className="col-xs-2">
      <span id="connection-status" className={props.statusClass}></span>
    </div>
  </header>
);
