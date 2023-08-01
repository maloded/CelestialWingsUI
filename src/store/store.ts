import { combineReducers, configureStore } from '@reduxjs/toolkit'; 
import aircraftReducer from './reducers/AircraftSlice';

const rootReducer = combineReducers({
  aircraftReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore  = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
// import { createApi } from './createApi';
// (async () => {
//   const api = await createApi();
//   const data = await api.aircraft.getAllAircrafts();
//   console.dir({ data })
// })();