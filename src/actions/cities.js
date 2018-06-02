export function selectCity(cities, city) {
  return {
    type: 'CITY_SELECTED',
    payload: { cities, city },
  };
}

export function fetchWeather(city) {
  return function(dispatch) {
    fetch(
      `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid
%20in%20(select%20woeid%20from%20geo.places(1)%20where
%20text%3D%22${city}%22)%20and%20u%3D'c'&format=json
&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`,
    )
      .then(response => {
        dispatch({
          type: 'FETCH_WEATHER',
          payload: response.json(),
        });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_WEATHER', payload: error });
      });
  };
}
