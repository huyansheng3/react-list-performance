import React from 'react';
import { connect } from 'react-redux';

class City extends React.Component {
  render() {
    let city = null;

    if (this.props.cities.weather) {
      city = (
        <div className="city">
          <h2>Weather now</h2>
          <h3 className="date">
            {this.props.cities.weather.query.results.channel.lastBuildDate}
          </h3>
          <h3 className="location">
            {`${this.props.cities.weather.query.results.channel.location.city},  ${this.props.cities.weather.query.results.channel.location.country}`}
          </h3>
          <h2 className="temperature">
            {`${this.props.cities.weather.query.results.channel.item.condition.temp} °C`}
          </h2>
          <h3 className="condition">
            {
              this.props.cities.weather.query.results.channel.item.condition
                .text
            }
          </h3>
        </div>
      );
    }

    return city;
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

export default connect(mapStateToProps)(City);
