import React from "react";
import styled from "styled-components";

const ListStyle=styled.ul`
display:flex;
flex-direction:column;
align-items:center;
width: 60vw;
list-style: none;
padding:1rem;
background-color: white;
border-radius: 10px;
margin-top: 5rem;

& li{
background-color: white;
padding:2.5% 2% 2.5% 2%;
margin:1rem;
width: 100%;
border: 1px solid black;
}
`
const UsersList=props => {
 return (
  <ListStyle>
   {
    props.users.map((user) => (
     <li key={user.id}>
      {user.userName} ({user.age}) years old
     </li>
    ))
   }
  </ListStyle>
 )
}

export default UsersList;
