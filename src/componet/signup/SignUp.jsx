import React, { useState } from 'react'
import { Container ,Row,Form,FormGroup,Input,Label,Col,Card, Button,CardBody,CardHeader} from 'reactstrap'
import Header from '../header/Header'
import './SignUp.css'
import {Link} from 'react-router-dom'
import { Register } from '../../service/UserService'
import {toast,ToastContainer} from 'react-toastify';
const SignUp = () => {
  const [signup ,setSignup]=useState({name:"",email:"",password:""})
  const onChangeHandler =(e)=>{
    const name =e.target.name
    const value =e.target.value
    setSignup({...signup,[name]:value})
}
const onSubmitHandle =(e)=>{
e.preventDefault();
   Register(signup).then((response)=>{
    toast.success(response.data)
   }).catch((error)=>{
     toast.error(error.response.data)
   })
}
console.log("out side", signup)
const onResetHandle=(e)=>{
     setSignup({name:"",email:"",password:""})
}
  return (
    <>
    <Header/>
   <Container className="mt-4 mb-4">
         <Row>
            <Col sm={{size:6,offset:3}} >
            <Card color="dark" outline >
            <CardHeader >
               <h2>REGISTRATION</h2>
            </CardHeader>
            <CardBody >
                <Form >
                    <FormGroup>
                        <Label for="name">Enter Name</Label>
                        <Input type="text" placeholder="Enter Here" name="name" id="name"  onChange={onChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Enter email</Label>
                        <Input type="email" placeholder="Enter Here" name="email" id="email" onChange={onChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Enter password</Label>
                        <Input type="password" placeholder="Enter Here" name="password" id="password" onChange={onChangeHandler}/>
                    </FormGroup>

                </Form>
                <Container>
                    <Button type='submit' className='mx-4' color="success" onClick={onSubmitHandle}>SignUp</Button>
                    <Button type='reset' onClick={onResetHandle}>Reset</Button>
                </Container>
                <Link to="/login">Login Here</Link>
            </CardBody>
        </Card>
            </Col>
         </Row>
       </Container>
       <ToastContainer/>
    </>
  )
}

export default SignUp;