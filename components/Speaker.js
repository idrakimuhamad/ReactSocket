import React, { Component } from 'react';

export class Speaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <h1>Speaker: {this.props.title}</h1>
    );
  }
}
