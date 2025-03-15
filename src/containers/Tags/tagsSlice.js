import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {METHOD_TYPE} from "../../Utils/constants";
import {fetchRequest} from "../../Utils/axiosOptions";
import {localhostInstance} from "../../Utils/axiosInstance";

export const fetchTags = createAsyncThunk('fetchTags', async () => {
   const path = `v1/tags`;
   const response = await localhostInstance(fetchRequest(METHOD_TYPE['GET'], path, {}))
   return response.data
})

export const addTag = createAsyncThunk('addTag', async ({name}) => {
   const path = `v1/tags`;
   const payload = {name}
   const response = await localhostInstance(fetchRequest(METHOD_TYPE['POST'], path, payload))
   return response.data
})

export const deleteTag = createAsyncThunk('deleteTag', async ({id}) => {
   const path = `v1/tags`;
   const payload = {id}
   const response = await localhostInstance(fetchRequest(METHOD_TYPE['DELETE'], path, payload))
   return response.data
})

export const tagsSlice = createSlice({
   name: 'tags',
   initialState: {
      loading: false,
      selected: null,
      results: [],
      errors: []
   },
   reducers: {
      select: (state, action) => {
         console.log("selecting a tag in reducer " + action.payload);
         state.selected = action.payload
      }
   },
   extraReducers: builder => {
      builder
         .addCase(fetchTags.pending, (state, action) => {
            console.log("fetch pending")
            state.loading = true
         })
         .addCase(fetchTags.fulfilled, (state, action) => {
            console.log("fetch fulfilled")
            state.loading = false
            state.results = action.payload || []
            console.log(state.results)
         })
         .addCase(fetchTags.rejected, (state, action) => {
            console.log("fetch rejected")
            state.loading = false
            state.results = []
            state.errors = [...state.errors, action.error]
         })
         .addCase(addTag.pending, (state, action) => {
            console.log("add pending")
            state.loading = true
         })
         .addCase(addTag.fulfilled, (state, action) => {
            console.log("add fulfilled")
            state.loading = false
            state.results.data?.push(action.payload);
         })
         .addCase(addTag.rejected, (state, action) => {
            console.log("add rejected")
            state.loading = false
            state.errors = [...state.errors, action.error]
         })
         .addCase(deleteTag.fulfilled, (state, action) => {
            console.log("delete fulfilled")
            const removedId = action.meta.arg.id
            state.results.data = state.results.data.filter(item => item.id !== removedId)
         })
   }
})

export const {select} = tagsSlice.actions

export default tagsSlice.reducer
