const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
const LOAD_SUGGESTIONS_BEGIN = 'LOAD_SUGGESTIONS_BEGIN';
const MAYBE_UPDATE_SUGGESTIONS = 'MAYBE_UPDATE_SUGGESTIONS';
const SUGGESTION_SELECTED = 'SUGGESTION_SELECTED';
const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';

export function updateInputValue(event, { newValue }) {
  return {
    type: UPDATE_INPUT_VALUE,
    value: newValue,
  };
}

export function loadSuggestions(value, list) {
  return dispatch => {
    dispatch({ type: LOAD_SUGGESTIONS_BEGIN });
    setTimeout(
      () => dispatch(maybeUpdateSuggestions(value, list)),
      300 + Math.random() * 1000,
    );
  };
}

export function maybeUpdateSuggestions(value, list) {
  return {
    type: MAYBE_UPDATE_SUGGESTIONS,
    suggestions: getSuggestions(value, list),
    value,
  };
}

export function suggestionSelected(suggestion) {
  return {
    type: SUGGESTION_SELECTED,
    value: suggestion,
  };
}

export function clearSuggestions() {
  return {
    type: CLEAR_SUGGESTIONS,
  };
}

function getSuggestions(value, list) {
  const escapedValue = value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // console.log(escapedValue);
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return list.filter(item => regex.test(item));
}
