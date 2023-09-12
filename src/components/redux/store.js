import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';


// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer,
//   },
// });


export const store = configureStore({
  reducer: combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
  }),
});

