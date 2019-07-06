import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Lena'},
        {id: 4, name: 'Katya'},
        {id: 5, name: 'Ksusha'},
        {id: 6, name: 'Albina'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'I love you'},
        {id: 1, message: 'I need you'},
        {id: 1, message: 'I want you'},
    ];

    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let messagesElements = messagesData.map( message => <Message message={message.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;