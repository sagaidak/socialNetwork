import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        console.log(text);
    }

    let dialogsElements = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} avatarURL={dialog.avatarURL} /> );

    let messagesElements = props.state.messagesData.map( message => <Message message={message.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>

                {messagesElements}
                <div>
                    <textarea ref={newMessage} cols="30" rows="1"></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Написать</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;