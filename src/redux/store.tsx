import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './notes/noteSlice'
export const store = configureStore({
    reducer : notesReducer,
})




//per typescript
export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch