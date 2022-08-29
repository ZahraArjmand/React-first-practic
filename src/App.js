import './App.css';
import React,{useState} from 'react';
import AddUser from './component/User/AddUser';
import styled from 'styled-components';
import UsersList from './component/User/UsersList';
import Overlay from './component/Overlay/Overlay';
const AppWrapper=styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
`
function App() {
  const [users,setUsers]=useState([])
  const [ErrorType,setErrorType]=useState()
  const AddUsersHandler=(user) => {
    setUsers((prevUsers) => {
      return [user,...prevUsers]
    })
  }
  const ErrorHandler=(error) => {
    setErrorType(error)
  }
  const closeBoxHandler=() => {
    setErrorType(null)
  }
  return (
    <AppWrapper className="App">
      <AddUser onAddUsers={AddUsersHandler} onError={ErrorHandler} />
      <UsersList users={users} />
      <Overlay error={ErrorType} OnClose={closeBoxHandler} />
    </AppWrapper>
  );
}

export default App;
