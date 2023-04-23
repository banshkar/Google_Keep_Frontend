import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import Header from '../componet/header/Header';
import Menu from '../componet/menu/Menu';
const Reminder = () => {
  return (
   <> 
    <Header/> 
   <Container className='container'>
     <Row>
       <Col md={4}>
       <Menu/>
       </Col>
       <Col md={8}>
         <h1>ARemider</h1>
       </Col>
     </Row>

   </Container>

   </>
  )
}

export default Reminder;