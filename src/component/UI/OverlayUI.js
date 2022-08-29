import React from "react";
import AddUserBtn from "./AddUserBtn";
import classes from './OverlayUI.module.css'
//import styled from "styled-components";
const OverlayUI=props => {
 //const BackDrop=styled.div`
 // width:100%;
 // height:100%;
 // background-color:rgba(0,0,0,.400);
 // position: absolute;
 // top:0;
 // z-index:5;
 // display:flex;
 // justify-content:center;
 // align-items:center;
 // border-radius: 25px;`
 // & div{
 //  background-color:white;
 //  width: 60vw;
 //  height:35vh;
 //  z-index:10;
 //  border-radius: 10px;
 //  display:flex;
 //  flex-direction:column;
 //justify-content:space-between;
 //  }
 // & div header{
 //  background-color: purple;
 //  height:30%;
 //  color:white;
 //  width:100%;
 //  display:flex;
 //  justify-content:flex-start;
 //  padding-left:1rem;
 // }
 // & div p {
 //  font-weight:bold;
 // }
 // & div footer{
 //  width:100%;
 //  display:flex;
 //  justify-content:flex-end;
 //  padding:0 0.8rem 0.8rem 0;
 // }
 // `

 return (
  <div className={classes.backdrop} onClick={props.onConfirm}>
   <div className={classes.modal}>
    <header className={classes.header}><h2>{props.title}</h2></header>
    <div className={classes.content}>
     <p>{props.message}</p>
    </div>
    <footer className={classes.actions}><AddUserBtn onClick={props.onConfirm}>Okey</AddUserBtn></footer>
   </div>
  </div>
  //<BackDrop>
  // <div>
  //  <header><h2>Invalid input</h2></header>
  //  <p>{props.children}</p>
  //  <footer><AddUserBtn onClick={okeyBtnHandler}>Okey</AddUserBtn></footer>
  // </div>

  //</BackDrop>
 )
}
export default OverlayUI