import React from 'react'
import './CreateNote.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
const CreateNote= (props) => {
  
  const onChangehandle=(e)=>{
       props.onChangeNotes(e)
  }
  return (
   <>
    <div className='main_note'>
    <form className='form'>
       <input type="text" placeholder='Title' autoComplete='off' name="title" onChange={onChangehandle}/>
       <textarea  className='textarea'  placeholder='Write Here' name="notes" onChange={onChangehandle}/>
       <div className="icons">
       <Button onClick={props.onClickHandler}><AddIcon/></Button>
       <Button><NotificationsActiveIcon/></Button>
       <Button><ArchiveIcon/></Button>
       <Button><DeleteIcon/></Button>
       <Button><ModeIcon/></Button>
       </div>
    </form>
     <div className='btn'>
     <Button>Clear</Button>
     </div>
    </div>
   </>
  )
}

export default CreateNote;