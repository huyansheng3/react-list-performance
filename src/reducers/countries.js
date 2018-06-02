export default function reducer(
  state = {
    countries: [],
    selected: null,
    fetching: false,
    fetched: false,
    error: null,
  },
  action,
) {
  switch (action.type) {
    case 'FETCH_COUNTRIES': {
      return { ...state, fetching: true };
      break;
    }

    case 'FETCH_COUNTRIES_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        countries: action.payload,
      };
      break;
    }

    case 'FETCH_COUNTRIES_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
      break;
    }

    case 'COUNTRY_SELECTED': {
      return { ...state, selected: action.payload };
      break;
    }

    case 'ADD_COUNTRY': {
      return {
        ...state,
        countries: [...state.countries, action.payload],
      };
      break;
    }

    case 'UPDATE_COUNTRY': {
      const { id, text } = action.payload;
      const newComments = [...state.countries];
      const countryToUpdate = newComments.findIndex(
        country => country.id === id,
      );
      newComments[countryToUpdate] = action.payload;

      return {
        ...state,
        countries: newComments,
      };
      break;
    }

    case 'DELETE_COUNTRY': {
      return {
        ...state,
        countries: state.countries.filter(
          country => country.id !== action.payload,
        ),
      };
      break;
    }
  }

  return state;
}
