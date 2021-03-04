import { combineReducers } from 'libraries';

// Reducer
import profile from './profile/reducer';


export const reducer = combineReducers({
    profile
});

// Action
export * from './profile/action';

// Selector
export * from './profile/selector';