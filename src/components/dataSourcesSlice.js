import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {METHOD_TYPE} from "../Utils/constants";
import {fetchRequest} from "../Utils/axiosOptions";
import {localhostInstance} from "../Utils/axiosInstance";

export const fetchDataSources = createAsyncThunk('fetchDataSources', async () => {
   console.log("fetchDataSources ---")

   //const { tenantId, dataSourceId } = user;
   const path = `v1/dataSources`;
   const response = await localhostInstance(fetchRequest(METHOD_TYPE['GET'], path, {}))
   return response.data
})

export const postDataSource = createAsyncThunk('postDataSource', async ({
                                                                           name,
                                                                           url,
                                                                           domain,
                                                                           description
                                                                        }) => {
   console.log("postDataSource ---")

   //const tenantId = 10000;
   // const path = `${tenantId}/dataSources`;
   const path = `v1/dataSources`;
   console.log("path")
   console.log(name)
   console.log(url)
   console.log(domain)
   console.log(description)
   const response = await localhostInstance(fetchRequest(METHOD_TYPE['POST'], path, {
      'name': name,
      'domain': domain,
      'url': url
   }))
   console.log(response)
   return response.data
})

export const dataSourcesSlice = createSlice({
   name: 'dataSources',
   initialState: {
      loading: false,
      results: [],
      errors: []
   },
   reducers: {
      select: (state, action) => {
         console.log("selecting a datasource in reducer " + action.payload);
         state.selected = action.payload
      }
   },
   extraReducers: builder => {
      builder
         .addCase(fetchDataSources.pending, (state, action) => {
            state.loading = true
         })
         .addCase(fetchDataSources.fulfilled, (state, action) => {
            state.loading = false
            state.results = action.payload || []
         })
         .addCase(fetchDataSources.rejected, (state, action) => {
            state.loading = false
            state.results = []
            state.errors = [...state.errors, action.error]
         })
         .addCase(postDataSource.pending, (state, action) => {
            state.loading = true
         })
         .addCase(postDataSource.fulfilled, (state, action) => {
            state.loading = false
            state.results = action.payload || []
         })
         .addCase(postDataSource.rejected, (state, action) => {
            state.loading = false
            state.results = []
            state.errors = [...state.errors, action.error]
         })
   }
})

export const {select} = dataSourcesSlice.actions

export default dataSourcesSlice.reducer
