import {configureStore} from '@reduxjs/toolkit';
import surveysReducer from './surveysSlice';
import studentsReducer from './studentsSlice';
import tagsReducer from './tagsSlice'


export const store = configureStore({
   reducer: {
      surveys: surveysReducer,
      students: studentsReducer,
      tags: tagsReducer
   },
});
