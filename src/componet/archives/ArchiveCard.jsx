import React from 'react'
import{Row,Col,Card,CardTitle,CardText} from 'reactstrap'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { toast ,ToastContainer} from 'react-toastify';

const ArchiveCard = (props) => {
    const values=props.allNote.filter(e=>e.archive===true && e.trash===false);
    const deletedHandler=(id)=>{
          props.onRemove(id);
    }
  return (
    <>
     
    {
     values.map((value,index)=>{
         return (
          <Col md={4} key={index}>
            <Card body>
              <CardTitle tag="h5">
                {value.title}
              </CardTitle>
              <CardText>
               {value.notes}
              </CardText>
              <div className="icons">
       <Button><NotificationsActiveIcon/></Button>
       <Button><ArchiveIcon/></Button>
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

    <ToastContainer/>
</>
  )
}

export default ArchiveCard;