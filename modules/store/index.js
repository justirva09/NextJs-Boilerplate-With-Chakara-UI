import {
    createStore,
    applyMiddleware,
    composeWithDevTools
  } from 'libraries';
  import thunk from 'redux-thunk';
  import { reducer } from '../reducer';
  
  
  const initialState = {};
  const middleware = [thunk];
  
  const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
  
  export default store;
  