import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ModeIcon from '@mui/icons-material/Mode';
import "./Menu.css";
import {Link} from 'react-router-dom'
const Menu=()=>{
    return(

        <ListGroup className="listGroup">
           <Link to="/home"> <ListGroupItem  className="text"><AddIcon/><span>Notes</span></ListGroupItem></Link>
          
            <Link to="/reminder">  <ListGroupItem className="text"><NotificationsActiveIcon/><span>Reminder</span></ListGroupItem></Link>

           <Link to="/archive"><ListGroupItem  className="text"><ArchiveIcon/><span>Archive</span></ListGroupItem></Link> 
            <Link to ="/trash"><ListGroupItem className="text"><DeleteIcon/><span>Trash</span></ListGroupItem></Link>
        </ListGroup>
    );
}
export default Menu;