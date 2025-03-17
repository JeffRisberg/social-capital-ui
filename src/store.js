import {configureStore} from '@reduxjs/toolkit';
import botsReducer from './containers/OverTime/botsSlice';
import studentsReducer from './containers/ByStudent/studentsSlice';
import tagsReducer from './containers/Tags/tagsSlice'


export const store = configureStore({
   reducer: {
      bots: botsReducer,
      students: studentsReducer,
      tags: tagsReducer
   },
});
