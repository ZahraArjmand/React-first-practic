import React,{useState} from "react";
import Card from "../UI/Card"
import AddUserBtn from "../UI/AddUserBtn";


const AddUser=props => {

 const [enteredUserName,setEnteredUserName]=useState("")
 const [enterdAge,setEnteredAge]=useState("")

 const AddUserHandler=event => {
  event.preventDefault()
  if(enterdAge.trim().length===0||enteredUserName.trim().length===0) {
   const errorInfo={
    title: 'Invalid input',
    message: "Please enter a valid name and age (non empty values)"
   }
   props.onError(errorInfo)
   setEnteredUserName("")
   setEnteredAge("")
   return
  }

  if(+enterdAge<=1) {
   const errorInfo={
    title: 'Invalid input',
    message: "Please enter a valid age."
   }
   props.onError(errorInfo)
   setEnteredUserName("")
   setEnteredAge("")
   return
  }

  const userData={
   userName: enteredUserName,
   age: enterdAge,
   id: Math.random().toString()
  }
  props.onAddUsers(userData)
  setEnteredUserName("")
  setEnteredAge("")
 }

 const enteredUserNameHandler=event => {
  setEnteredUserName(event.target.value)
 }

 const enteredAgeHandler=event => {
  setEnteredAge(event.target.value)
 }

 return (
  <Card>
   <form onSubmit={AddUserHandler}>
    <label htmlFor="userName">User Name:</label>
    <input type="text" id="userName" onChange={enteredUserNameHandler} value={enteredUserName}></input>
    <label htmlFor="age">Age(Years)</label>
    <input type="number" id="age" onChange={enteredAgeHandler} value={enterdAge}></input>
    <AddUserBtn type="submit">Add User</AddUserBtn>
   </form>
  </Card>
 )
}
export default AddUser