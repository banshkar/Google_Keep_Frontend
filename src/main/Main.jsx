import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import Header from '../componet/header/Header';
import CreateNote from '../componet/home/CreateNote';
import Note from '../componet/notes/Note';
import Menu from '../componet/menu/Menu';
import { addNote, getAllNote ,deleteNote, getArchive} from '../service/UserService';
import { toast, ToastContainer } from 'react-toastify';

const Main = () => {
 const [note,setNote]=useState({title:"",notes:""})
 const [data,setData]=useState([]);
 const [search ,setSearch]=useState({input:""})
 const dataFilter=(id)=>{
  setData(data.filter(e=>e.id!=id))
 }
 const dataFilterSearch=(title)=>{
  setData(data.filter(e=>e.title===title))
 }
 const getSeachValue=(e)=>{
     setSearch({input:e.target.value})
 }
 const onChangeNotesHandler =(e)=>{
  const name=e.target.name 
  const value=e.target.value
       setNote({...note,[name]:value})
 }
const addNoteHandler=()=>{
    addNote(note).then((response)=>{
       toast.success("add note")
       setData(response.data)
    }).catch((error)=>{
      toast.error(error.response.data)
    })
}

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
 const removeNote=(id)=>{
  deleteNote(id).then((response)=>{
    toast.success(response.data);
    dataFilter(id);
  }).catch((error)=>{
   console.log(error)
  })
 }

 const archiveHandler=(id)=>{
  console.log("id inside",id)
   getArchive(id).then((response)=>{
    toast.success(response.data)
    loadNotes();
   }).catch((error)=>{
    console.log(error)
   })
 }
  return (
    <>
     <Header  onSearchHandles={getSeachValue}/> 
    <Container className='container'>
      <Row>
        <Col md={4}>
        <Menu/>
        </Col>
        <Col md={8}>
          <CreateNote onChangeNotes={onChangeNotesHandler} onClickHandler={addNoteHandler} />
        </Col>
        <Col md={10}>
        <Note  allNote={data} onRemove={removeNote} onArchive={archiveHandler} searchValue={search} />
        </Col>
      </Row>
     
    </Container>
    <ToastContainer/>
    </>
  )
}

export default Main;