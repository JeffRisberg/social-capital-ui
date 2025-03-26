import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {METHOD_TYPE} from "../utils/constants";
import {fetchRequest} from "../utils/axiosOptions";
import {localhostInstance} from "../utils/axiosInstance";

export const fetchStudents = createAsyncThunk('fetchStudents', async () => {
   const path = `v1/students`;
   const response = await localhostInstance(fetchRequest(METHOD_TYPE['GET'], path, {}))
   return response.data
})

export const addStudent = createAsyncThunk('addStudent', async ({name}) => {
   const path = `v1/students`;
   const payload = {name}
   const response = await localhostInstance(fetchRequest(METHOD_TYPE['POST'], path, payload))
   return response.data
})

export const deleteStudent = createAsyncThunk('deleteStudent', async ({id}) => {
   const path = `v1/students`;
   const payload = {id}
   const response = await localhostInstance(fetchRequest(METHOD_TYPE['DELETE'], path, payload))
   return response.data
})

export const studentsSlice = createSlice({
   name: 'students',
   initialState: {
      loading: false,
      selected: null,
      results: [],
      errors: []
   },
   reducers: {
      select: (state, action) => {
         console.log("selecting a student in reducer " + action.payload);
         state.selected = action.payload
      }
   },
   extraReducers: builder => {
      builder
         .addCase(fetchStudents.pending, (state, action) => {
            console.log("fetch pending")
            state.loading = true
         })
         .addCase(fetchStudents.fulfilled, (state, action) => {
            console.log("fetch fulfilled")
            state.loading = false
            state.results = action.payload || []
            console.log(state.results)
         })
         .addCase(fetchStudents.rejected, (state, action) => {
            console.log("fetch rejected")
            state.loading = false
            state.results = []
            state.errors = [...state.errors, action.error]
         })
         .addCase(addStudent.pending, (state, action) => {
            console.log("add pending")
            state.loading = true
         })
         .addCase(addStudent.fulfilled, (state, action) => {
            console.log("add fulfilled")
            state.loading = false
            state.results.data?.push(action.payload);
         })
         .addCase(addStudent.rejected, (state, action) => {
            console.log("add rejected")
            state.loading = false
            state.errors = [...state.errors, action.error]
         })
         .addCase(deleteStudent.fulfilled, (state, action) => {
            console.log("delete fulfilled")
            const removedId = action.meta.arg.id
            state.results.data = state.results.data.filter(item => item.id !== removedId)
         })
   }
})

export const {select} = studentsSlice.actions

export default studentsSlice.reducer
