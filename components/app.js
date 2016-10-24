import React, { Component } from 'react';import io from 'socket.io-client';

import { Header } from './parts/Header';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'disconnected',
      title: ''
    };

    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.welcome = this.welcome.bind(this);
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('welcome', this.welcome);
  }

  welcome(socketState) {
    this.setState({
      title: socketState.title
    })
  }

  connect() {
    this.setState({
      status: 'connected'
    });
  }

  disconnect() {
    this.setState({
      status: 'disconnected'
    });
  }

  render() {
    const { title, status } = this.state;
    const statusClass = status === 'connected' ? 'label label-success' : 'label label-danger';
    const childrenProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      title,
      status,
      statusClass
    }));

    return (
      <div className="container">
        <Header
          title={title}
          statusClass={statusClass}/>
          {childrenProps}
      </div>
    );
  }
}
