export default function reducer(
  state = {
    cities: [],
    selected: null,
    fetching: false,
    fetched: false,
    weather: null,
  },
  action,
) {
  switch (action.type) {
    case 'CITY_SELECTED': {
      return {
        ...state,
        cities: action.payload.cities,
        selected: action.payload.city,
      };
      break;
    }
    case 'FETCH_WEATHER_PENDING': {
      return {
        ...state,
        fetching: true,
      };
      break;
    }
    case 'FETCH_WEATHER_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        weather: action.payload,
      };
      break;
    }
    case 'FETCH_WEATHER_REJECTED': {
      return {
        ...state,
        fetching: false,
      };
      break;
    }
  }
  return state;
}
