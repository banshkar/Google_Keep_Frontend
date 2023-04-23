import React from 'react'
import Header from '../componet/header/Header';
import Menu from '../componet/menu/Menu';
import{Row,Col,Card,CardTitle,CardText,Container} from 'reactstrap'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { toast ,ToastContainer} from 'react-toastify';
import Note from '../componet/notes/Note';
import ArchiveCard from '../componet/archives/ArchiveCard';
import { useState,useEffect } from 'react';
import { getAllNote ,getTrash} from '../service/UserService';
const Archive = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    loadNotes();
  },[]);
   const loadNotes=()=>{
      getAllNote().then((response)=>{
        setData(response.data);
      }).catch((error)=>{
        console.log(error)
      })
   }
   const dataFilter=(id)=>{
    setData(data.filter(e=>e.id!=id))
   }
   const removeNote=(id)=>{
    getTrash(id).then((response)=>{
      toast.success(response.data);
      dataFilter(id);
    }).catch((error)=>{
     console.log(error)
    })
   }
  return (
    <>
     <Header/> 
    <Container className='container'>
      <Row>
        <Col md={4}>
        <Menu/>
        </Col>
          <ArchiveCard allNote={data} onRemove={removeNote}/>
      </Row> 
    </Container>
    <ToastContainer/>
    </>
  )
}

export default Archive;
