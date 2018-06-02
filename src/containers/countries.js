import React from 'react';
import Search from './autosuggest';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCountries, selectCountry } from '../actions/countries';

class Countries extends React.Component {
  render() {
    const { countries } = this.props.countries;

    if (!Object.keys(countries).length) {
      return (
        <button onClick={this.props.fetchCountries}>Show countries</button>
      );
    }

    const mappedCountries = Object.keys(countries)
      .filter(country => country.toLowerCase().startsWith('u'))
      .sort()
      .map((country, index) => (
        <li
          key={index}
          onClick={() => {
            this.props.selectCountry(country);
          }}
        >
          {country}
        </li>
      ));

    return (
      <div className="countries">
        <h2>Country</h2>
        <Search list={Object.keys(this.props.countries.countries)} />
      </div>
    );
  }
}
        // <ul>{mappedCountries}</ul>

function mapStateToProps(state) {
  return { countries: state.countries };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectCountry: selectCountry,
      fetchCountries: fetchCountries,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Countries);
