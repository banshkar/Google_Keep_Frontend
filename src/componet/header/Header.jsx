import React, { useState } from 'react'
import { toast ,ToastContainer} from 'react-toastify';
import {
  Button,
  Navbar,
  NavbarBrand,
 
  NavbarText,
  NavItem,
} from 'reactstrap';
import { LogOutDto } from '../../service/UserService';
import WithRouter from '../../utility/WithRouter';
import './Header.css'
const Header = (props)=>{
 const [input,setInput]=useState({name:""})
 props.onSearchHandles(input) 
   const onChangeHAndle=(e)=>{
    
       setInput({...input,name:e.target.value})
   }
   
  const onClickHandler =(e)=>{
       let token =localStorage.getItem("token")
       LogOutDto(token).then((response)=>{
        toast.success(response.data)
        localStorage.clear();
        props.navigate("/login")
       }).catch((error)=>{
        console.log(error)
       })

  }
   
  return (
    <>
      <Navbar className='navbar' >
        <NavbarBrand href="/" className='title'>GOOGLE KEEP</NavbarBrand>
        <NavbarText className='search'>
          <input type="search" name="search" placeholder='Search Here' className='input' onChange={onChangeHAndle}/>
        </NavbarText>
        <NavItem><Button type='submit' onClick={onClickHandler}>LogOut</Button></NavItem>
      </Navbar>
      <ToastContainer/>
    </>
  )
}
export default WithRouter(Header);
