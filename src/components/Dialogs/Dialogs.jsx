import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from "../Dialogs/Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
    

let dialogsElements = props.state.dialogData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogStyle}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
