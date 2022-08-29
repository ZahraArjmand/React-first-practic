import React from "react";
import OverlayUI from "../UI/OverlayUI";

const Overlay=props => {
 const errorCloserHandler=() => {
  props.OnClose()
 }
 return (
  <div>
   {props.error&&<OverlayUI title={props.error.title} message={props.error.message} onConfirm={errorCloserHandler}></OverlayUI>}
  </div>)
}
export default Overlay