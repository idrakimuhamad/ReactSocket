import React, { Component } from 'react';
import { Display } from './parts/Display';

export class Audience extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <Display display={this.props.status === 'connected'}>
          <h1>Join the Session</h1>
        </Display>
      </div>
    );
  }
}
