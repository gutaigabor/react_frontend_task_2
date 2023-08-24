import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import api from './api';
import movie from './movie';

export const config = {
  key: 'root',
  storage,
  whitelist: ['movie'],
  timeout: 10000
};

const rootReducer = persistCombineReducers(config, {
  [api.reducerPath]: api.reducer,
  movie
});

export default rootReducer;