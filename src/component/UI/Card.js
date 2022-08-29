import React from "react";
import styled from "styled-components";

const FormWrapper=styled.div`
display: flex;
align-items:center;
background-color: white;
flex-direction: column;
border-radius: 10px;
width: 60vw;
margin-top:5rem;

& form{
 margin:1rem 0 1rem 0;
 padding:2.5% 2% 2.5% 2%;
 display: flex;
 flex-direction: column;
align-items:flex-start;
width: 100%;
}
& form input{
 width:100%;
 margin: 2% 0 2% 0;
 height:2rem;
}
& form label{
 font-weight: bold;
 align-self:flex-start;
 margin: 2% 0 2% 0;

}
`;

const Card=props => {
 return (
  <FormWrapper>
   {props.children}
  </FormWrapper>
 )
}
export default Card;