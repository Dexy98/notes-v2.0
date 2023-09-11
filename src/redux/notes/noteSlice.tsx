import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Note {
  id: number;
  title: string;
  completed: boolean
}
export interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: [],
};
export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    //1 reducer addNotes
    addNotes: (state, action:PayloadAction<string>) => {
      const newNote: Note ={ 
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.notes.push(newNote);
    },
    //fine addNotes 
    //remove notes
    removeNotes: (state, action:PayloadAction<number>) => {
       state.notes = state.notes.filter((note)=>note.id !== action.payload);
    },
    //fine removeNotes

    //nota completata
    CAMBIA_VALORE_NOTA : (state, action: PayloadAction<number>) =>{
      const note = state.notes.find(note => note.id === action.payload)
      if(note){
        note.completed = !note.completed
      }
    },
},
})


// Action creators are generated for each case reducer function
export const { addNotes,removeNotes,CAMBIA_VALORE_NOTA } = noteSlice.actions

export default noteSlice.reducer