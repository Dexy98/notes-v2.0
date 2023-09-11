import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { addNotes } from '../redux/notes/noteSlice';



export const AddToForm: React.FC = () => {

  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();



    const onSubmit = (e:any) => {
        e.preventDefault()
        if (value.length > 0) {
          dispatch(
              addNotes(value)
          )
        }
        setValue('')
    }

  return ( 
    <form onSubmit={onSubmit}>
      <input
      onChange={(e)=> setValue(e.target.value) } 
      value={value}
      type="text" 
      placeholder='scrivi la tua nota...' />
        <button type='submit' >Aggiungi</button>
    </form>
);
}