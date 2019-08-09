import { combineReducers } from 'redux';

import { countReducer } from './count';
import { changeValueReducer } from './changeValue';

const rootReducer = combineReducers({ countReducer, changeValueReducer });

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
