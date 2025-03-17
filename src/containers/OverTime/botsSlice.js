import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {METHOD_TYPE} from "../../utils/constants";
import {fetchRequest} from "../../utils/axiosOptions";
import {localhostInstance} from "../../utils/axiosInstance";

export const fetchBots = createAsyncThunk('fetchBots', async () => {
   console.log("fetchBots ---")

   //const { tenantId, botId } = user;
   const path = `v1/bots`;
   const response = await localhostInstance(fetchRequest(METHOD_TYPE['GET'], path, {}))
   return response.data
})

export const postBot = createAsyncThunk('postBot', async ({name, url, domain, description}) => {
   console.log("postBot ---")

   const path = `v1/bots`;
   console.log("path")
   console.log(name)
   console.log(url)
   console.log(domain)
   console.log(description)
   const response = await fetchRequest(METHOD_TYPE['POST'], path, {
      'name': name,
      'domain': domain,
      'url': url
   })
   console.log(response)
   return response.data
})

export const postAsk = createAsyncThunk('postAsk', async ({text}) => {
   console.log("postAsk ---")

   const path = `v1/ask`;
   console.log(text)

   const response = await fetchRequest(METHOD_TYPE['GET'], path, {"text": text})
   console.log(response)
   return response.data
})

export const botsSlice = createSlice({
   name: 'bot',
   initialState: {
      loading: false,
      results: [],
      errors: []
   },
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(fetchBots.pending, (state, action) => {
            state.loading = true
         })
         .addCase(fetchBots.fulfilled, (state, action) => {
            state.loading = false
            state.results = action.payload || []
         })
         .addCase(fetchBots.rejected, (state, action) => {
            state.loading = false
            state.results = []
            state.errors = [...state.errors, action.error]
         })
         .addCase(postBot.pending, (state, action) => {
            state.loading = true
         })
         .addCase(postBot.fulfilled, (state, action) => {
            state.loading = false
            state.results = action.payload || []
         })
         .addCase(postBot.rejected, (state, action) => {
            state.loading = false
            state.results = []
            state.errors = [...state.errors, action.error]
         })
         .addCase(postAsk.pending, (state, action) => {
            state.loading = true
         })
         .addCase(postAsk.fulfilled, (state, action) => {
            state.loading = false
            state.results = action.payload || []
         })
         .addCase(postAsk.rejected, (state, action) => {
            state.loading = false
            state.results = []
            state.errors = [...state.errors, action.error]
         })
   }
})

//export const {} = botsSlice.actions

export default botsSlice.reducer
