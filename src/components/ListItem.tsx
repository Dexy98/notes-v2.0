import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CAMBIA_VALORE_NOTA, Note, removeNotes } from '../redux/notes/noteSlice'
import { Rootstate } from '../redux/store'

const ListItem: React.FC = () => {
  //addNotes
  const notes:Note[] = useSelector((state:Rootstate) => state.notes)
  //removeNotes
  const dispatch = useDispatch();
  const handleDeleteNote = (id:number) =>{
    dispatch(removeNotes(id))
  }

  //change completed value
    const cambiaValoreCompleted = (id:number) => {
      dispatch(CAMBIA_VALORE_NOTA(id))
    }
  return (
  <>
    <ul>
      {notes.map(({id, title,completed}) => (
        <div key={id}>
          <input type="checkbox" name={title} value={title} onClick={()=>cambiaValoreCompleted(id)}/>
          <li className={completed? 'completed': ''}>{title}</li>
          <button onClick={()=> handleDeleteNote(id)}>❌</button>
        </div>
        ))}
    </ul>
  </>
  )
}

export default ListItem
