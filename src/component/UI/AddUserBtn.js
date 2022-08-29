import React from "react";
import styled from "styled-components";
const Button=styled.button`
background-color: purple;
color: white;
width: 20%;
height: 3.5rem;
outline-style: none;
border:none;
font-size: 1.1em;

`
const AddUserBtn=(props) => {
 return (
  <Button type={props.type||"button"} onClick={props.onclick}>
   {props.children}
  </Button>
 )
}
export default AddUserBtn