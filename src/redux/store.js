import monthReducer from './monthReducer';
import dayReducer from './dayReducer';
import modalReducer from './modalReducer';
import eventsReducer from './eventsReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  month: monthReducer,
  day: dayReducer,
  modal: modalReducer,
  event: eventsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
