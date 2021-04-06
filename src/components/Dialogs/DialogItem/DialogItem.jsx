import React from "react";
import { NavLink } from "react-router-dom";
import s from '../DialogItem/DialogItem.module.css'

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
export default DialogItem;