import {configureStore} from '@reduxjs/toolkit';
import botsReducer from './containers/NewBot/botsSlice';
import dataSourcesReducer from './components/dataSourcesSlice';
import tagsReducer from './containers/Tags/tagsSlice'


export const store = configureStore({
   reducer: {
      bots: botsReducer,
      dataSources: dataSourcesReducer,
      tags: tagsReducer
   },
});
