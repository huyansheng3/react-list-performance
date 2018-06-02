import React from 'react';

export default class Hello extends React.Component {
  render() {
    return (
      <div className="greeting">
        <h1>Hello, {this.props.name}!</h1>
        <h2>COOL!</h2>
        <h3>Good to see you here.</h3>
      </div>
    );
  }
}
