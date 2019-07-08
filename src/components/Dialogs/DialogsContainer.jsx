import React from 'react';
import {
    sendNewMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let updateMessage = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text));
    };

    let sendMessage = () => {
        props.store.dispatch(sendNewMessageCreator());
    };

    return (
        <Dialogs
            dialogsData={state.dialogsPage.dialogsData}
            messagesData={state.dialogsPage.messagesData}
            newMessageBody={state.dialogsPage.newMessageBody}
            sendMessage={sendMessage}
            updateMessage={updateMessage}

        />
    )
};

export default DialogsContainer;