import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateInputValue,
  loadSuggestions,
  maybeUpdateSuggestions,
  suggestionSelected,
  clearSuggestions,
} from '../actions/autosuggest';

class Search extends React.Component {
  getSuggestionValue = suggestion => suggestion;

  renderSuggestion = suggestion => <span>{suggestion}</span>;

  render() {
    const {
      value,
      suggestions,
      updateInputValue,
      loadSuggestions,
      maybeUpdateSuggestions,
      suggestionSelected,
      clearSuggestions,
    } = this.props;
    const inputProps = {
      placeholder: 'Search',
      value,
      onChange: (event, { newValue }) => {
        updateInputValue(event, { newValue });
      },
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={({ value }) =>
          maybeUpdateSuggestions(value, this.props.list)}
        onSuggestionsClearRequested={clearSuggestions}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        onSuggestionSelected={(event, { suggestion }) =>
          suggestionSelected(suggestion)}
        inputProps={inputProps}
      />
    );
  }
}

function mapStateToProps(state) {
  const { value, suggestions, isLoading, list } = state.autosuggest;

  return {
    value,
    suggestions,
    isLoading,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateInputValue,
      loadSuggestions,
      maybeUpdateSuggestions,
      suggestionSelected,
      clearSuggestions,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);
