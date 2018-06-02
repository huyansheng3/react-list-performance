import React from 'react';
import Countries from '../containers/countries';
import Cities from '../containers/cities';
import City from '../containers/city';

export default class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        <Countries />
        <Cities />
        <City />
      </div>
    );
  }
}
