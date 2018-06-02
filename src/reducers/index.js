import { combineReducers } from 'redux';

import countries from './countries';
import cities from './cities';
import autosuggest from './autosuggest';

export default combineReducers({
  countries,
  cities,
  autosuggest
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';

// const userReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'CHANGE_NAME': {
//       state = { ...state, name: action.payload };
//       break;
//     }
//     case 'CHANGE_AGE': {
//       state = { ...state, age: action.payload };
//       break;
//     }
//     case 'error': {
//       throw new Error('ERROR');
//       break;
//     }
//   }
//   return state;
// };

// const countriesReducer = (state = [], action) => {
//   return state;
// };

// const fetchReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'FETCH_USERS_PENDING': {
//       return { ...state, fetching: true };
//       break;
//     }
//     case 'FETCH_USERS_FULFILLED': {
//       return {
//         ...state,
//         fetching: false,
//         fetched: true,
//         users: action.payload,
//       };
//       break;
//     }
//     case 'FETCH_USERS_REJECTED': {
//       return { ...state, fetching: false, error: action.payload };
//       break;
//     }
//   }
//   return state;
// };

// const reducers = combineReducers({
//   user: userReducer,
//   countries: countriesReducer,
//   fetch: fetchReducer,
// });

// // instead of redux-logger
// //
// // const logger = store => next => action => {
// //   console.log('action fired', action);
// //   next(action);
// // };

// const error = store => next => action => {
//   try {
//     next(action);
//   } catch (error) {
//     console.log('error', error);
//   }
// };

// const middleware = applyMiddleware(promise(), thunk, logger, error);

// const initialState = {
//   user: {
//     name: 'Marty',
//     age: 26,
//   },
//   countries: ['Hey!', 'How are you?', 'Bye!'],
//   fetch: {
//     fetching: false,
//     fetched: false,
//     users: [],
//     error: null,
//   },
// };

// const store = createStore(reducers, initialState, middleware);

// // instead of logger()
// //
// // store.subscribe(() => {
// //   console.log('store changed', store.getState());
// // });

// // age & name changing
// //
// store.dispatch({ type: 'CHANGE_NAME', payload: 'Will' });
// store.dispatch({ type: 'CHANGE_AGE', payload: 35 });
// // store.dispatch({ type: 'error', payload: 36 });

// // without promise()
// //
// // store.dispatch(dispatch => {
// //   dispatch({ type: 'FETCH_USERS_START' });
// //   fetch('https://sandbox.codesandbox.io/')
// //     .then(response => {
// //       dispatch({ type: 'RECEIVE_USERS', payload: responce.data });
// //     })
// //     .catch(error => {
// //       dispatch({ type: 'FETCH_USERS_ERROR', payload: error });
// //     });
// // });

// store.dispatch({
//   type: 'FETCH_USERS',
//   payload: fetch('https://sandbox.codesandbox.io/'),
// });

// ReactDOM.render(<div />, document.getElementById('container'));
