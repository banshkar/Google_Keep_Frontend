import React, { useState } from 'react'
import { Container ,Row,Form,FormGroup,Input,Label,Col,Card, Button,CardBody,CardHeader} from 'reactstrap'
import{Link} from'react-router-dom'
import { LoginDto } from '../../service/UserService';
import {toast,ToastContainer} from 'react-toastify'
import WithRouter from '../../utility/WithRouter';
const Login = (props) => {
    const [loginData,setLoginData]=useState({email:"",password:""});

    const onChangeHandler=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setLoginData({...loginData,[name]:value})
    }

    const onSubmitHandle=(e)=>{
        e.preventDefault();
        LoginDto(loginData).then((response)=>{
            localStorage.setItem("login",true)
            localStorage.setItem("token",response.data.result)
            toast.success(response.data.message)
            props.navigate("/home")
        }).catch((error)=>{
             toast.error(error.response.data)
        })
    }
  return (
    <>
   <Container className="mt-4 mb-4">
         <Row>
            <Col sm={{size:6,offset:3}} >
            <Card color="dark" outline >
            <CardHeader >
               <h2>Login</h2>
            </CardHeader>
            <CardBody >
                <Form >
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
                    <Button type='submit' onClick={onSubmitHandle}>Login</Button>
                </Container>
                <Link to="/signup">Click here For Registration</Link>
            </CardBody>
        </Card>
            </Col>
         </Row>
       </Container>
       <ToastContainer/>
    </>
  )
}

export default WithRouter(Login);