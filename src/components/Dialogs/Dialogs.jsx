import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field cols="30" rows="1"
                   name={'dialog'}
                   component={'textarea'}
                   placeholder={'New Message'}
            />
        </div>
        <div>
            <button>Написать</button>
        </div>
    </form>
};

const DialogsReduxForm = reduxForm({
    form: 'dialog'
})(DialogsForm);

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                                                  id={dialog.id}
                                                                                  avatarURL={dialog.avatarURL}/>);

    let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}
                                                                                  key={message.id}/>);
    const onSubmit = (data) => {
        props.sendMessage(data.dialog);
        console.log(data);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>

                {messagesElements}
                <DialogsReduxForm onSubmit={onSubmit}/>

            </div>
        </div>
    )
};

export default Dialogs;