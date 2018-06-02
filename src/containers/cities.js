import React from 'react';
import Search from './autosuggest';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCity, fetchWeather } from '../actions/cities';

class Cities extends React.Component {
  //   createCitiesList() {
  //     const selectedCountry = this.props.countries.selected;
  //     const cities = this.props.countries.countries[selectedCountry]
  //       .filter((city, index, array) => index == array.indexOf(city))
  //       .sort();

  //     return cities.map((city, index) => (
  //       <li
  //         key={index}
  //         onClick={() => {
  //           this.props.selectCity(cities, city);
  //           this.props.fetchWeather(city);
  //         }}
  //       >
  //         {city}
  //       </li>
  //     ));
  //   }

  createCitiesList = () => {
    const selectedCountry = this.props.state.autosuggest.value;
    return this.props.countries.countries[selectedCountry]
      .filter((city, index, array) => index == array.indexOf(city))
      .sort();
  };

  render() {
    let cities = null;
    console.log(this.props.state.autosuggest.value);
    if (this.props.state.autosuggest.selected) {
      cities = (
        <div className="cities">
          <h2>City</h2>
          <Search list={this.createCitiesList()} />
        </div>
      );
    }

    // if (this.props.countries.selected) {
    //   cities = (
    //     <div className="cities">
    //       <h2>City</h2>
    //       <input type="text" />
    //       <ul>{this.createCitiesList()}</ul>
    //     </div>
    //   );
    // }

    return cities;
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    cities: state.cities,
    state,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity, fetchWeather: fetchWeather },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Cities);
