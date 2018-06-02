const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
const LOAD_SUGGESTIONS_BEGIN = 'LOAD_SUGGESTIONS_BEGIN';
const MAYBE_UPDATE_SUGGESTIONS = 'MAYBE_UPDATE_SUGGESTIONS';
const SUGGESTION_SELECTED = 'SUGGESTION_SELECTED';
const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';

const initialState = {
  value: '',
  suggestions: [],
  isLoading: false,
  selected: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return {
        ...state,
        value: action.value,
      };

    case LOAD_SUGGESTIONS_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case MAYBE_UPDATE_SUGGESTIONS:
      // Ignore suggestions if input value changed
      if (action.value !== state.value) {
        return {
          ...state,
          isLoading: false,
        };
      }

      return {
        ...state,
        suggestions: action.suggestions,
        isLoading: false,
      };

    case SUGGESTION_SELECTED:
      return {
        ...state,
        value: action.value,
        selected: true,
      };

    case CLEAR_SUGGESTIONS:
      return {
        ...state,
        suggestions: [],
        isLoading: false,
      };

    default:
      return state;
  }
}
