export function fetchCountries() {
  return function(dispatch) {
    dispatch({ type: 'FETCH_COUNTRIES' });

    const xhr = new XMLHttpRequest();

    xhr.open(
      'GET',
      'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json',
      true,
    );

    xhr.onreadystatechange = function() {
      if (this.readyState != 4) return;

      if (this.status != 200) {
        dispatch({
          type: 'FETCH_COUNTRIES_REJECTED',
          payload: this.statusText || 'запрос не удался',
        });
        // throw new Error(this.status ? this.statusText : 'запрос не удался');
      }

      dispatch({
        type: 'FETCH_COUNTRIES_FULFILLED',
        payload: JSON.parse(this.responseText),
      });
    };

    xhr.send();
  };
}

export function selectCountry(country) {
  return {
    type: 'COUNTRY_SELECTED',
    payload: country,
  };
}

// export function fetchCountries() {
//   return function(dispatch) {
//     setTimeout(() => {
//       dispatch({
//         type: 'FETCH_COUNTRIES_FULFILLED',
//         payload: ['Hey!', 'How are you?', 'Bye!'],
//       });
//     }, 2000);
//   };
// }
