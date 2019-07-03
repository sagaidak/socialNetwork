import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Masha
                </div>
                <div className={s.dialog}>
                    Lena
                </div>
                <div className={s.dialog}>
                    Olga
                </div>
                <div className={s.dialog}>
                    Irina
                </div>
                <div className={s.item}>
                    Ksusha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I want you now.</div>
            </div>
        </div>
    )
}

export default Dialogs;