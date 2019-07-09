import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let updateMessage = (e) => {
        let text = e.target.value;
        props.updateMessage(text);
    };

    let sendMessage = () => {
        props.sendMessage();
    };

    let dialogsElements = props.dialogsPage.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} avatarURL={dialog.avatarURL} /> );

    let messagesElements = props.dialogsPage.messagesData.map( message => <Message message={message.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>

                {messagesElements}
                <div>
                    <textarea cols="30" rows="1"
                              onChange={updateMessage}
                              value={props.dialogsPage.newMessageBody}
                    />
                </div>
                <div>
                    <button onClick={sendMessage}>Написать</button>
                </div>

            </div>
        </div>
    )
};

export default Dialogs;