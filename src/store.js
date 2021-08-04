import { createStore, combineReducers } from 'redux';
import { numberOfClicksReducer } from './reducers';

const rootReducer = combineReducers({
	numberOfClicks: numberOfClicksReducer,
});

export const store = createStore(rootReducer);