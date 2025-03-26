import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {METHOD_TYPE} from "../utils/constants";
import {fetchRequest} from "../utils/axiosOptions";
import {localhostInstance} from "../utils/axiosInstance";

export const fetchSurveys = createAsyncThunk('fetchSurveys', async () => {
   const path = `v1/surveys`;
   const response = await localhostInstance(fetchRequest(METHOD_TYPE['GET'], path, {}))
   return response.data
})

export const addSurvey = createAsyncThunk('addSurvey', async ({name}) => {
   const path = `v1/surveys`;
   const payload = {name}
   const response = await localhostInstance(fetchRequest(METHOD_TYPE['POST'], path, payload))
   return response.data
})

export const deleteSurvey = createAsyncThunk('deleteSurvey', async ({id}) => {
   const path = `v1/surveys`;
   const payload = {id}
   const response = await localhostInstance(fetchRequest(METHOD_TYPE['DELETE'], path, payload))
   return response.data
})

export const surveysSlice = createSlice({
   name: 'surveys',
   initialState: {
      loading: false,
      selected: null,
      results: [],
      errors: []
   },
   reducers: {
      select: (state, action) => {
         console.log("selecting a survey in reducer " + action.payload);
         state.selected = action.payload
      }
   },
   extraReducers: builder => {
      builder
         .addCase(fetchSurveys.pending, (state, action) => {
            console.log("fetch pending")
            state.loading = true
         })
         .addCase(fetchSurveys.fulfilled, (state, action) => {
            console.log("fetch fulfilled")
            state.loading = false
            state.results = action.payload || []
            console.log(state.results)
         })
         .addCase(fetchSurveys.rejected, (state, action) => {
            console.log("fetch rejected")
            state.loading = false
            state.results = []
            state.errors = [...state.errors, action.error]
         })
         .addCase(addSurvey.pending, (state, action) => {
            console.log("add pending")
            state.loading = true
         })
         .addCase(addSurvey.fulfilled, (state, action) => {
            console.log("add fulfilled")
            state.loading = false
            state.results.data?.push(action.payload);
         })
         .addCase(addSurvey.rejected, (state, action) => {
            console.log("add rejected")
            state.loading = false
            state.errors = [...state.errors, action.error]
         })
         .addCase(deleteSurvey.fulfilled, (state, action) => {
            console.log("delete fulfilled")
            const removedId = action.meta.arg.id
            state.results.data = state.results.data.filter(item => item.id !== removedId)
         })
   }
})

export const {select} = surveysSlice.actions

export default surveysSlice.reducer
