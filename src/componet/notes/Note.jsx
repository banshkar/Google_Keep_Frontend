import React from 'react'
import{Row,Col,Card,CardTitle,CardText} from 'reactstrap'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { deleteNote } from '../../service/UserService';
import { toast ,ToastContainer} from 'react-toastify';

const Note = (props) => {
    const values=props.allNote.filter(e=>e.archive!=true);
      let search =props.searchValue;


    const deletedHandler=(id)=>{
          props.onRemove(id);
    }
    const archiveClick=(id)=>{
      console.log("working")
      props.onArchive(id)
    }
  return (
    <>
        <Row>
    {
     values.filter(val=>{
      if(search===''){
        return val;
      }
      else if(val.title.toLowerCase().includes(search.input.toLowerCase())){
        return val;
      }
     }).map((value,index)=>{
         return (
          <Col sm="5" key={index}>
            <Card body>
              <CardTitle tag="h5">
                {value.title}
              </CardTitle>
              <CardText>
               {value.notes}
              </CardText>
              <div className="icons">
       <Button><NotificationsActiveIcon/></Button>
       <Button onClick={()=>{
        archiveClick(value.id)
       }}><ArchiveIcon/></Button>
       <Button onClick={()=>{
        deletedHandler(value.id)
       }}><DeleteIcon/></Button>
       <Button><ModeIcon/></Button>
       </div>
            </Card>
          </Col>

         );
      })
    }
    </Row>
    <ToastContainer/>
</>
  )
}

export default Note